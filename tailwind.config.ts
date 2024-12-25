import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	fontFamily: {
  		primary: 'var(--font-inter)',
  		secondary: 'var(--font-poppins)',
  		testimonial: 'var(--font-playfair_display)'
  	},
  	extend: {
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))'
  		},
  		colors: {
  			primary: {
  				DEFAULT: '#0B1120',
  				dark: '#1A1F36',
  				midnight: '#102A43'
  			},
  			accent: {
  				DEFAULT: '#4A90E2',
  				dark: '#3B5998'
  			},
  			highlight: {
  				DEFAULT: '#0077FF',
  				muted: '#1A73E8'
  			},
  			typography: {
  				DEFAULT: '#8AB4F8',
  				muted: '#5E81AC'
  			},
  			overlay: {
  				DEFAULT: '#121C3B'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
