'use client';

import { useEffect, useState } from 'react';
import { InputGroup, InputIcon, InputField, HiddenSearchBar } from './styles';
import { FaMagnifyingGlass } from "react-icons/fa6";

type Props = {
  onSearchChange: (search: string) => void;
};

export default function SearchBar({ onSearchChange }: Props) {
  const [search, setSearch] = useState<string>('');
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded((prev) => !prev);
  };

  useEffect(() => {
    onSearchChange(search);
  }, [search, onSearchChange]);

  return (
    <InputGroup $isExpanded={isExpanded}>
      <InputIcon onClick={toggleContent}>
        <FaMagnifyingGlass />
      </InputIcon>
      <HiddenSearchBar $isVisible={isExpanded}>
        <InputField
          type="text"
          placeholder="Pesquisar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </HiddenSearchBar>
    </InputGroup>
  );
}
