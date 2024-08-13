// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@kevinmarrec/nuxt-pwa'],
  srcDir: 'src/',
  plugins: [],
  app: {
    baseURL: '/',
    // 動畫
    // pageTransition: { name: 'page', mode: 'out-in' },
    // html header
    head: {
      htmlAttrs: {
        lang: 'zh-tw'
      },
      title: '渴望之音',
      meta: [
        {
          'http-equiv': 'content-type',
          content: 'text/html',
          charset: 'utf-8'
        },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '渴望之音' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      noscript: [
        {
          children:
            '此網頁需要支援 JavaScript 才能正確運行，請先至你的瀏覽器設定中開啟 JavaScript。'
        }
      ]
    }
  },
  pwa: {
    meta: {
      title: '渴望之音',
      ogSiteName: '渴望之音',
      author: 'YearnSound',
      orientation: 'landscape'
    },
    manifest: {
      name: '渴望之音',
      short_name: '渴望之音',
      lang: 'zh-TW',
      start_url: '/',
      display: 'browser',
      useWebmanifestExtension: false
    },
    workbox: {
      enabled: false
    }
  }
});
