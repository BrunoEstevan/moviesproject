'use client';
import { useState, useEffect } from 'react';
import { MovieType } from '@/types/movie';
import {
  ModalOverlay,
  ModalContainer,
  ModalContent,
  ModalHeader,
  CloseButton,
  MoviePoster,
  MovieDetails,
  MovieTitle,
  MovieMeta,
  MovieDescription,
  GenreList,
  GenreTag,
  RatingSection,
  ActionButtons,
  ActionButton
} from './styles';
import { FiX, FiHeart, FiShare2, FiPlay } from 'react-icons/fi';
import Image from 'next/image';
import StarRating from '../StarRating';
import TrailerModal from './TrailerModal';

interface Props {
  movie: MovieType;
  isOpen: boolean;
  onClose: () => void;
}

export default function MovieModal({ movie, isOpen, onClose }: Props) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);
  const [trailerKey, setTrailerKey] = useState<string | null>(null);

  const handlePlayTrailer = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`
      );
      if (!res.ok) throw new Error('Erro ao buscar trailer');

      const data = await res.json();
      const trailer = data.results?.find(
        (vid: any) => vid.type === 'Trailer' && vid.site === 'YouTube'
      );

      if (trailer?.key) {
        setTrailerKey(trailer.key);
        setIsTrailerOpen(true);
      } else {
        alert('Nenhum trailer disponível para este filme.');
      }
    } catch (error) {
      console.error(error);
      alert('Erro ao carregar o trailer.');
    }
  };

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handleFavorite = () => setIsFavorite(prev => !prev);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: movie.title,
        text: movie.overview || 'Confira este filme incrível!',
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const formatReleaseDate = (date: string) => {
    if (!date) return '';
    return new Date(date).toLocaleDateString('pt-BR', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
  };

  const formatRuntime = (runtime?: number) => {
    if (!runtime) return '';
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${minutes}min`;
  };

  if (!isOpen) return null;

  return (
    <>
      <ModalOverlay onClick={onClose}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <ModalHeader>
            <CloseButton onClick={onClose}>
              <FiX size={24} />
            </CloseButton>
          </ModalHeader>

          <ModalContent>
            <MoviePoster>
              <Image
                src={movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : '/placeholder-movie.jpg'}
                alt={movie.title}
                width={300}
                height={450}
                style={{ borderRadius: '12px' }}
              />
            </MoviePoster>

            <MovieDetails>
              <MovieTitle>{movie.title}</MovieTitle>

              <MovieMeta>
                {movie.release_date && <span>{formatReleaseDate(movie.release_date)}</span>}
                {movie.runtime && <span>{formatRuntime(movie.runtime)}</span>}
              </MovieMeta>

              <RatingSection>
                <StarRating rating={movie.vote_average} size="medium" />
                <span>({movie.vote_count?.toLocaleString()} avaliações)</span>
              </RatingSection>

              {movie.genres && movie.genres.length > 0 && (
                <GenreList>
                  {movie.genres.map(genre => (
                    <GenreTag key={genre.id}>{genre.name}</GenreTag>
                  ))}
                </GenreList>
              )}

              <MovieDescription>
                {movie.overview || 'Descrição não disponível para este filme.'}
              </MovieDescription>

              <ActionButtons>
                <ActionButton onClick={handleFavorite} $isFavorite={isFavorite}>
                  <FiHeart fill={isFavorite ? 'currentColor' : 'none'} />
                  {isFavorite ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
                </ActionButton>

                <ActionButton onClick={handleShare}>
                  <FiShare2 />
                  Compartilhar
                </ActionButton>

                <ActionButton $isPrimary onClick={handlePlayTrailer}>
                  <FiPlay />
                  Assistir Trailer
                </ActionButton>
              </ActionButtons>
            </MovieDetails>
          </ModalContent>
        </ModalContainer>
      </ModalOverlay>

      {/* Modal de Trailer (sobrepõe o MovieModal) */}
      <TrailerModal
        isOpen={isTrailerOpen}
        onClose={() => setIsTrailerOpen(false)}
        videoKey={trailerKey}
      />
    </>
  );
}