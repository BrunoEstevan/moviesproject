// 'use client';

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import { MovieType } from "@/types/movie";

// export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
//     const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
//       params: {
//         api_key: process.env.NEXT_PUBLIC_API_KEY,
//         language: 'pt-BR',
//       },
//     });
//     return response.data.results;
//   });
  
//   interface MoviesState {
//     movies: MovieType[];
//     filteredMovies: MovieType[];
//     isLoading: boolean;
//     search: string;
//   }
  
//   const initialState: MoviesState = {
//     movies: [],
//     filteredMovies: [],
//     isLoading: true,
//     search: '',
//   };
  
//   const moviesSlice = createSlice({
//     name: 'movies',
//     initialState,
//     reducers: {
//       setSearch(state, action) {
//         if (state.search !== action.payload) {}
//         state.filteredMovies = state.movies.filter((movie) =>
//           movie.title.toLowerCase().includes(action.payload.toLowerCase())
//         );
//       },
//     },
//     extraReducers: (builder) => {
//       builder
//         .addCase(fetchMovies.pending, (state) => {
//           state.isLoading = true;
//         })
//         .addCase(fetchMovies.fulfilled, (state, action) => {
//           state.movies = action.payload;
//           state.filteredMovies = action.payload;
//           state.isLoading = false;
//         });
//     },
//   });
  
//   export const { setSearch } = moviesSlice.actions;
  
//   export default moviesSlice.reducer;