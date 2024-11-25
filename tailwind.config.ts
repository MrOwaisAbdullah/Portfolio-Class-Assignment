import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: '#457B9D',
  			secondary: '#ebfeff',
  			accent: '#daf1f5',
  			background: '#ffffff',
  			heading: '#000000',
  			text: '#2f3333'
  		},
  		screens: {
  			xs: '320px'
  		},
  		container: {
  			center: true,
  			padding: '1rem'
  		},
  		fontFamily: {
  			sora: ["Sora", "sans-serif"]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
};
export default config;
