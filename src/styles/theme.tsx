/* eslint-disable import/no-default-export */
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	colors: {
		brand: {
			100: "#FFCDD2",
			200: "#EF9A9A",
			300: "#E57373",
			400: "#EF5350",
			500: "#F44336",
			600: "#E53935",
			700: "#D32F2F",
			800: "#C62828",
			900: "#B71C1C",
			1000: "#911515",
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