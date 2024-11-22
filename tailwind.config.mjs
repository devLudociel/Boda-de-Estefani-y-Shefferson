/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			sm: '320px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
			xxl: "2560px",
		  },
		  fontFamily: {
			sans: ['Lobster', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
		  },
		  colors:{
			main: "#ef9ca4",
			white:"#fff",
		  },
		extend: {},
	},
	plugins: [
	],
}
