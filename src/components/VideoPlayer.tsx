import React, { useRef, useEffect, useState } from 'react';
import { Channel } from '../types/channel';
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize } from 'lucide-react';
import Hls from 'hls.js';

interface VideoPlayerProps {
	channel: Channel;
	onClose: () => void;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ channel, onClose }) => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [isPlaying, setIsPlaying] = useState(true);
	const [isMuted, setIsMuted] = useState(false);
	const [isFullscreen, setIsFullscreen] = useState(false);
	const [volume, setVolume] = useState(1);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string>('');

	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;

		setError('');

		const isHttpsPage = window.location.protocol === 'https:';
		const isHttpStream = channel.url.startsWith('http:');
		if (isHttpsPage && isHttpStream) {
			setError('Este stream usa http y fue bloqueado por el navegador (contenido mixto). Usa una URL https o un proxy https.');
			setLoading(false);
			return;
		}

		const handleLoadStart = () => setLoading(true);
		const handleCanPlay = () => setLoading(false);
		const handlePlay = () => setIsPlaying(true);
		const handlePause = () => setIsPlaying(false);
		const handleError = () => {
			setLoading(false);
			setError('No se pudo reproducir el stream. Puede ser CORS, token, o formato.');
		};

		video.addEventListener('loadstart', handleLoadStart);
		video.addEventListener('canplay', handleCanPlay);
		video.addEventListener('play', handlePlay);
		video.addEventListener('pause', handlePause);
		video.addEventListener('error', handleError);

		let hls: Hls | null = null;

		const setupPlayback = async () => {
			try {
				// HLS.js para navegadores sin soporte nativo
				if (Hls.isSupported() && channel.url.includes('.m3u8')) {
					hls = new Hls({
						// Ajustes típicos para streams públicos
						enableWorker: true,
						lowLatencyMode: true,
						backBufferLength: 90,
					});
					hls.on(Hls.Events.ERROR, (_, data) => {
						if (data?.fatal) {
							setError('Error fatal de reproducción (HLS).');
							setLoading(false);
						}
					});
					hls.attachMedia(video);
					hls.on(Hls.Events.MEDIA_ATTACHED, () => {
						hls?.loadSource(channel.url);
					});
				} else {
					// Safari/iOS o streams no HLS
					video.src = channel.url;
				}
				await video.play().catch(() => {/* autoplay puede fallar si no hubo interacción */});
			} catch (e) {
				setError('No se pudo iniciar el reproductor.');
				setLoading(false);
			}
		};

		setupPlayback();

		return () => {
			video.removeEventListener('loadstart', handleLoadStart);
			video.removeEventListener('canplay', handleCanPlay);
			video.removeEventListener('play', handlePlay);
			video.removeEventListener('pause', handlePause);
			video.removeEventListener('error', handleError);
			if (hls) {
				hls.destroy();
				hls = null;
			}
		};
	}, [channel.url]);

	const togglePlay = () => {
		const video = videoRef.current;
		if (!video) return;

		if (isPlaying) {
			video.pause();
		} else {
			video.play();
		}
	};

	const toggleMute = () => {
		const video = videoRef.current;
		if (!video) return;

		video.muted = !isMuted;
		setIsMuted(!isMuted);
	};

	const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const video = videoRef.current;
		if (!video) return;

		const newVolume = parseFloat(e.target.value);
		video.volume = newVolume;
		setVolume(newVolume);
	};

	const toggleFullscreen = () => {
		if (!document.fullscreenElement) {
			document.documentElement.requestFullscreen();
			setIsFullscreen(true);
		} else {
			document.exitFullscreen();
			setIsFullscreen(false);
		}
	};

	return (
		<div className="fixed inset-0 bg-black z-50 flex flex-col">
			{/* Header */}
			<div className="flex items-center justify-between p-4 bg-gradient-to-b from-black/80 to-transparent text-white">
				<div>
					<h1 className="text-2xl font-bold">{channel.name}</h1>
					<p className="text-gray-300">{channel.category}</p>
				</div>
				<button
					onClick={onClose}
					className="p-2 hover:bg-white/20 rounded-full transition-colors"
				>
					<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>

			{/* Video Container */}
			<div className="flex-1 relative">
				{loading && (
					<div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
						<div className="animate-spin rounded-full h-12 w-12 border-4 border-red-600 border-t-transparent"></div>
					</div>
				)}

				{error && (
					<div className="absolute inset-0 flex items-center justify-center bg-black/70 z-20 p-4 text-center">
						<div className="text-red-400 text-sm max-w-xl">
							{error}
							<div className="text-gray-300 mt-2">
								Sugerencias: usar enlaces https, configurar un proxy con HTTPS/CORS, o reproducir desde Safari en iOS.
							</div>
						</div>
					</div>
				)}
				
				<video
					ref={videoRef}
					className="w-full h-full object-contain"
					playsInline
					controls={false}
				/>

				{/* Controls Overlay */}
				<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
					<div className="flex items-center space-x-4 text-white">
						<button
							onClick={togglePlay}
							className="p-2 hover:bg-white/20 rounded-full transition-colors"
						>
							{isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
						</button>

						<button
							onClick={toggleMute}
							className="p-2 hover:bg-white/20 rounded-full transition-colors"
						>
							{isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
						</button>

						<input
							type="range"
							min="0"
							max="1"
							step="0.1"
							value={volume}
							onChange={handleVolumeChange}
							className="w-20 accent-red-600"
						/>

						<div className="flex-1" />

						<button
							onClick={toggleFullscreen}
							className="p-2 hover:bg-white/20 rounded-full transition-colors"
						>
							{isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};