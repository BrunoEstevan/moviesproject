'use client';

import { useState, useEffect } from 'react';
import { 
  FilterButton, 
  SidebarContainer, 
  ToggleIcon, 
  Title, 
  SwitchTheme,
  ContentFilters,
  GenreGrid,
  SidebarHeader,
  ClearFiltersButton
} from './styles';
import { FiFilter, FiSun, FiMoon, FiX } from 'react-icons/fi';
import { MdTheaters } from 'react-icons/md';
import { useSearch } from '@/contexts/SearchContext';

const GENRES = [
  { id: 28, name: 'Ação', icon: '🎬' },
  { id: 12, name: 'Aventura', icon: '🗺️' },
  { id: 16, name: 'Animação', icon: '🎨' },
  { id: 35, name: 'Comédia', icon: '😂' },
  { id: 80, name: 'Crime', icon: '🔫' },
  { id: 99, name: 'Documentário', icon: '📺' },
  { id: 18, name: 'Drama', icon: '🎭' },
  { id: 10751, name: 'Família', icon: '👨‍👩‍👧‍👦' },
  { id: 14, name: 'Fantasia', icon: '🧙‍♂️' },
  { id: 27, name: 'Terror', icon: '👻' },
  { id: 10402, name: 'Música', icon: '🎵' },
  { id: 9648, name: 'Mistério', icon: '🔍' },
  { id: 10749, name: 'Romance', icon: '💕' },
  { id: 878, name: 'Ficção Científica', icon: '🚀' },
  { id: 53, name: 'Thriller', icon: '⚡' },
  { id: 10752, name: 'Guerra', icon: '⚔️' },
  { id: 37, name: 'Faroeste', icon: '🤠' },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const { selectedGenre, setSelectedGenre, setSearchQuery } = useSearch();

  const toggleFilters = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    // Aqui depois implementaremos um contexto de tema global
  };

  const handleGenreSelect = (genreId: number) => {
    if (genreId === selectedGenre) {
      setSelectedGenre(null);
    } else {
      setSelectedGenre(genreId);
      // Limpar busca quando selecionar gênero
      setSearchQuery('');
    }
  };

  const clearFilters = () => {
    setSelectedGenre(null);
  };

  useEffect(() => {
    if (isDark) {
      document.body.style.background = "radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)";
      document.body.style.color = "#ecf0f1"; 
    } else {
      document.body.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
      document.body.style.color = "#1a1a1a"; 
    }
  }, [isDark]);

  return (
    <SidebarContainer $isOpen={isOpen}>
      <ToggleIcon onClick={toggleFilters} $isOpen={isOpen}>
        {isOpen ? <FiX size={24} /> : <FiFilter size={24} />}
      </ToggleIcon>

      <ContentFilters $isOpen={isOpen}>
        <SidebarHeader>
          <MdTheaters size={28} />
          <Title>Filtros</Title>
        </SidebarHeader>

        <SwitchTheme onClick={toggleTheme}>
          {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
          <span>{isDark ? 'Modo Claro' : 'Modo Escuro'}</span>
        </SwitchTheme>

        <div>
          <Title style={{ fontSize: '1rem', marginBottom: '1rem' }}>
            Gêneros
          </Title>
          
          {selectedGenre && (
            <ClearFiltersButton onClick={clearFilters}>
              <FiX size={16} />
              Limpar Filtros
            </ClearFiltersButton>
          )}

          <GenreGrid>
            {GENRES.map(genre => (
              <FilterButton 
                key={genre.id}
                onClick={() => handleGenreSelect(genre.id)}
                $isSelected={selectedGenre === genre.id}
              >
                <span className="genre-icon">{genre.icon}</span>
                <span className="genre-name">{genre.name}</span>
              </FilterButton>
            ))}
          </GenreGrid>
        </div>
      </ContentFilters>
    </SidebarContainer>
  );
}
