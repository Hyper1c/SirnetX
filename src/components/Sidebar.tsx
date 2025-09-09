import React from 'react';
import { Film, Tv, Baby, Laugh, Radio, Home, Settings, Globe } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, activeSection, onSectionChange }) => {
  const menuItems = [
    { id: 'home', label: 'Inicio', icon: Home },
    { id: 'movies', label: 'Películas', icon: Film },
    { id: 'series', label: 'Series', icon: Tv },
    { id: 'kids', label: 'Infantil', icon: Baby },
    { id: 'comedy', label: 'Comedia', icon: Laugh },
    { id: 'live-tv', label: 'TV en Vivo', icon: Radio },
  ];

  const settingsItems = [
    { id: 'settings', label: 'Configuración', icon: Settings },
    { id: 'language', label: 'Idioma', icon: Globe },
  ];

  return (
    <div className={`fixed inset-y-0 left-0 z-40 w-64 bg-gray-900 border-r border-gray-800 transform transition-transform duration-300 ease-in-out ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    }`}>
      <div className="flex flex-col h-full pt-20">
        {/* Main Navigation */}
        <nav className="flex-1 px-4 py-6">
          <div className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onSectionChange(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* Settings */}
        <div className="px-4 py-6 border-t border-gray-800">
          <div className="space-y-2">
            {settingsItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onSectionChange(item.id)}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200"
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;