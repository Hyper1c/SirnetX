import React from 'react';
import { Channel } from '../types/channel';
import { Heart, Play } from 'lucide-react';

interface ChannelCardProps {
  channel: Channel;
  onClick: () => void;
  onToggleFavorite: () => void;
}

export const ChannelCard: React.FC<ChannelCardProps> = ({ 
  channel, 
  onClick, 
  onToggleFavorite 
}) => {
  return (
    <div className="group relative bg-gray-900 rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 shadow-xl">
      <div className="aspect-video relative">
        <img
          src={channel.logo}
          alt={channel.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg?auto=compress&cs=tinysrgb&w=400';
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={onClick}
            className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-colors"
          >
            <Play className="w-6 h-6 ml-1" />
          </button>
        </div>

        {/* Live Badge */}
        <div className="absolute top-2 left-2">
          <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full font-semibold flex items-center">
            <div className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></div>
            LIVE
          </span>
        </div>

        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite();
          }}
          className="absolute top-2 right-2 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
        >
          <Heart 
            className={`w-4 h-4 ${channel.isFavorite ? 'fill-red-500 text-red-500' : 'text-white'}`} 
          />
        </button>
      </div>

      <div className="p-4">
        <h3 className="text-white font-semibold text-sm mb-1 truncate">
          {channel.name}
        </h3>
        <p className="text-gray-400 text-xs">
          {channel.category}
        </p>
      </div>
    </div>
  );
};