module.exports = {
	content: ["./client/views/**/*.{html,js}"],
	plugins: [require("tailwind-scrollbar")],
	variants: {
		scrollbar: ["rounded"]
	},
	theme: {
		extend: {
			fontFamily: {
				sans: ["ui-sans-serif", "system-ui"],
				serif: ["ui-serif", "Georgia"],
				mono: ["ui-monospace", "SFMono-Regular"],
				mulish: ["mulish", "sans-serif"],
				Cinzel: ["cinzel", "sans-serif"]
			},
			backgroundSize: {
				auto: "auto",
				cover: "cover",
				contain: "contain",
				"300%": "300%"
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
