if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}
export default {
	mode: 'universal',
	/*
  ** Headers of the page
  */
	head: {
		title: process.env.npm_package_name || 'Opeyemi David Idris',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content: process.env.npm_package_description || 'A pretty cool persons personal website'
			}
		],
		link: [ { rel: 'icon', type: 'image/x-icon', href: '/favicon4.png' } ]
	},
	/*
  ** Customize the progress-bar color
  */
	loading: { color: '#fff' },
	/*
  ** Global CSS
  */
	css: [],
	/*
  ** Plugins to load before mounting the App
  */
	plugins: [],
	/*
  ** Nuxt.js dev-modules
  */
	buildModules: [
		// Doc: https://github.com/nuxt-community/nuxt-tailwindcss
		'@nuxtjs/tailwindcss',
		'@nuxtjs/dotenv'
	],
	/*
  ** Nuxt.js modules
  */
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
		[
			'@nuxtjs/firebase',
			{
				config: {
					apiKey: process.env.FIREBASE_API_KEY,
					authDomain: process.env.FIREBASE_AUTH_DOMAIN,
					databaseURL: process.env.FIREBASE_DATA_URL,
					projectId: process.env.FIREBASE_PROJECT_ID,
					storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
					messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
					appId: process.env.FIREBASE_APP_ID,
					measurementId: process.env.FIREBASE_MEASUREMENT_ID
				},
				services: {
					functions: true // Just as example. Can be any other service.
				}
			}
		]
	],
	/*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
	axios: {},
	/*
  ** Build configuration
  */
	build: {
		/*
    ** You can extend webpack config here
    */
		extend(config, ctx) {}
	}
};
