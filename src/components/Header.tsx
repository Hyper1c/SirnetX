import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Search, Menu, X, User, LogOut, Settings, Tv } from 'lucide-react';
import LanguageSelector from './LanguageSelector';

interface HeaderProps {
  onSearch: (query: string) => void;
  onMenuToggle: () => void;
  isMenuOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ onSearch, onMenuToggle, isMenuOpen }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { logout, currentUser } = useAuth();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleChange = (value: string) => {
    setSearchQuery(value);
    onSearch(value);
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <header className="bg-black/95 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side */}
          <div className="flex items-center gap-4">
            <button
              onClick={onMenuToggle}
              className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            <div className="flex items-center gap-2">
              <Tv className="text-blue-500" size={32} />
              <h1 className="text-2xl font-bold text-white">
                Sir<span className="text-blue-500">Net</span>
              </h1>
            </div>
          </div>

          {/* Center - Search */}
          <div className="flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Buscar..."
                value={searchQuery}
                onChange={(e) => handleChange(e.target.value)}
                className="w-full bg-gray-800/50 border border-gray-700 rounded-full pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </form>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <LanguageSelector />
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800"
              >
                <User size={20} />
                <span className="hidden sm:block text-sm">{currentUser?.email}</span>
              </button>

              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-xl py-2">
                  <button className="w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 flex items-center gap-2">
                    <Settings size={16} />
                    Configuración
                  </button>
                  <hr className="border-gray-700 my-2" />
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-red-400 hover:text-red-300 hover:bg-gray-800 flex items-center gap-2"
                  >
                    <LogOut size={16} />
                    Cerrar sesión
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;