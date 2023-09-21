// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  elementPlus: {
    importStyle: "scss",
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@unocss/nuxt", 
    "@element-plus/nuxt",
    "@nuxtjs/color-mode",
  ],
  pinia: {
    autoImports: ["defineStore", "storeToRefs"],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/scss/element/index.scss" as element;`,
        },
      },
    },
  },
  typescript: {
    tsConfig: {
      extends: "../../../tsconfig.base.json",
    },
  },
});
