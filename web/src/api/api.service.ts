import { useAxios } from "@vueuse/integrations/useAxios";

const SERVER_BASE_URL = import.meta.env.VITE_SERVER_BASE_URL;

export const useGet = (url: string, opts = { immediate: true }) => {
  return useAxios(url, { method: "GET" }, { immediate: opts.immediate });
};

export const usePostServer = (endpoint: string, { data = {}, immediate = false } = {}) => {
  return useAxios(`${SERVER_BASE_URL}/${endpoint}`, { method: "POST", data }, { immediate });
};
