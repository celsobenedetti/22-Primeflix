import { Commit } from "vuex";
import { LoadingState } from "./loading";

export interface State {
  loading: LoadingState;
}

export interface StoreCommit {
  commit: Commit;
}
