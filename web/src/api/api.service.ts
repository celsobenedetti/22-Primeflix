import { useAxios } from "@vueuse/integrations/useAxios";

export const useGet = (url: string, opts = { immediate: true }) => {
  return useAxios(url, { method: "GET" }, { immediate: opts.immediate });
};
