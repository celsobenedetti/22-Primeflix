import "./tailwind.css";

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { vue3Debounce } from "vue-debounce";

import App from "./App.vue";
import { routes } from "./routes.js";
import { key, store } from "./store";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(store, key);
app.use(router);
app.directive("debounce", vue3Debounce({ lock: true })).mount("#app");
