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
						<DrawingGrid>
							{tattoos.map((tattoo) => {
								return (
									<DrawingImage
										key={tattoo.name}
										name={tattoo.name}
										src="/art/tattoos/"
									/>
								);
							})}
						</DrawingGrid>
						<Heading>Drawings</Heading>
						<DrawingGrid>
							{drawings.map((drawing) => {
								return (
									<DrawingImage
										key={drawing.name}
										name={drawing.name}
										src="/art/drawings/"
									/>
								);
							})}
						</DrawingGrid>
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

function DrawingImage({ name, src }: { name: string; src: string }) {
	return (
		<GridItem>
			<Center h="100%">
				<Image
					src={`${src}${name}`}
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
}

function DrawingGrid({ children }: { children: any[] }) {
	return (
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
			{children}
		</Grid>
	);
}
