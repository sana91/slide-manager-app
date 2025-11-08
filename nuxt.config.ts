// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  
  // SPAモードの設定
  ssr: false,
  
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss'
  ],

  // Tailwind CSS設定
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.ts',
    exposeConfig: false,
    viewer: true,
  },

  // TypeScript設定
  typescript: {
    strict: true,
    typeCheck: false
  },

  // Auto imports設定（composablesの自動インポート）
  imports: {
    dirs: [
      'composables/**',
      'stores/**',
      'types/**'
    ]
  },

  // アプリケーション設定
  app: {
    // リポジトリ配下で公開する場合は baseURL を環境変数で差し替え
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      title: 'Slide Manager',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'HTML Slide Management Application' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&display=swap' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css' }
      ]
    }
  }
})
