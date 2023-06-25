
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
// // const tmdbApiKey = '455faf906d053079714d5c9865a3ff4f';
// // https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
// export const tmdbApi = createApi({
//   reducerPath: 'tmdbApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
//   endpoints: (builder) => ({
//     //* get genres
//     getGenres: builder.query({
//       query: () => `genre/movie/list?api_key=${tmdbApiKey}`,
//     }),
//     //* get movies by [Type]
//     getMovies: builder.query({
//       query: ({ genreIdOrCategoryName, page, searchQuery }) => {
//         //* get movies by search
//         if (searchQuery) {
//           return `search/movie?api_key=${tmdbApiKey}&query=${searchQuery}&page=1&include_adult=false`;
//         }

//         //* get movies by category

//         if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'string') {
//           return `movie/${genreIdOrCategoryName}?&page=${page}&api_key=${tmdbApiKey}`;
//         }

//         if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'number') {
//           return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`;
//         }

//         return `movie/popular?&page=${page}&api_key=${tmdbApiKey}`;
//       },
//     }),
//     // Get movie
//     getMovie: builder.query({
//       query: (id) => `/movie/${id}?append_to_response=videos,credits&api_key=${tmdbApiKey}`,
//     }),
//     //* Get user Specific lists
//     getList: builder.query({
//       query: ({ listName, accountId, sessionId, page }) => `/account/${accountId}/${listName}?api_key=${tmdbApiKey}$session_id=${sessionId}&page=${page}`,
//     }),
//     // Get user specific lists
//     getRecommendations: builder.query({
//       query: ({ movie_id, list }) => `/movie/${movie_id}/${list}?api_key=${tmdbApiKey}`,
//     }),
//     getActor: builder.query({
//       query: (id) => `person/${id}?api_key=${tmdbApiKey}`,
//     }),

//     // Get Movies by Actor
//     getMoviesByActorId: builder.query({
//       query: ({ id, page }) => `/discover/movie?with_cast=${id}&page=${page}&api_key=${tmdbApiKey}`,
//     }),

//   }),

// });
// export const {
//   useGetGenresQuery,
//   useGetMoviesQuery,
//   useGetMovieQuery,
//   useGetListQuery,
//   useGetRecommendationsQuery,
//   useGetActorQuery,
//   useGetMoviesByActorIdQuery,

// } = tmdbApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
const tmdbApiKey = '455faf906d053079714d5c9865a3ff4f';

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({

    // Get Genres
    getGenres: builder.query({
      query: () => `/genre/movie/list?api_key=${tmdbApiKey}`,
    }),

    // Get Movies by [Type]
    getMovies: builder.query({
      query: ({ genreIdOrCategoryName, page, searchQuery }) => {
        // Get Movies by Search
        if (searchQuery) {
          return `/search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbApiKey}`;
        }

        // Get Movies by Category
        if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'string') {
          return `/movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`;
        }

        // Get Movies by Genre
        if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'number') {
          return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`;
        }

        // Get popular movies by default
        return `/movie/popular?page=${page}&api_key=${tmdbApiKey}`;
      },
    }),

    // Get Movie
    getMovie: builder.query({
      query: (id) => `/movie/${id}?append_to_response=videos,credits&api_key=${tmdbApiKey}`,
    }),

    // Get Recommendations
    getRecommendations: builder.query({
      query: ({ movie_id, list }) => `/movie/${movie_id}/${list}?api_key=${tmdbApiKey}`,
    }),

    // Get Actor
    getActor: builder.query({
      query: (id) => `person/${id}?api_key=${tmdbApiKey}`,
    }),

    // Get Movies by Actor
    getMoviesByActorId: builder.query({
      query: ({ id, page }) => `/discover/movie?with_cast=${id}&page=${page}&api_key=${tmdbApiKey}`,
    }),

    // Get User Specific Lists
    getList: builder.query({
      query: ({ listName, accountId, sessionId, page }) => `/account/${accountId}/${listName}?api_key=${tmdbApiKey}&session_id=${sessionId}&page=${page}`,
    }),
  }),
});

export const {
  useGetGenresQuery,
  useGetMoviesQuery,
  useGetMovieQuery,
  useGetRecommendationsQuery,
  useGetActorQuery,
  useGetMoviesByActorIdQuery,
  useGetListQuery,
} = tmdbApi;
