import { useGet } from "./api.service";

const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const TMDB_URL = "https://api.themoviedb.org/3";
export const TMDB_AUTH = `api_key=${TMDB_API_KEY}`;

export const useGetTMDB = (endpoint: string) => {
  return useGet(`${TMDB_URL}/${endpoint}?${TMDB_AUTH}`);
};

export const getTMDBGenres = async () => {
  const { data } = await useGetTMDB("genre/movie/list");
  const { genres } = data.value;

  return genres;
};

export const getTMDBConfig = async () => {
  const { data } = await useGetTMDB("configuration");
  const { secure_base_url, poster_sizes } = data.value.images;

  return { baseImgUrlTMDB: secure_base_url, posterSizesTMDB: poster_sizes };
};
