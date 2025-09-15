'use client';

import axios from 'axios';
import { useEffect, useState, useMemo, useCallback } from 'react';
import { MovieType } from '@/types/movie';
import MovieCard from '../MovieCard';
import Loading from '../Loading';
import { 
    MovieContainer, 
    MovieListUl, 
    SubHeader, 
    LoadMoreButton, 
    MoviesGrid,
    FilterSection,
    ResultsInfo 
} from './styles';

interface MovieListProps {
    selectedGenre: number | null;
    searchQuery?: string;
}

export default function MovieList({ selectedGenre, searchQuery = '' }: MovieListProps) {
    const [movies, setMovies] = useState<MovieType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [totalResults, setTotalResults] = useState<number>(0);

    const formatString = useCallback((value: string) => {
        return value
            .toLowerCase()
            .trim()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '');
    }, []);

    const getMovies = useCallback(async (page: number, genreId?: number, search?: string) => {
        setIsLoading(true);
        try {
            let endpoint = 'https://api.themoviedb.org/3/discover/movie';
            let params: any = {
                api_key: process.env.NEXT_PUBLIC_API_KEY,
                language: 'pt-BR',
                page,
                sort_by: 'popularity.desc',
            };

            if (search && search.trim()) {
                endpoint = 'https://api.themoviedb.org/3/search/movie';
                params.query = search.trim();
            } else if (genreId) {
                params.with_genres = genreId;
            }

            const response = await axios.get(endpoint, { params });

            if (page === 1) {
                setMovies(response.data.results);
            } else {
                setMovies(prevMovies => {
                    const newMovies = response.data.results;
                    const allMovies = [...prevMovies, ...newMovies];
                    const uniqueMovies = Array.from(new Set(allMovies.map(movie => movie.id)))
                        .map(id => allMovies.find(movie => movie.id === id))
                        .filter(Boolean) as MovieType[];
                    return uniqueMovies;
                });
            }

            setTotalPages(response.data.total_pages);
            setTotalResults(response.data.total_results);
            setHasMore(page < response.data.total_pages);
        } catch (error) {
            console.error('Erro ao buscar filmes:', error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    const handleLoadMore = useCallback(() => {
        if (hasMore && !isLoading) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    }, [hasMore, isLoading]);

    // Reset quando mudança de gênero ou busca
    useEffect(() => {
        setMovies([]);
        setCurrentPage(1);
        getMovies(1, selectedGenre ?? undefined, searchQuery);
    }, [selectedGenre, searchQuery, getMovies]);

    // Carregar mais páginas
    useEffect(() => {
        if (currentPage > 1) {
            getMovies(currentPage, selectedGenre ?? undefined, searchQuery);
        }
    }, [currentPage, selectedGenre, searchQuery, getMovies]);

    const getGenreName = (genreId: number | null) => {
        const genres: { [key: number]: string } = {
            28: 'Ação',
            12: 'Aventura',
            16: 'Animação',
            35: 'Comédia',
            80: 'Crime',
            99: 'Documentário',
            18: 'Drama',
            10751: 'Família',
            14: 'Fantasia',
            36: 'História',
            27: 'Terror',
            10402: 'Música',
            9648: 'Mistério',
            10749: 'Romance',
            878: 'Ficção Científica',
            10770: 'Cinema TV',
            53: 'Thriller',
            10752: 'Guerra',
            37: 'Faroeste'
        };
        return genreId ? genres[genreId] || 'Gênero Desconhecido' : null;
    };

    if (isLoading && movies.length === 0) {
        return <Loading />;
    }

    return (
        <MovieContainer>
            <SubHeader>
                <div>
                    <h1 className="title">
                        {searchQuery 
                            ? `Resultados para "${searchQuery}"` 
                            : selectedGenre 
                                ? `Filmes de ${getGenreName(selectedGenre)}`
                                : 'Filmes Populares'
                        }
                    </h1>
                    <ResultsInfo>
                        {totalResults > 0 && (
                            <span>{totalResults.toLocaleString()} filmes encontrados</span>
                        )}
                    </ResultsInfo>
                </div>
            </SubHeader>

            <MoviesGrid>
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </MoviesGrid>

            {hasMore && (
                <LoadMoreButton onClick={handleLoadMore} disabled={isLoading}>
                    {isLoading ? 'Carregando...' : 'Carregar Mais Filmes'}
                </LoadMoreButton>
            )}
        </MovieContainer>
    );
}
