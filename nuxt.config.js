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
		'@nuxtjs/tailwindcss'
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
					apiKey: 'AIzaSyAZ3N1SU367jd7L1iZWdO1KmJ96TXX89Cc',
					authDomain: 'ope-idris.firebaseapp.com',
					databaseURL: 'https://ope-idris.firebaseio.com',
					projectId: 'ope-idris',
					storageBucket: 'ope-idris.appspot.com',
					messagingSenderId: '867764570466',
					appId: '1:867764570466:web:3d05e017783395838cc43b',
					measurementId: 'G-NXTDVQHZ30'
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
