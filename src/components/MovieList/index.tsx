'use client';

import axios from 'axios';
import { useEffect, useState, useMemo, useCallback } from 'react';
import { MovieType } from '@/types/movie';
import MovieCard from '../MovieCard';
import SearchBar from '../SearchBar';
import Loading from '../Loading';
import { MovieContainer, MovieListUl, SubHeader, LoadMoreButton } from './styles';

interface MovieListProps {
    selectedGenre: number | null;
}

export default function MovieList({ selectedGenre }: MovieListProps) {
    const [movies, setMovies] = useState<MovieType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [search, setSearch] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [hasMore, setHasMore] = useState<boolean>(true);

    const formatString = useCallback((value: string) => {
        return value
            .toLowerCase()
            .trim()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '');
    }, []);

    const getMovies = useCallback(async (page: number, genreId?: number) => {
        setIsLoading(true);
        try {
            const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
                params: {
                    api_key: process.env.NEXT_PUBLIC_API_KEY,
                    language: 'pt-BR',
                    page,
                    with_genres: genreId, 
                },
            });

            
            setMovies(prevMovies => {
                const newMovies = response.data.results;
                const allMovies = [...prevMovies, ...newMovies];
                const uniqueMovies = Array.from(new Set(allMovies.map(movie => movie.id)))
                    .map(id => allMovies.find(movie => movie.id === id));
                return uniqueMovies;
            });

            
            setTotalPages(response.data.totalpages);
            setHasMore(page < response.data.total_pages); 
        } catch (error) {
            console.error('Erro ao buscar filmes:', error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const filteredMovies = useMemo(() => {
        if (search === '') return movies;
        return movies.filter(movie =>
            formatString(movie.title).includes(formatString(search))
        );
    }, [search, movies, formatString]);

    const handleLoadMore = useCallback(() => {
        if (hasMore) {
            setCurrentPage(prevPage => prevPage + 1); 
        }
    }, [hasMore]);

    useEffect(() => {
        setMovies([]); 
        setCurrentPage(1);                                                 
        getMovies(1, selectedGenre ?? undefined); 
    }, [selectedGenre, getMovies]);

    useEffect(() => {
        if (currentPage > 1) {
            getMovies(currentPage, selectedGenre ?? undefined);                                                                 
        }
    }, [currentPage, selectedGenre, getMovies]);

    const handleSearchChange = (value: string) => {
        setSearch(value);
        setCurrentPage(1); 
    };

    if (isLoading && movies.length === 0) {
        return <Loading />;
    }

    return (
        <MovieContainer>
            <SubHeader>
                <h1 className="title">Lista de Filmes</h1>
                <SearchBar onSearchChange={handleSearchChange} />
            </SubHeader>
            <MovieListUl>
                {filteredMovies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </MovieListUl>
            {hasMore && !isLoading && (
                <LoadMoreButton onClick={handleLoadMore}>
                    Carregar Mais
                </LoadMoreButton>
            )}
            {isLoading && <p>Carregando mais filmes...</p>}
        </MovieContainer>
    );
}
