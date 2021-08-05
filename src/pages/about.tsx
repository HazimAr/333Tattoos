import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import dirTree from "directory-tree";
import { motion } from "framer-motion";
import getConfig from "next/config";
import Head from "next/head";
import path from "path";

const MotionVStack = motion(VStack);
const MotionImage = motion(Image);

export default function About({
	drawings,
	tattoos,
}: {
	drawings: string;
	tattoos: string;
}): JSX.Element {
	return (
		<>
			<Head>
				<title>333 Tattoos | About Me</title>
			</Head>
			<Container mt="50px">
				<ContainerInside>
					<Text>{JSON.stringify(drawings)}</Text>
					<Text>{JSON.stringify(tattoos)}</Text>

					<VStack spacing={5} overflowX="hidden">
						<HStack justify="center">
							<Heading textAlign="center" size="2xl">
								About Me
							</Heading>
						</HStack>
						<HStack
							spacing={{ base: 0, md: 20 }}
							flexDir={{ base: "column-reverse", md: "row" }}
						>
							<MotionVStack
								w="100%"
								bg="brand.secondary"
								p={5}
								rounded={10}
								mt={{ base: 10, md: 0 }}
								animate={{ x: 0 }}
								initial={{ x: -200 }}
								transition={{
									ease: "easeOut",
									duration: 1,
								}}
							>
								<MotionImage
									whileHover={{ scale: 0.9, rotate: 10 }}
									whileTap={{
										scale: 0.95,

										borderRadius: "100%",
									}}
									src="/me.png"
									width="400px"
									height="400px"
								/>
							</MotionVStack>

							<MotionVStack w="100%">
								<Heading>Who I Am</Heading>
								<Text>
									Hello! My name is Marie and I’m a Digital
									Artist and Tattoo Artist from Northern
									Kentucky. I’ve been drawing since I was
									little and it’s always been my passion. I’m
									self taught through both areas and am always
									finding ways to better my talents and
									broaden my skills. I also enjoy oil/gouache
									painting and do a bit of face painting as
									well. One of my goals in life is to try a
									bit of each art medium! And tattooing was a
									big medium that stuck with me. And now my
									goal is to master it. And I’m excited to see
									where that goal leads me.
								</Text>
							</MotionVStack>
						</HStack>
						<HStack
							spacing={{ base: 0, md: 20 }}
							flexDir={{ base: "column", md: "row" }}
						>
							<MotionVStack w="100%" mb={{ base: 10, md: 0 }}>
								<Heading>My Experience</Heading>
								<Text>
									Lorem ipsum dolor sit, amet consectetur
									adipisicing elit. Ut eius numquam ipsam
									eaque accusantium ad sunt maxime magnam
									deserunt odio, debitis cum expedita
									necessitatibus fugiat optio ducimus, ratione
									quam ea. Accusantium ad sunt maxime magnam
									deserunt odio, debitis cum expedita
									necessitatibus fugiat optio ducimus, ratione
									quam ea.
								</Text>
							</MotionVStack>
							<MotionVStack
								w="100%"
								bg="brand.secondary"
								p={5}
								rounded={10}
								mt={{ base: 10, md: 0 }}
								animate={{ x: 0 }}
								initial={{ x: 200 }}
								transition={{
									ease: "easeOut",
									duration: 1,
								}}
							>
								<MotionImage
									whileHover={{ scale: 0.9, rotate: 10 }}
									whileTap={{
										scale: 0.95,

										borderRadius: "100%",
									}}
									src="/featured.png"
									width="400px"
									height="400px"
								/>
							</MotionVStack>
						</HStack>
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
	);
	const tattoos = dirTree(
		` ${path.join(
			getConfig().serverRuntimeConfig.PROJECT_ROOT,
			"./public"
		)}/art/tattoos`
	);

	return { props: { drawings, tattoos } };
}
