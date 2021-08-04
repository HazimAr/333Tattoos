import { Center, Grid, GridItem, Image, VStack } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import dirTree from "directory-tree";
import Head from "next/head";

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
												maxW="200px"
												maxH="200px"
											/>
										</Center>
									</GridItem>
								);
							})}
						</Grid>
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
										<Image
											src={`/art/drawings/${drawing.name}`}
											maxW="200px"
										/>
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
	const drawings = dirTree("public/art/drawings").children;
	const tattoos = dirTree("public/art/tattoos").children;
	return { props: { drawings, tattoos } };
}
