'use client';

import { useState } from 'react';
import { Navigation, Logo, NavContent, SearchContainer, NavActions, ThemeToggle, UserSection } from "./styles";
import { FiUser, FiHeart } from 'react-icons/fi';
import SearchBar from '../SearchBar';
import { useSearch } from '@/contexts/SearchContext';

export default function Navbar() {
//     const [isDarkMode, setIsDarkMode] = useState(true);
    const { setSearchQuery, setSelectedGenre } = useSearch();

//     const toggleTheme = () => {
//         setIsDarkMode(prev => !prev);
//         // Aqui podemos implementar o contexto de tema depois
//     };

    const handleSearchChange = (query: string) => {
        setSearchQuery(query);
        // Limpar gênero quando buscar
        if (query.trim()) {
            setSelectedGenre(null);
        }
    };

    return (
        <Navigation>
            <NavContent>
                <Logo>
                    🎬 <span>CineHub</span>
                </Logo>

                <SearchContainer>
                    <SearchBar onSearchChange={handleSearchChange} />
                </SearchContainer>

                <NavActions>
                    {/* <ThemeToggle onClick={toggleTheme}>
                        {isDarkMode ? <FiSun /> : <FiMoon />}
                    </ThemeToggle> */}
                    
                    <UserSection>
                        <FiHeart />
                        <span>Favoritos</span>
                    </UserSection>

                    <UserSection>
                        <FiUser />
                        <span>Perfil</span>
                    </UserSection>
                </NavActions>
            </NavContent>
        </Navigation>
   );
}

