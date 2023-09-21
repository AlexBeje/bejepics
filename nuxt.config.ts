// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  colorMode: {
    classSuffix: "",
  },
  elementPlus: {
    icon: "ElIcon",
    importStyle: "scss",
    themes: ["dark"],
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
  unocss: {
    uno: true,
    attributify: true,
    icons: {
      scale: 1.2,
    },
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
