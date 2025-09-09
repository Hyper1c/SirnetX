import React from 'react';
import ContentCard from './ContentCard';

interface ContentItem {
  id: string;
  title: string;
  year: number;
  genre: string;
  image: string;
  type: 'movie' | 'series';
  rating?: number;
}

interface ContentSectionProps {
  title: string;
  items: ContentItem[];
  onPlay: (item: ContentItem) => void;
  onInfo: (item: ContentItem) => void;
}

const ContentSection: React.FC<ContentSectionProps> = ({ title, items, onPlay, onInfo }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-white mb-4 px-4">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4">
        {items.map((item) => (
          <div key={item.id} className="w-full">
            <ContentCard item={item} onPlay={onPlay} onInfo={onInfo} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentSection;