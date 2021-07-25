/* eslint-disable import/no-default-export */
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	colors: {
		brand: {
			primary: "#b71c1c",
			secondary: "#212121",
			accent: "#1cb7b7",
		},
		hell: {
			100: "#FFCDD2",
			200: "#EF9A9A",
			300: "#E57373",
			400: "#EF5350",
			500: "#f44336",
			600: "#e53935",
			700: "#d32f2f",
			800: "#c62828",
			900: "#b71c1c",
			1000: "#911515",
			1100: "#730c0c",
		},
		text: {
			50: "#FAFAFA",
			100: "#F5F5F5",
			200: "#EEEEEE",
			300: "#E0E0E0",
			400: "#BDBDBD",
			500: "#9E9E9E",
			600: "#757575",
			700: "#616161",
			800: "#424242",
			900: "#212121",
			1000: "#161616",
		},
	},
	// @ts-ignore
	styles: {
		global: () => ({
			html: {
				height: "100%",
			},
			body: {
				fontFamily: "body",
				color: "white",
				bg: "text.1000",
				lineHeight: "base",
			},
			a: {
				color: "white",
			},
			"::-webkit-scrollbar": {
				width: "0.6em",
			},
			h1: {
				color: "#1cb7b7",
			},
			h2: {
				color: "#1cb7b7",
			},
			h3: {
				color: "#1cb7b7",
			},
			"::-webkit-scrollbar-track": {
				borderRadius: "0px",
			},

			"::-webkit-scrollbar-thumb": {
				backgroundColor: "#b71c1c",
				borderRadius: "80px",
			},
		}),
	},
});

export default theme;
