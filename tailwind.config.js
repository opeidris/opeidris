/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
	theme: {
		extend: {
			colors: {
				darkest: '#222831',
				dark: '#393e46',
				light: '#00adb5',
				lightest: '#eeeeee'
			}
		}
	},
	variants: {},
	plugins: [ require('@tailwindcss/ui') ]
};
