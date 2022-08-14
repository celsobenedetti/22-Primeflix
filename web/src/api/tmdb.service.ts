import { useGet } from "./api.service";

const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const TMDB_BASE = "https://api.themoviedb.org/3";
export const TMDB_AUTH = `api_key=${TMDB_API_KEY}`;

const urlTMDB = (endpoint: string) => `${TMDB_BASE}/${endpoint}?${TMDB_AUTH}`;

export const useGetTMDB = (endpoint: string) => {
  return useGet(urlTMDB(endpoint));
};

export const getTMDBGenres = async () => {
  const { data } = await useGetTMDB("genre/movie/list");
  const { genres } = data.value;

  return genres;
};

export const getTMDBConfig = async () => {
  const { data } = await useGetTMDB("configuration");
  const { secure_base_url, poster_sizes, backdrop_sizes } = data.value.images;

  return {
    baseImgUrlTMDB: secure_base_url,
    posterSizesTMDB: poster_sizes,
    backdropSizesTMDB: backdrop_sizes,
  };
};

export const useTMDBSearch = () => {
  const { execute, ...useGetReturn } = useGet("", { immediate: false });
  return {
    ...useGetReturn,
    execute: (query: string) => execute(`${urlTMDB("search/movie")}&query=${query}`),
  };
};
