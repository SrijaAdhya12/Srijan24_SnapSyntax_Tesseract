/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: [...defaultTheme.fontFamily.sans],
				body: ['Montserrat', 'Poppins', 'Roboto', 'Inter'],
				body2: ['Poppins', 'Roboto', 'Inter'],
			},
		},
	},
	plugins: [],
}
