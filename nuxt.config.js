module.exports = {
    mode: 'universal',
    /*
    ** Headers of the page
    */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },
    /*
    ** Global CSS
    */
    css: [
        // using this because babel-import-plugin with ant-design-vue isn't working correct,
        // and nuxt / ant-design-vue provide absolutely no documentation on how this should work.
        // so fuck it.
        'ant-design-vue/dist/antd.css'
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        // '@/plugins/antd-ui'
    ],
    /*
    ** Nuxt.js dev-modules
    */
    serverMiddleware: [],
    buildModules: ["@nuxt/typescript-build"],
    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        // Doc: https://github.com/nuxt-community/dotenv-module
        '@nuxtjs/dotenv',
        "@nuxtjs/proxy"
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
        babel: {
            plugins: [[
                "import", {
                    libraryName: "ant-design-vue",
                    libraryDirectory: "lib",
                    // style: true // Doesn't work, so fuck it, import the css file as is, and move on.
                }
            ]]
        },
        additionalExtensions: ["ts", "tsx"],

        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
        }
    },
    proxy: {
        // proxy request for the /api route during development
        "/api": "http://localhost:4000"
    }
}
