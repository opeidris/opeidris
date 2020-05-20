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
				lightest: '#eeeeee',
				s_brown: '#2E292D',
				s_light: '#F2F1E9'
			}
		}
	},
	variants: {},
	plugins: [ require('@tailwindcss/ui') ]
};
