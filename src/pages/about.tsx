import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import { motion } from "framer-motion";
import Head from "next/head";

const MotionVStack = motion(VStack);
const MotionImage = motion(Image);

export default function About(): JSX.Element {
	return (
		<>
			<Head>
				<title>333 Tattoos | About Me</title>
			</Head>
			<Container>
				<ContainerInside>
					<VStack spacing={5} overflowX="hidden">
						<HStack justify="center">
							<Heading textAlign="center" size="2xl">
								About me
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
									ease: "ease",
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
									ease: "ease",
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
