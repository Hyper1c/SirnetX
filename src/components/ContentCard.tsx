import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Play, Info } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  year: number;
  genre: string;
  image: string;
  type: 'movie' | 'series';
  rating?: number;
}

interface ContentCardProps {
  item: ContentItem;
  onPlay: (item: ContentItem) => void;
  onInfo: (item: ContentItem) => void;
}

const ContentCard: React.FC<ContentCardProps> = ({ item, onPlay, onInfo }) => {
  const { t } = useLanguage();
  return (
    <div className="group relative bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:z-10">
      <div className="aspect-[2/3] relative">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-white font-semibold text-sm mb-1 line-clamp-2">{item.title}</h3>
            <p className="text-gray-300 text-xs mb-3">{item.year} • {item.genre}</p>
            
            <div className="flex gap-2">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onPlay(item);
                }}
                className="flex items-center gap-1 bg-white text-black px-3 py-1.5 rounded-md text-xs font-semibold hover:bg-gray-200 transition-colors"
              >
                <Play size={12} />
                {t('play')}
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onInfo(item);
                }}
                className="flex items-center gap-1 bg-gray-600/80 text-white px-3 py-1.5 rounded-md text-xs font-semibold hover:bg-gray-500/80 transition-colors"
              >
                <Info size={12} />
                {t('info') || 'Info'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;