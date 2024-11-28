'use client';

import { useEffect, useState } from 'react';
import { InputGroup, InputIcon, InputField } from './styles';
import { FaMagnifyingGlass } from "react-icons/fa6";

type Props = {
    onSearchChange: (search: string) => void;
}



export default function SearchBar(props: Props) {
    const [search, setSearch] = useState<string>('');

    useEffect(() => {
        props.onSearchChange(search);
    }, [props, search]);

    return (
        <InputGroup>
            <InputIcon>
                <FaMagnifyingGlass />
            </InputIcon>

            <InputField 
                type="text" 
                placeholder="Pesquisar"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </InputGroup>
    );
}