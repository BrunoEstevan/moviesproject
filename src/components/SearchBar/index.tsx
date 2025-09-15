'use client';

import { useEffect, useState } from 'react';
import { SearchContainer, SearchInput, SearchIcon } from './styles';
import { FiSearch } from "react-icons/fi";

type Props = {
  onSearchChange?: (search: string) => void;
  placeholder?: string;
};

export default function SearchBar({ onSearchChange, placeholder = "Buscar filmes..." }: Props) {
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    if (onSearchChange) {
      const timeoutId = setTimeout(() => {
        onSearchChange(search);
      }, 300); // Debounce de 300ms

      return () => clearTimeout(timeoutId);
    }
  }, [search, onSearchChange]);

  return (
    <SearchContainer>
      <SearchIcon>
        <FiSearch />
      </SearchIcon>
      <SearchInput
        type="text"
        placeholder={placeholder}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </SearchContainer>
  );
}
