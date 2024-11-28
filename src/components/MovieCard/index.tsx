import { MovieType } from "@/types/movie";
import { MovieCardContainer, MoviePoster, MovieInfos, MovieTitle, HiddenContent, StyledButton, MovieDescription } from './styles';
import Image from "next/image";
import StarRating from "../StarRating";
import { useState } from "react";

export interface Props {
  movie: MovieType;
}

export default function MovieCard(props: Props) {
  const movie = props.movie;
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(prev => !prev);
  };

  return (
    <MovieCardContainer>
      <MoviePoster>
        <Image 
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.title}
          width={500}
          height={750}
          priority={true}
        />
       
        <StyledButton className="poster-button" onClick={toggleContent}>
          {isExpanded ? 'Fechar' : 'Descrição'}
        </StyledButton>
      </MoviePoster>

      <MovieInfos>
        <MovieTitle>{movie.title}</MovieTitle>
        {movie.vote_average > 0 && <StarRating rating={movie.vote_average} />}
        
       
        {isExpanded && (
          <HiddenContent $isVisible={isExpanded}>
            <MovieDescription>
              {movie.overview && movie.overview.length > 100
                ? `${movie.overview.substring(0, 100)}...`
                : movie.overview || 'Sem descrição'}
            </MovieDescription>
          </HiddenContent>
        )}
      </MovieInfos>
    </MovieCardContainer>
  );
}
