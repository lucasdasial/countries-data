import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import { createPinia } from "pinia";

import en from "./locales/en.json";
import pt from "./locales/pt.json";

const translations = { en: en, pt: pt };

import { createI18n } from "vue-i18n";
const i18n = createI18n({
  locale: "pt",
  allowComposition: true, // you need to specify that!
  messages: translations,
});

// createApp(App).mount("#app");

const app = createApp(App).use(createPinia());

app.use(i18n);
app.use(router);
app.mount("#app");
