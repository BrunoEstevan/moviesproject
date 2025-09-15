export interface Genre {
  id: number;
  name: string;
}

export interface MovieType {
  id: number;
  title: string;
  overview: null | string;
  poster_path: string;
  backdrop_path?: string;
  vote_average: number;
  vote_count?: number;
  release_date?: string;
  runtime?: number;
  genres?: Genre[];
  genre_ids?: number[];
  adult?: boolean;
  original_language?: string;
  original_title?: string;
  popularity?: number;
  video?: boolean;
}