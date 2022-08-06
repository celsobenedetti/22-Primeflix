import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import { State } from "../interfaces/vuex";

import loadingModule from "./modules/loading";

export const store = createStore<State>({
  modules: {
    loading: loadingModule,
  },
});

export const key: InjectionKey<Store<State>> = Symbol();

export const useStore = () => baseUseStore(key);
