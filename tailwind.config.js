import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [typography, require('daisyui')],

	// daisyUI config (optional - here are the default values)
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#400303',
					secondary: '#BFA995',
					neutral: '#BC9E84',
					accent: '#260401',
					'base-100': '#731702'
					// ... other color values remain unchanged
				}
			}
		],
		darkTheme: 'sunset', // name of one of the included themes for dark mode
		base: true, // applies background color and foreground color for root element by default
		styled: true, // include daisyUI colors and design decisions for all components
		utils: true, // adds responsive and modifier utility classes
		logs: true // Shows info about daisyUI version and used config in the console when building your CSS
	}
};
