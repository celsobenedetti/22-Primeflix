import { useStorage } from "@vueuse/core";
import { ActionContext } from "vuex";
import { getUserBookmarks } from "../../api";
import { IUserSessionState } from "../../interfaces/vuex/session";

export default {
  state: () => ({
    token: useStorage("jwtToken", ""),
    bookmarks: [],
  }),

  mutations: {
    setToken(state: IUserSessionState, payload: string) {
      state.token = payload;
    },
    setBookmarks(state: IUserSessionState, payload: any[]) {
      state.bookmarks = payload;
    },
  },

  actions: {
    async fetchBookmarks(context: ActionContext<IUserSessionState, {}>) {
      if (!context.getters.sessionToken) return;
      context.commit("setBookmarks", await getUserBookmarks(context.getters.sessionToken));
    },
  },

  getters: {
    sessionToken: (state: IUserSessionState) => state.token,
    bookmarks: (state: IUserSessionState) => state.bookmarks,
  },
};
