import React from 'react';
import { ChannelCategory } from '../types/channel';
import { ChannelCard } from './ChannelCard';

interface CategorySectionProps {
  category: ChannelCategory;
  onChannelClick: (channelId: string) => void;
  onToggleFavorite: (channelId: string) => void;
}

export const CategorySection: React.FC<CategorySectionProps> = ({
  category,
  onChannelClick,
  onToggleFavorite
}) => {
  return (
    <div className="mb-8">
      <h2 className="text-white text-2xl font-bold mb-4 px-4 md:px-8">
        {category.name}
      </h2>
      <div className="px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {category.channels.map((channel) => (
            <ChannelCard
              key={channel.id}
              channel={channel}
              onClick={() => onChannelClick(channel.id)}
              onToggleFavorite={() => onToggleFavorite(channel.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};