import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import Head from "next/head";

export default function Gallery(): JSX.Element {
	return (
		<>
			<Head>
				<title>333 Tattoos | Gallery</title>
			</Head>
			<Container>
				<ContainerInside></ContainerInside>
			</Container>
		</>
	);
}
