import { useStorage } from "@vueuse/core";
import { ActionContext } from "vuex";
import { getTMDBConfig } from "../../api/tmdb.service";

import { IImagesConfig, ITMDBState } from "../../interfaces/vuex";

export default {
  state: () => ({
    imagesConfig: {
      baseImgUrlTMDB: useStorage("baseImgUrlTMDB", ""),
      posterSizesTMDB: useStorage("imgSizeTMDB", []),
    },
  }),

  getters: {
    baseImgUrlTMDB: (state: ITMDBState) => state.imagesConfig.baseImgUrlTMDB,
    posterSizesTMDB: (state: ITMDBState) => state.imagesConfig.posterSizesTMDB,
  },

  mutations: {
    setTMDBConfig(state: ITMDBState, payload: IImagesConfig) {
      state.imagesConfig.baseImgUrlTMDB = payload.baseImgUrlTMDB;
      state.imagesConfig.posterSizesTMDB = payload.posterSizesTMDB;
    },
  },

  actions: {
    async configTMDB(context: ActionContext<ITMDBState, {}>) {
      if (!context.getters.baseImgUrlTMDB || !context.getters.posterSizesTMDB?.length) {
        context.commit("setTMDBConfig", await getTMDBConfig());
      }
    },
  },
};
