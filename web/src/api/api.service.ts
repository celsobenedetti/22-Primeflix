import { useAxios } from "@vueuse/integrations/useAxios";

export const useGet = (url: string) => {
  return useAxios(url);
};
