export default {
    components: true,
    modules: [
        '@nuxt/http',
        '@nuxt/content',
        '@nuxtjs/tailwindcss'
    ],
    content: {
        nestedProperties: ['categories']
    },
    head: {
        link: [
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap'
            }
        ]
    }
}