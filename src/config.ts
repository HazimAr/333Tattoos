// google analytics measurement id
const GA_TRACKING_ID = "G-V800SCXHVK";
const IS_PRODUCTION = process.env.NODE_ENV === "production";

type MetaType = {
	title: string;
	lang: string;
	description: string;
	url: string;
	image: string;
};

const META: MetaType = {
	title: "NextJS ChakraUI Template | Hazim Arafa",
	lang: "en-us",
	description:
		"Boilerplate built to scale containing Typescript + NextJS + ChakraUI + Google Analytics + ESLint + Jest + Styled Components + Icons",
	url: "https://www.333tattoos.art/",
	image: "/logo.png",
};

export { GA_TRACKING_ID, IS_PRODUCTION, META };
