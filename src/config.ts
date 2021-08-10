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
	title: "333 Tattoos || Tattoos and Commissions",
	lang: "en-us",
	description:
		"Hello! My name is Marie and I’m a Digital Artist and Tattoo Artist from Northern Kentucky. I’ve been drawing since I was young and it’s always been my passion.",
	url: "https://333tattoos.art/",
	image: "/logo.png",
};

export { GA_TRACKING_ID, IS_PRODUCTION, META };
