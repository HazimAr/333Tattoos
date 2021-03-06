import { Box, ChakraProvider, Stack } from "@chakra-ui/react";
import Footer from "@components/footer";
import Header from "@components/header";
import { pageview } from "@lib/gtag";
import theme from "@styles/theme";
import { META } from "config";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	const router = useRouter();
	useEffect(() => {
		const handleRouteChange = (url: unknown) => {
			pageview(url);
		};
		router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);
	return (
		<>
			<Head>
				<title>{META.title}</title>
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="preload"
					href="/fonts/Tattoo.ttf"
					as="font"
					type="font/ttf"
				/>
			</Head>
			<ChakraProvider theme={theme}>
				<Stack justify="space-between" minH="100vh" spacing={0}>
					<Box>
						<Header />
						<Component {...pageProps} />
					</Box>
					<Footer />
				</Stack>
			</ChakraProvider>
		</>
	);
}
