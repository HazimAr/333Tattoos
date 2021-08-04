import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import Head from "next/head";

export default function About(): JSX.Element {
	return (
		<>
			<Head>
				<title>333 Tattoos | About Me</title>
			</Head>
			<Container>
				<ContainerInside>
					<VStack spacing={5}>
						<HStack justify="center">
							<Heading textAlign="center" size="2xl">
								About me
							</Heading>
						</HStack>
						<HStack
							spacing={{ base: 0, md: 20 }}
							flexDir={{ base: "column-reverse", md: "row" }}
						>
							<VStack
								w="100%"
								borderColor="brand.primary"
								borderWidth="5px"
								mt={{ base: 10, md: 0 }}
							>
								<Image
									src="/me.png"
									width="300px"
									height="300px"
								/>
							</VStack>

							<VStack w="100%">
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
							</VStack>
						</HStack>
						<HStack
							spacing={{ base: 0, md: 20 }}
							flexDir={{ base: "column", md: "row" }}
						>
							<VStack w="100%" mb={{ base: 10, md: 0 }}>
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
							</VStack>
							<VStack
								borderColor="brand.primary"
								borderWidth="5px"
								w="100%"
							>
								<Image
									src="/featured.png"
									width="300px"
									height="300px"
								/>
							</VStack>
						</HStack>
					</VStack>
				</ContainerInside>
			</Container>
		</>
	);
}
