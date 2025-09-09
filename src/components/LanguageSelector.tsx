import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-white transition-colors">
        <Globe size={16} />
        <span className="text-sm font-medium">
          {language === 'es' ? 'ES' : 'EN'}
        </span>
      </button>
      
      <div className="absolute right-0 top-full mt-2 bg-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="py-1">
          <button
            onClick={() => setLanguage('es')}
            className={`w-full px-4 py-2 text-left text-sm transition-colors ${
              language === 'es' 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            🇪🇸 Español
          </button>
          <button
            onClick={() => setLanguage('en')}
            className={`w-full px-4 py-2 text-left text-sm transition-colors ${
              language === 'en' 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            🇺🇸 English
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
