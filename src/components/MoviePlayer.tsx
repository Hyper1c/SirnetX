import React, { useRef, useState, useEffect } from "react";
import type { ContentItem } from "../data/mockContent";

interface MoviePlayerProps {
  movie: ContentItem;
  onClose: () => void;
}

const MoviePlayer: React.FC<MoviePlayerProps> = ({ movie, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const [isVideoFile, setIsVideoFile] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [showSpeedMenu, setShowSpeedMenu] = useState(false);
  const [hoverTime, setHoverTime] = useState(0);
  const [isHoveringProgress, setIsHoveringProgress] = useState(false);
  const [showSkipIndicator, setShowSkipIndicator] = useState(false);
  const [skipDirection, setSkipDirection] = useState<'forward' | 'backward' | null>(null);
  const [autoplayTimeout, setAutoplayTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const checkVideoType = () => {
      const isVideo = movie.streamUrl?.endsWith(".mp4") || movie.streamUrl?.endsWith(".webm") || movie.streamUrl?.endsWith(".ogg");
      console.log('Stream URL:', movie.streamUrl);
      console.log('Is video file:', isVideo);
      setIsVideoFile(!!isVideo);
    };

    checkVideoType();

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
      setIsLoading(false);
      
      // Intentar autoplay inmediatamente
      video.muted = true; // Asegurar que esté silenciado para autoplay
      video.play().then(() => {
        setIsPlaying(true);
        setShowPlayButton(false);
        console.log('Autoplay successful');
      }).catch((error) => {
        console.log('Autoplay blocked:', error);
        setShowPlayButton(true);
      });
    };

    const handleCanPlay = () => {
      // También intentar autoplay cuando el video puede reproducirse
      if (!hasUserInteracted && video.paused) {
        video.muted = true;
        video.play().then(() => {
          setIsPlaying(true);
          setShowPlayButton(false);
          console.log('Autoplay successful on canplay');
        }).catch((error) => {
          console.log('Autoplay blocked on canplay:', error);
          setShowPlayButton(true);
        });
      }
    };

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };

    const handlePlay = () => {
      setIsPlaying(true);
      setShowPlayButton(false);
    };
    
    const handlePause = () => {
      setIsPlaying(false);
      setShowPlayButton(true);
    };
    
    const handleEnded = () => {
      setIsPlaying(false);
      setShowPlayButton(true);
    };

    const handleUserInteraction = () => {
      setHasUserInteracted(true);
      if (video.paused) {
        video.play().then(() => {
          setIsPlaying(true);
          setShowPlayButton(false);
        });
      }
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('click', handleUserInteraction);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('click', handleUserInteraction);
    };
  }, [movie.streamUrl]);

  // Intentar autoplay cuando el componente se monta
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isVideoFile) return;

    // Pequeño delay para asegurar que el video esté listo
    const timer = setTimeout(() => {
      if (!hasUserInteracted && video.paused) {
        video.muted = true;
        video.play().then(() => {
          setIsPlaying(true);
          setShowPlayButton(false);
          console.log('Autoplay successful on mount');
        }).catch((error) => {
          console.log('Autoplay blocked on mount:', error);
          setShowPlayButton(true);
        });
      }
    }, 100);

    // Timeout de respaldo para mostrar botón de play si no hay autoplay
    const fallbackTimer = setTimeout(() => {
      if (!hasUserInteracted && video.paused) {
        setShowPlayButton(true);
        console.log('Showing play button due to autoplay timeout');
      }
    }, 3000);

    setAutoplayTimeout(fallbackTimer);

    return () => {
      clearTimeout(timer);
      clearTimeout(fallbackTimer);
    };
  }, [isVideoFile, hasUserInteracted]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const video = videoRef.current;
      if (!video) return;

      switch (e.code) {
        case 'Space':
          e.preventDefault();
          togglePlayPause();
          break;
        case 'KeyM':
          toggleMute();
          break;
        case 'KeyF':
          toggleFullscreen();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          if (e.shiftKey) {
            seek(-30); // Retroceder 30 segundos con Shift
          } else {
            seek(-10); // Retroceder 10 segundos
          }
          break;
        case 'ArrowRight':
          e.preventDefault();
          if (e.shiftKey) {
            seek(30); // Avanzar 30 segundos con Shift
          } else {
            seek(10); // Avanzar 10 segundos
          }
          break;
        case 'KeyJ':
          e.preventDefault();
          seek(-10);
          break;
        case 'KeyL':
          e.preventDefault();
          seek(10);
          break;
        case 'KeyK':
          e.preventDefault();
          togglePlayPause();
          break;
        case 'KeyI':
          e.preventDefault();
          seek(-30);
          break;
        case 'KeyO':
          e.preventDefault();
          seek(30);
          break;
        case 'Digit0':
          e.preventDefault();
          seek(0);
          break;
        case 'Digit1':
        case 'Digit2':
        case 'Digit3':
        case 'Digit4':
        case 'Digit5':
        case 'Digit6':
        case 'Digit7':
        case 'Digit8':
        case 'Digit9':
          e.preventDefault();
          const percentage = parseInt(e.code.replace('Digit', '')) * 10;
          seekToPercentage(percentage);
          break;
        case 'Escape':
          if (isFullscreen) {
            exitFullscreen();
          } else {
            onClose();
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isFullscreen]);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    setHasUserInteracted(true);
    
    // Limpiar timeout de autoplay
    if (autoplayTimeout) {
      clearTimeout(autoplayTimeout);
      setAutoplayTimeout(null);
    }

    if (video.paused) {
      video.play().then(() => {
        setIsPlaying(true);
        setShowPlayButton(false);
      }).catch((error) => {
        console.error('Error playing video:', error);
        setShowPlayButton(true);
      });
    } else {
      video.pause();
      setIsPlaying(false);
      setShowPlayButton(true);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    setHasUserInteracted(true);
    video.muted = !video.muted;
    setIsMuted(video.muted);
    
    // Si se desmutea y el video está pausado, reproducir
    if (!video.muted && video.paused) {
      video.play().then(() => {
        setIsPlaying(true);
        setShowPlayButton(false);
      });
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;

    setHasUserInteracted(true);
    const newVolume = parseFloat(e.target.value);
    video.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
    
    // Si se ajusta el volumen y el video está pausado, reproducir
    if (newVolume > 0 && video.paused) {
      video.play().then(() => {
        setIsPlaying(true);
        setShowPlayButton(false);
      });
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;

    setHasUserInteracted(true);
    const newTime = parseFloat(e.target.value);
    video.currentTime = newTime;
    setCurrentTime(newTime);
    
    // Si se hace seek y el video está pausado, reproducir
    if (video.paused) {
      video.play().then(() => {
        setIsPlaying(true);
        setShowPlayButton(false);
      });
    }
  };

  const seek = (seconds: number) => {
    const video = videoRef.current;
    if (!video) return;

    setHasUserInteracted(true);
    video.currentTime = Math.max(0, Math.min(video.duration, video.currentTime + seconds));
    
    // Si se hace seek y el video está pausado, reproducir
    if (video.paused) {
      video.play().then(() => {
        setIsPlaying(true);
        setShowPlayButton(false);
      });
    }
    
    // Mostrar indicador de navegación
    setSkipDirection(seconds > 0 ? 'forward' : 'backward');
    setShowSkipIndicator(true);
    setTimeout(() => {
      setShowSkipIndicator(false);
      setSkipDirection(null);
    }, 1000);
  };

  const seekToPercentage = (percentage: number) => {
    const video = videoRef.current;
    if (!video) return;

    setHasUserInteracted(true);
    const targetTime = (video.duration * percentage) / 100;
    video.currentTime = targetTime;
    
    // Si se hace seek y el video está pausado, reproducir
    if (video.paused) {
      video.play().then(() => {
        setIsPlaying(true);
        setShowPlayButton(false);
      });
    }
  };

  const changePlaybackRate = (rate: number) => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = rate;
    setPlaybackRate(rate);
    setShowSpeedMenu(false);
  };

  const handleProgressHover = (e: React.MouseEvent<HTMLInputElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const time = percent * duration;
    setHoverTime(time);
    setIsHoveringProgress(true);
  };

  const handleProgressLeave = () => {
    setIsHoveringProgress(false);
  };

  const toggleFullscreen = () => {
    const container = document.querySelector('.video-container') as HTMLElement;
    if (!container) return;

    if (!isFullscreen) {
      if (container.requestFullscreen) {
        container.requestFullscreen();
        setIsFullscreen(true);
      }
    } else {
      exitFullscreen();
    }
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleMouseMove = () => {
    setShowControls(true);
    setTimeout(() => setShowControls(false), 3000);
  };

  if (!movie.streamUrl) {
    return (
      <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
        <div className="relative w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
          <div className="flex items-center justify-center h-full text-white">
            ⚠️ Este contenido no tiene un enlace de reproducción configurado.
          </div>
          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg shadow-md transition"
          >
            ✖ Cerrar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div 
        className="video-container relative w-full max-w-7xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setShowControls(false)}
      >
        {isVideoFile ? (
          <>
            <video
              ref={videoRef}
              src={movie.streamUrl}
              className="w-full h-full"
              muted={!hasUserInteracted}
              onClick={togglePlayPause}
              onError={(e) => {
                console.error('Video error:', e);
                console.log('Video src:', movie.streamUrl);
              }}
              onLoadStart={() => console.log('Video load started')}
              onCanPlay={() => console.log('Video can play')}
            />
            
            {isLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mb-4"></div>
                <div className="text-white text-lg font-semibold">Cargando video...</div>
                <div className="text-gray-300 text-sm mt-2">Preparando reproducción automática</div>
              </div>
            )}

            {/* Botón de play grande cuando no hay autoplay */}
            {showPlayButton && !isLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
                <button
                  onClick={togglePlayPause}
                  className="bg-red-600 hover:bg-red-700 text-white rounded-full p-8 transition-all duration-300 hover:scale-110 shadow-2xl mb-4"
                >
                  <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
                <div className="text-white text-lg font-semibold bg-black/60 px-4 py-2 rounded-lg">
                  Haz clic para reproducir
                </div>
              </div>
            )}

            {/* Indicador de navegación rápida */}
            {showSkipIndicator && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className={`bg-black/80 text-white px-6 py-3 rounded-lg text-2xl font-bold flex items-center space-x-2 ${
                  skipDirection === 'forward' ? 'animate-pulse' : 'animate-pulse'
                }`}>
                  {skipDirection === 'forward' ? (
                    <>
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 6v12l8.5-6L13 6zM4 18l8.5-6L4 6v12z"/>
                      </svg>
                      <span>+30s</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z"/>
                      </svg>
                      <span>-30s</span>
                    </>
                  )}
                </div>
              </div>
            )}

            {/* Controles personalizados estilo Netflix */}
            <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
              {/* Barra de progreso mejorada */}
              <div className="px-6 py-3 relative">
                <div className="relative">
                  <input
                    type="range"
                    min="0"
                    max={duration || 0}
                    value={currentTime}
                    onChange={handleSeek}
                    onMouseMove={handleProgressHover}
                    onMouseLeave={handleProgressLeave}
                    className="w-full h-1 bg-gray-600/50 rounded-lg appearance-none cursor-pointer slider progress-bar"
                  />
                  
                  {/* Preview de tiempo al hacer hover */}
                  {isHoveringProgress && (
                    <div 
                      className="absolute -top-12 transform -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-sm font-medium"
                      style={{ left: `${(hoverTime / duration) * 100}%` }}
                    >
                      {formatTime(hoverTime)}
                    </div>
                  )}
                </div>
              </div>

              {/* Controles principales mejorados */}
              <div className="flex items-center justify-between px-6 py-4">
                <div className="flex items-center space-x-6">
                  {/* Botón Play/Pause principal */}
                  <button
                    onClick={togglePlayPause}
                    className="text-white hover:text-gray-300 transition-all duration-200 hover:scale-110"
                  >
                    {isPlaying ? (
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                      </svg>
                    ) : (
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    )}
                  </button>

                  {/* Botones de navegación rápida */}
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => seek(-30)}
                      className="text-white hover:text-gray-300 transition-all duration-200 hover:scale-110"
                      title="Retroceder 30s (Shift+← o I)"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z"/>
                      </svg>
                    </button>
                    <button
                      onClick={() => seek(30)}
                      className="text-white hover:text-gray-300 transition-all duration-200 hover:scale-110"
                      title="Avanzar 30s (Shift+→ o O)"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 6v12l8.5-6L13 6zM4 18l8.5-6L4 6v12z"/>
                      </svg>
                    </button>
                  </div>

                  {/* Control de volumen */}
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={toggleMute}
                      className="text-white hover:text-gray-300 transition-all duration-200 hover:scale-110"
                      title="Silenciar (M)"
                    >
                      {isMuted ? (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                        </svg>
                      ) : (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                        </svg>
                      )}
                    </button>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={isMuted ? 0 : volume}
                      onChange={handleVolumeChange}
                      className="w-24 h-1 bg-gray-600/50 rounded-lg appearance-none cursor-pointer slider volume-slider"
                    />
                  </div>

                  {/* Tiempo actual y duración */}
                  <div className="text-white text-sm font-mono">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  {/* Control de velocidad */}
                  <div className="relative">
                    <button
                      onClick={() => setShowSpeedMenu(!showSpeedMenu)}
                      className="text-white hover:text-gray-300 transition-all duration-200 hover:scale-110 px-3 py-1 border border-gray-600 rounded hover:border-gray-400"
                      title="Velocidad de reproducción"
                    >
                      {playbackRate}x
                    </button>
                    {showSpeedMenu && (
                      <div className="absolute bottom-full right-0 mb-2 bg-black/90 border border-gray-600 rounded-lg overflow-hidden">
                        {[0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2].map(rate => (
                          <button
                            key={rate}
                            onClick={() => changePlaybackRate(rate)}
                            className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-700 transition-colors ${
                              playbackRate === rate ? 'bg-red-600 text-white' : 'text-white'
                            }`}
                          >
                            {rate}x
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Botón de pantalla completa */}
                  <button
                    onClick={toggleFullscreen}
                    className="text-white hover:text-gray-300 transition-all duration-200 hover:scale-110"
                    title="Pantalla completa (F)"
                  >
                    {isFullscreen ? (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/>
                      </svg>
                    ) : (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <iframe
            src={movie.streamUrl}
            title={movie.title}
            className="w-full h-full"
            allowFullScreen
          />
        )}

        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg shadow-md transition z-10"
        >
          ✖ Cerrar
        </button>

        {/* Título del video estilo Netflix */}
        <div className="absolute top-4 left-4 text-white text-xl font-bold bg-gradient-to-r from-black/80 to-transparent px-4 py-2 rounded-lg backdrop-blur-sm">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-shadow-lg">{movie.title}</span>
          </div>
          {movie.year && (
            <div className="text-sm text-gray-300 font-normal mt-1">
              {movie.year} • {movie.genre}
            </div>
          )}
        </div>
      </div>

      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #ef4444;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 0 10px rgba(239, 68, 68, 0.5);
        }
        .slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #ef4444;
          cursor: pointer;
          border: none;
          transition: all 0.2s ease;
        }
        .slider::-moz-range-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 0 10px rgba(239, 68, 68, 0.5);
        }
        .progress-bar::-webkit-slider-track {
          background: rgba(75, 85, 99, 0.5);
          height: 4px;
          border-radius: 2px;
        }
        .progress-bar::-webkit-slider-thumb {
          width: 20px;
          height: 20px;
          background: #ef4444;
          border: 2px solid white;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        }
        .volume-slider::-webkit-slider-track {
          background: rgba(75, 85, 99, 0.5);
          height: 3px;
          border-radius: 2px;
        }
        .volume-slider::-webkit-slider-thumb {
          width: 14px;
          height: 14px;
          background: #ef4444;
          border: 1px solid white;
        }
        .video-container:hover .slider::-webkit-slider-thumb {
          opacity: 1;
        }
        .slider::-webkit-slider-thumb {
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .video-container:hover .slider::-webkit-slider-thumb {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default MoviePlayer;
