import Home from "./views/Home.vue";
import About from "./views/About.vue";
import NotFound from "./views/NotFound.vue";

import { RouterOptions } from "vue-router";

export const routes: RouterOptions["routes"] = [
  { path: "/", name: "home", component: Home },
  { path: "/movies/:id", name: "movie", component: () => import("./views/Movie.vue") },
  { path: "/search", name: "search", component: () => import("./views/Search.vue") },
  { path: "/signin", name: "signin", component: () => import("./views/SignIn.vue") },
  { path: "/signup", name: "signup", component: () => import("./views/SignUp.vue") },
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
