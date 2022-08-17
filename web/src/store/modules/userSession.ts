import { useStorage } from "@vueuse/core";
import { ActionContext } from "vuex";
import { UserSessionState } from "../../interfaces/vuex/session";

export default {
  state: () => ({ token: useStorage("jwtToken", "") }),

  mutations: {
    setToken(state: UserSessionState, payload: string) {
      state.token = payload;
    },
  },

  getters: {
    sessionToken: (state: UserSessionState) => state.token,
  },
};
