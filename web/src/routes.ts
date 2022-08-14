import Home from "./views/Home.vue";
import Movie from "./views/Movie.vue";
import About from "./views/About.vue";
import Search from "./views/Search.vue";
import NotFound from "./views/NotFound.vue";

import { RouterOptions } from "vue-router";

export const routes: RouterOptions["routes"] = [
  { path: "/", component: Home },
  { path: "/movies/:id", component: Movie },
  { path: "/search", component: Search },
  {
    path: "/about",
    meta: { title: "About" },
    component: About,

    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
  },

  { path: "/:path(.*)", component: NotFound },
];
