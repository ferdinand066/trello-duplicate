import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router";
import routes from './router/main';
import vue3GoogleLogin from "vue3-google-login";


const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

const gAuthClientId =
  "1014884926601-pj1d5ras7ne3uj2t3oge6kinvs6vkhh2.apps.googleusercontent.com";
const gAuthClientSecret = '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'

const app = createApp(App)

app.use(vue3GoogleLogin, {
  clientId: gAuthClientId,
}).use(router).mount("#app");
