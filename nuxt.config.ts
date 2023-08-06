// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxtjs/google-fonts",
    "@pinia/nuxt",
  ],
  pinia: {
    autoImports: ["defineStore", "storeToRefs"],
  },
  css: ["@/assets/css/main.scss"],
  googleFonts: {
    families: {
      Roboto: {
        wght: [100, 300, 500, 700],
      },
      Teko: {
        wght: [300, 500, 700],
      },
    },
  },
  runtimeConfig: {
    public: {
      forwardEmailApiKey: process.env.FORWARD_EMAIL_API_KEY,
    },
  },
});
