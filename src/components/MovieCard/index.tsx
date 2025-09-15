"use client";

import { MovieType } from "@/types/movie";
import { 
  MovieCardContainer, 
  MoviePoster, 
  MovieInfos, 
  MovieTitle, 
  HiddenContent, 
  StyledButton, 
  MovieDescription,
  RatingContainer 
} from './styles';
import Image from "next/image";
import StarRating from "../StarRating";
import MovieModal from "../MovieModal";
import { useState } from "react";
import { FiPlay, FiX, FiInfo } from "react-icons/fi";

export interface Props {
  movie: MovieType;
}

export default function MovieCard(props: Props) {
  const movie = props.movie;
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleContent = () => {
    setIsExpanded(prev => !prev);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const formatReleaseDate = (date?: string) => {
    if (!date) return '';
    const year = new Date(date).getFullYear();
    return year;
  };

  return (
    <>
      <MovieCardContainer onClick={openModal}>
        <MoviePoster>
          <Image 
            src={movie.poster_path 
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : '/placeholder-movie.jpg'
            }
            alt={movie.title}
            width={500}
            height={750}
            priority={false}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Rms6g=="
          />
          
          <StyledButton 
            className="poster-button" 
            onClick={(e) => {
              e.stopPropagation();
              toggleContent();
            }}
          >
            {isExpanded ? <FiX /> : <FiInfo />}
            {isExpanded ? 'Fechar' : 'Info'}
          </StyledButton>
        </MoviePoster>

        <MovieInfos>
          <MovieTitle>
            {movie.title}
            {movie.release_date && (
              <span style={{ 
                fontSize: '0.9rem', 
                fontWeight: 400, 
                opacity: 0.8,
                marginLeft: '8px'
              }}>
                ({formatReleaseDate(movie.release_date)})
              </span>
            )}
          </MovieTitle>
          
          {movie.vote_average > 0 && (
            <RatingContainer>
              <StarRating rating={movie.vote_average} />
            </RatingContainer>
          )}
          
          <HiddenContent $isVisible={isExpanded}>
            <MovieDescription>
              {movie.overview && movie.overview.length > 0
                ? movie.overview.length > 150
                  ? `${movie.overview.substring(0, 150)}...`
                  : movie.overview
                : 'Descrição não disponível para este filme.'
              }
            </MovieDescription>
          </HiddenContent>
        </MovieInfos>
      </MovieCardContainer>

      <MovieModal
        movie={movie}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}
