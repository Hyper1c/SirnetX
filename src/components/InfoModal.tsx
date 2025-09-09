import React from 'react';
import { X, Play, Star, Clock, Calendar } from 'lucide-react';
import { ContentItem } from '../data/mockContent';

interface InfoModalProps {
  item: ContentItem | null;
  isOpen: boolean;
  onClose: () => void;
  onPlay: (item: ContentItem) => void;
  onPlayInPage?: (item: ContentItem) => void;
}

const InfoModal: React.FC<InfoModalProps> = ({ item, isOpen, onClose, onPlay, onPlayInPage }) => {
  if (!isOpen || !item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-gray-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-64 object-cover rounded-t-xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">{item.title}</h2>
              <div className="flex items-center gap-4 text-gray-400 text-sm">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>{item.year}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>{item.duration}</span>
                </div>
                {item.rating && (
                  <div className="flex items-center gap-1">
                    <Star size={16} className="text-yellow-500" />
                    <span>{item.rating}/10</span>
                  </div>
                )}
              </div>
            </div>
            <div className="flex gap-3">
              {item.streamUrl && onPlayInPage && (
                <button
                  onClick={() => onPlayInPage(item)}
                  className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  <Play size={20} />
                  Reproducir aquí
                </button>
              )}
              <button
                onClick={() => {
                  if (item.streamUrl) {
                    window.open(item.streamUrl, '_blank');
                  } else {
                    onPlay(item);
                  }
                }}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <Play size={20} />
                {item.streamUrl ? 'Abrir en nueva pestaña' : 'Reproducir'}
              </button>
            </div>
          </div>

          <div className="mb-4">
            <span className="inline-block bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
              {item.genre}
            </span>
          </div>

          {item.synopsis && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-2">Sinopsis</h3>
              <p className="text-gray-300 leading-relaxed">{item.synopsis}</p>
            </div>
          )}

          {item.cast && item.cast.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Reparto</h3>
              <div className="flex flex-wrap gap-2">
                {item.cast.map((actor, index) => (
                  <span
                    key={index}
                    className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
                  >
                    {actor}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoModal;