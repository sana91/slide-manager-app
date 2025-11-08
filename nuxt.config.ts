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
    head: {
      title: 'Slide Manager',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'HTML Slide Management Application' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
