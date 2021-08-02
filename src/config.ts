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
	title: "333 Tattoos",
	lang: "en-us",
	description: "333 Tattoos",
	url: "https://333tattoos.art/",
	image: "/logo.png",
};

export { GA_TRACKING_ID, IS_PRODUCTION, META };
