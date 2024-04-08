import { createApp } from "vue";
import { createAuth0 } from "@auth0/auth0-vue";
import { createPinia } from "pinia";

import { auth0Configuration } from "./core/auth0/configuration";
import { router } from "./routes";

import App from "./App.vue";

import "./style.css";

const app = createApp(App);

const pinia = createPinia();
const auth0 = createAuth0(auth0Configuration);

app.use(router).use(pinia).use(auth0).mount("#app");
