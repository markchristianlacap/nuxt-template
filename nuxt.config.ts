// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/fontaine',
    '@nuxt/ui',
    '@vue-macros/nuxt',
    '@vueuse/nuxt',
        '@nuxtjs/eslint-module',
  ],
  googleFonts: {
    families: {
      Montserrat: true,
    },
    display: 'swap',
  },
})
