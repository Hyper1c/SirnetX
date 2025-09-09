import React, { useState, useRef } from 'react';
import { Play, Volume2, VolumeX, Maximize, RefreshCw, Search, Filter } from 'lucide-react';
import { channels, categories } from '../data/channels';
import type { Channel } from '../types/channel';
import Icon from './Icon';
import { useLanguage } from '../contexts/LanguageContext';
import Hls from 'hls.js';
import mpegts from 'mpegts.js';

const LiveTV: React.FC = () => {
  const { t } = useLanguage();
  const [currentChannel, setCurrentChannel] = useState<Channel | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isMuted, setIsMuted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);
  const mpegtsRef = useRef<any>(null);

  const filteredChannels = channels.filter(channel => {
    const matchesSearch = channel.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || channel.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const cleanupPlayers = () => {
    if (hlsRef.current) {
      hlsRef.current.destroy();
      hlsRef.current = null;
    }
    if (mpegtsRef.current) {
      mpegtsRef.current.destroy();
      mpegtsRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.removeAttribute('src');
      videoRef.current.load();
    }
  };

  const detectStreamType = (url: string) => {
    if (url.includes('.m3u8')) return 'application/x-mpegURL';
    if (url.includes('.ts')) return 'video/mp2t';
    return 'video/mp4';
  };

  const playStream = (url: string) => {
    const video = videoRef.current;
    if (!video) return;

    const streamType = detectStreamType(url);

    if (streamType === 'application/x-mpegURL') {
      if (Hls.isSupported()) {
        const hls = new Hls({
          maxBufferLength: 60,
          maxMaxBufferLength: 120,
          liveSyncDuration: 5,
          liveMaxLatencyDuration: 10,
          maxBufferHole: 3,
          fragLoadingTimeOut: 60000,
          manifestLoadingTimeOut: 60000,
        });
        hlsRef.current = hls;

        hls.loadSource(url);
        hls.attachMedia(video);

        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          video.play().catch(console.error);
          setIsLoading(false);
        });

        

      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = url;
        video.addEventListener('loadedmetadata', () => {
          video.play().catch(console.error);
          setIsLoading(false);
        });
      } else {
        setError('HLS no soportado en este navegador');
        setIsLoading(false);
      }
    } else if (streamType === 'video/mp2t') {
      if (mpegts.getFeatureList().mseLivePlayback) {
        const player = mpegts.createPlayer({ type: 'mpegts', isLive: true, url });
        mpegtsRef.current = player;
        player.attachMediaElement(video);
        player.load();
        player.play();
        setIsLoading(false);
      } else {
        setError('MPEG-TS no soportado en este navegador');
        setIsLoading(false);
      }
    } else {
      video.src = url;
      video.play().catch(console.error);
      setIsLoading(false);
    }
  };

  const playChannel = (channel: Channel) => {
    if (currentChannel?.name === channel.name) return;
    cleanupPlayers();
    setCurrentChannel(channel);
    setIsLoading(true);
    setError(null);
    playStream(channel.url);
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const refreshChannels = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setCurrentChannel(null);
    setError(null);
    cleanupPlayers();
  };


  return (
    <div className="space-y-6">
      {/* Player */}
      <div className="bg-gray-900 rounded-xl overflow-hidden">
        <div className="relative aspect-video bg-black">
          <video
            ref={videoRef}
            className="w-full h-full object-contain"
            controls
            playsInline
            muted={isMuted}
            onError={() => setError(`Error al cargar ${currentChannel?.name || ''}`)}
          />
          {!currentChannel && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <Play size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('select-channel')}</h3>
              <p className="text-gray-400">{t('select-channel-desc')}</p>
            </div>
          )}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
              <div className="flex flex-col items-center text-white">
                <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin mb-2"></div>
                <p>{t('loading-channel')}</p>
              </div>
            </div>
          )}
          {error && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
              <div className="flex flex-col items-center text-white text-center p-4">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">⚠️</span>
                </div>
                <p className="text-red-400">{error}</p>
              </div>
            </div>
          )}
        </div>
        {currentChannel && (
          <div className="p-4 bg-gray-800 flex items-center justify-between">
            <div>
              <h3 className="text-white font-semibold">{currentChannel.name}</h3>
              <p className="text-gray-400 text-sm capitalize">{currentChannel.category}</p>
              {currentChannel.description && (
                <p className="text-gray-500 text-xs mt-1">{currentChannel.description}</p>
              )}
            </div>
            <div className="flex gap-2">
              <button onClick={toggleMute} className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white">
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
              <button onClick={toggleFullscreen} className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white">
                <Maximize size={20} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder={t('search-channels')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-white"
          />
        </div>
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-8 py-2 text-white"
          >
            {categories.map(category => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))}
          </select>
        </div>
        <button onClick={refreshChannels} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center gap-2">
          <RefreshCw size={20} />
          <span className="hidden sm:inline">{t('refresh')}</span>
        </button>
      </div>

      {/* Channel Count */}
      <div className="text-gray-400 text-sm">
        {t('channel-count').replace('{count}', filteredChannels.length.toString()).replace('{total}', channels.length.toString())}
      </div>


      {/* Channels Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
        {filteredChannels.map((channel) => (
          <button
            key={channel.name}
            onClick={() => playChannel(channel)}
            className={`p-4 rounded-lg border-2 transition-all ${
              currentChannel?.name === channel.name
                ? 'border-blue-500 bg-blue-500/10'
                : 'border-gray-700 bg-gray-800 hover:border-gray-600 hover:bg-gray-700'
            }`}
            title={channel.description || channel.name}
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                <Icon name={channel.icon.replace('fas fa-', '')} className="text-white" size={24} />
              </div>
              <h4 className="text-white text-sm font-medium mb-1">{channel.name}</h4>
              <p className="text-gray-400 text-xs capitalize">{channel.category}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LiveTV;
