import { useStorage } from "@vueuse/core";
import { ActionContext } from "vuex";
import { useGet } from "../../api";
import { getTMDBConfig } from "../../api/tmdb.service";

import { IGenreMapping, IImagesConfig, ITMDBState } from "../../interfaces/vuex";

export default {
  state: () => ({
    imagesConfig: {
      baseImgUrlTMDB: useStorage("baseImgUrlTMDB", ""),
      posterSizesTMDB: useStorage("imgSizeTMDB", []),
    },
    genresMap: new Map<string, string>(),
  }),

  getters: {
    baseImgUrlTMDB: (state: ITMDBState) => state.imagesConfig.baseImgUrlTMDB,
    posterSizesTMDB: (state: ITMDBState) => state.imagesConfig.posterSizesTMDB,
    genresMap: (state: ITMDBState) => state.genresMap,

    posterUrlTMDB: (state: ITMDBState) => {
      const base = state.imagesConfig.baseImgUrlTMDB;
      const posterSize = state.imagesConfig.posterSizesTMDB;
      return `${base}${posterSize.at(-1)}`;
    },
  },

  mutations: {
    setTMDBImgConfig(state: ITMDBState, payload: IImagesConfig) {
      state.imagesConfig.baseImgUrlTMDB = payload.baseImgUrlTMDB;
      state.imagesConfig.posterSizesTMDB = payload.posterSizesTMDB;
    },
    setTMDBGenresMap(state: ITMDBState, genres: Array<IGenreMapping>) {
      state.genresMap = new Map<string, string>();
      genres.map(({ id, name }) => state.genresMap.set(id, name));
    },
  },

  actions: {
    async configTMDB(context: ActionContext<ITMDBState, {}>) {
      const { genres, ...imgConfig } = await getTMDBConfig();
      context.commit("setTMDBImgConfig", imgConfig);
      context.commit("setTMDBGenresMap", genres);
    },
    async useGetPoster(context: ActionContext<ITMDBState, {}>) {
      return (endpoint: string) => useGet(`${context.getters.posterUrlTMDB}/${endpoint}`);
    },
  },
};
