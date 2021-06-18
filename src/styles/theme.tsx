/* eslint-disable import/no-default-export */
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	colors: {
		heaven: {
			50: "#dffbfb",
			100: "#aff4f6",
			200: "#74eef2",
			300: "#02e6ee",
			400: "#00dfeb",
			500: "#00d7e9",
			600: "#00c6d6",
			700: "#00b0ba",
			800: "#009ba2",
			900: "#007774",
			
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
		}),
	},
});

export default theme;
