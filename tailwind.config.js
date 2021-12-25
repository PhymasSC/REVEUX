module.exports = {
	content: ["./client/views/**/*.{html,js}"],
	plugins: [
		require("@themesberg/flowbite/plugin"),
		require("tailwind-scrollbar")
	],
	variants: {
		scrollbar: ["rounded"]
	},
	theme: {
		extend: {
			fontFamily: {
				sans: ["ui-sans-serif", "system-ui"],
				serif: ["ui-serif", "Georgia"],
				mono: ["ui-monospace", "SFMono-Regular"],
				"Fauna-one": ["'Fauna One'", "sans-serif"],
				Cinzel: ["Cinzel", "sans-serif"]
			},
			backgroundSize: {
				auto: "auto",
				cover: "cover",
				contain: "contain",
				"300%": "300%"
			},
			animation: {
				"ltr-linear-infinite": "move-bg 5s alternate infinite"
			},
			// Define keyframes
			keyframes: {
				"move-bg": {
					"0%": { "background-position": "0%" },
					"100%": { "background-position": "100%" }
				}
			}
		}
	}
};
