// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@kevinmarrec/nuxt-pwa'
  ],
  pwa: {
    manifest: {
      name: 'Your App Name',
      short_name: 'App',
      lang: 'en',
      start_url: '/',
      display: 'standalone'
    }
  }
})
