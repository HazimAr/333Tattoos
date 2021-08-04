import {
	Center,
	Grid,
	GridItem,
	Heading,
	Image,
	VStack,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import dirTree from "directory-tree";
import getConfig from "next/config";
import Head from "next/head";
import path from "path";
export default function Gallery({
	drawings,
	tattoos,
}: {
	drawings: any[];
	tattoos: any[];
}): JSX.Element {
	// console.log(__dirname);
	return (
		<>
			<Head>
				<title>333 Tattoos | Gallery</title>
			</Head>
			<Container>
				<ContainerInside>
					<VStack>
						<Heading>Tattoos</Heading>
						<Grid
							templateColumns={{
								base: "repeat(1, 1fr)",
								sm: "repeat(2, 1fr)",
								md: "repeat(3, 1fr)",
								lg: "repeat(4, 1fr)",
								xl: "repeat(5, 1fr)",
							}}
							gap={6}
						>
							{tattoos.map((tattoo) => {
								return (
									<GridItem key={tattoo.name}>
										<Center h="100%">
											<Image
												src={`/art/tattoos/${tattoo.name}`}
												transition="ease .2s"
												_hover={{
													transform: "scale(0.9)",
													cursor: "pointer",
												}}
												rounded={5}
												maxW="230px"
												maxH="300px"
											/>
										</Center>
									</GridItem>
								);
							})}
						</Grid>
						<Heading>Drawings</Heading>
						<Grid
							templateColumns={{
								base: "repeat(1, 1fr)",
								sm: "repeat(2, 1fr)",
								md: "repeat(3, 1fr)",
								lg: "repeat(4, 1fr)",
								xl: "repeat(5, 1fr)",
							}}
							gap={6}
						>
							{drawings.map((drawing) => {
								return (
									<GridItem key={drawing.name}>
										<Center h="100%">
											<Image
												src={`/art/drawings/${drawing.name}`}
												transition="ease .2s"
												_hover={{
													transform: "scale(0.9)",
													cursor: "pointer",
												}}
												rounded={5}
												maxW="230px"
												maxH="300px"
											/>
										</Center>
									</GridItem>
								);
							})}
						</Grid>
					</VStack>
				</ContainerInside>
			</Container>
		</>
	);
}

export async function getServerSideProps() {
	const drawings = dirTree(
		`${path.join(
			getConfig().serverRuntimeConfig.PROJECT_ROOT,
			"./public"
		)}/art/drawings`
	).children;
	const tattoos = dirTree(
		`${path.join(
			getConfig().serverRuntimeConfig.PROJECT_ROOT,
			"./public"
		)}/art/tattoos`
	).children;
	return { props: { drawings, tattoos } };
}
