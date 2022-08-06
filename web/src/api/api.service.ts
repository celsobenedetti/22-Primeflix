import { useAxios as useAxiosBase } from "@vueuse/integrations/useAxios";

const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const TMDB_URL = "https://api.themoviedb.org/3";
export const TMDB_AUTH = `api_key=${TMDB_API_KEY}`;

export const useGet = (url: string) => {
  return useAxiosBase(url, {}, { immediate: false });
};
