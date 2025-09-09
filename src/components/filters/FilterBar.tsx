import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Search, SortAsc, Grid, List } from 'lucide-react';
import { FilterOptions } from '../../types';
import { categories } from '../../data/mockData';

interface FilterBarProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  onFiltersChange,
  viewMode,
  onViewModeChange
}) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const genres = ['Acción', 'Drama', 'Comedia', 'Terror', 'Ciencia Ficción', 'Romance', 'Aventura', 'Suspense'];
  const sortOptions = [
    { value: 'newest', label: 'Más recientes' },
    { value: 'popular', label: 'Más populares' },
    { value: 'rating', label: 'Mejor valorados' },
    { value: 'views', label: 'Más vistos' }
  ];

  const handleFilterChange = (key: keyof FilterOptions, value: any) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  return (
    <div className="bg-white shadow-sm border-b border-gray-200 sticky top-16 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Main Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Buscar tips de películas..."
              value={filters.search || ''}
              onChange={(e) => handleFilterChange('search', e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          {/* Filter Controls */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsFiltersOpen(!isFiltersOpen)}
              className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Filter className="w-4 h-4" />
              <span>Filtros</span>
            </button>

            <select
              value={filters.sortBy || 'newest'}
              onChange={(e) => handleFilterChange('sortBy', e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={() => onViewModeChange('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-purple-50 text-purple-600' : 'text-gray-500 hover:bg-gray-50'}`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => onViewModeChange('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-purple-50 text-purple-600' : 'text-gray-500 hover:bg-gray-50'}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Extended Filters */}
        {isFiltersOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 pt-4 border-t border-gray-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Categoría
                </label>
                <select
                  value={filters.category || ''}
                  onChange={(e) => handleFilterChange('category', e.target.value || undefined)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Todas las categorías</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.slug}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Genre Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Géneros
                </label>
                <div className="flex flex-wrap gap-2">
                  {genres.slice(0, 4).map((genre) => (
                    <button
                      key={genre}
                      onClick={() => {
                        const currentGenres = filters.genre || [];
                        const newGenres = currentGenres.includes(genre)
                          ? currentGenres.filter(g => g !== genre)
                          : [...currentGenres, genre];
                        handleFilterChange('genre', newGenres.length ? newGenres : undefined);
                      }}
                      className={`px-3 py-1 text-sm rounded-full transition-colors ${
                        (filters.genre || []).includes(genre)
                          ? 'bg-purple-100 text-purple-700'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {genre}
                    </button>
                  ))}
                </div>
              </div>

              {/* Rating Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Valoración mínima
                </label>
                <select
                  value={filters.rating || ''}
                  onChange={(e) => handleFilterChange('rating', e.target.value ? Number(e.target.value) : undefined)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">Cualquier valoración</option>
                  <option value="4.5">4.5+ estrellas</option>
                  <option value="4.0">4.0+ estrellas</option>
                  <option value="3.5">3.5+ estrellas</option>
                  <option value="3.0">3.0+ estrellas</option>
                </select>
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <button
                onClick={() => onFiltersChange({})}
                className="text-sm text-purple-600 hover:text-purple-700 font-medium"
              >
                Limpiar filtros
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};