import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Eye, ThumbsUp, Share2, BookmarkPlus, Calendar, User } from 'lucide-react';
import { MovieTip } from '../../types';

interface MovieTipCardProps {
  tip: MovieTip;
  onLike?: (tipId: string) => void;
  onBookmark?: (tipId: string) => void;
  onView?: (tipId: string) => void;
}

export const MovieTipCard: React.FC<MovieTipCardProps> = ({ 
  tip, 
  onLike, 
  onBookmark, 
  onView 
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    onLike?.(tip.id);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    onBookmark?.(tip.id);
  };

  const handleView = () => {
    onView?.(tip.id);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden group cursor-pointer"
      onClick={handleView}
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={tip.thumbnail}
          alt={tip.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
            {tip.category.toUpperCase()}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <div className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs font-medium">
            ⭐ {tip.rating}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
          <User className="w-4 h-4" />
          <span>{tip.author.name}</span>
          <span>•</span>
          <Calendar className="w-4 h-4" />
          <span>{tip.createdAt.toLocaleDateString('es-ES')}</span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors">
          {tip.title}
        </h3>

        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
          {tip.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tip.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-xs font-medium"
            >
              #{tag}
            </span>
          ))}
          {tip.tags.length > 3 && (
            <span className="text-gray-500 text-xs">
              +{tip.tags.length - 3} más
            </span>
          )}
        </div>

        {/* Stats and Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Eye className="w-4 h-4" />
              <span>{tip.views.toLocaleString()}</span>
            </div>
            <div className="flex items-center space-x-1">
              <ThumbsUp className="w-4 h-4" />
              <span>{tip.likes}</span>
            </div>
          </div>

          <div className="flex items-center space-x-2" onClick={(e) => e.stopPropagation()}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleLike}
              className={`p-2 rounded-full transition-colors ${
                isLiked 
                  ? 'bg-red-50 text-red-500' 
                  : 'bg-gray-50 text-gray-500 hover:bg-red-50 hover:text-red-500'
              }`}
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleBookmark}
              className={`p-2 rounded-full transition-colors ${
                isBookmarked 
                  ? 'bg-purple-50 text-purple-500' 
                  : 'bg-gray-50 text-gray-500 hover:bg-purple-50 hover:text-purple-500'
              }`}
            >
              <BookmarkPlus className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-gray-50 text-gray-500 hover:bg-blue-50 hover:text-blue-500 transition-colors"
            >
              <Share2 className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.article>
  );
};