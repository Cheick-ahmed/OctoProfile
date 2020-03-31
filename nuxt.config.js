
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s | OctoProfile',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href : 'https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800,900&display=swap'},
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#020c1b' },
  /*
  ** Global CSS
  */
  css: [
  '~assets/styles/app.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
   postcss : {
    plugins : {
      tailwindcss : './tailwind.config.js'
    }
   },
    extend (config, ctx) {
    }
  }
}
