import React from 'react';
import { Play, Info } from 'lucide-react';

interface HeroSectionProps {
  onWatchNow: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onWatchNow }) => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-4 md:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Welcome to
            <span className="block text-red-600">StreamFlix</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            Experience the best live TV streaming with over 45 premium channels. 
            From sports and movies to kids content and music, enjoy unlimited entertainment 
            in stunning HD quality.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={onWatchNow}
              className="flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <Play className="w-5 h-5" />
              <span>Start Watching</span>
            </button>
            <button className="flex items-center justify-center space-x-2 bg-gray-800/80 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors backdrop-blur-sm">
              <Info className="w-5 h-5" />
              <span>Learn More</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};