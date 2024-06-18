// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // typescript: {
  //   typeCheck: true,
  // },
  css: ['~/assets/main.scss'],
  alias: {
    // '~': '/<srcDir>',
    '@': '/<srcDir>',
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/colors.scss" as *;',
        },
      },
    },
  },
  modules: ['@nuxt/image'],
  runtimeConfig: {
    public: {
      apiBase: process.env.BASE_URL,
    },
  },
});
