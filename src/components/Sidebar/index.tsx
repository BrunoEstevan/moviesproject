'use client';

import { useState, useEffect } from 'react';
import { FilterButton, SidebarContainer, ToggleIcon, Title, SwitchThenme } from './styles';
import { BsFilterSquareFill } from 'react-icons/bs';
import { ContentFilters } from './styles';
import { FaMoon } from "react-icons/fa";
import { WiDaySunnyOvercast } from "react-icons/wi";

export default function Sidebar({ onGenreSelect }: { onGenreSelect: (genreId: number) => void }){
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const handleFilterClick = (category: string) => {
    console.log(`Filtrando por: ${category}`);
  };

  const toggleFilters = () => {
    setIsOpen(!isOpen);
  };


  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  
  useEffect(() => {
    if (isDark) {
      document.body.style.background = "radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)";
      document.body.style.color = "#ecf0f1"; 
    } else {
      document.body.style.background = "#ffffff"; 
      document.body.style.color = "#000"; 
    }
  }, [isDark]);

  return (
    <SidebarContainer $isOpen={isOpen}>
      <ToggleIcon onClick={toggleFilters}>
        <BsFilterSquareFill size={24} />
      </ToggleIcon>

      <SwitchThenme>
        <FaMoon
          size={30}
          onClick={toggleTheme}
          style={{ cursor: 'pointer', display: isDark ? 'block' : 'none' }}
        />
        <WiDaySunnyOvercast
          color='yellow'
          size={30}
          onClick={toggleTheme}
          style={{ cursor: 'pointer', display: isDark ? 'none' : 'block' }}
        />
      </SwitchThenme>

      <ContentFilters $isOpen={isOpen}>
        <Title>Filtrar por:</Title>
        <FilterButton onClick={() => onGenreSelect(27)}>Terror</FilterButton>
                <FilterButton onClick={() => onGenreSelect(35)}>Comédia</FilterButton>
                <FilterButton onClick={() => onGenreSelect(28)}>Ação</FilterButton>
      </ContentFilters>
    </SidebarContainer>
  );
}
