// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  app: {
    head: {
      link: [
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com',
        },
        
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
        },

        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400&display=swap',
        },
      ]
    }
  },
  modules: ['@nuxtjs/tailwindcss']
})