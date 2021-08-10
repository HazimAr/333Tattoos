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
			<Container mt="50px">
				<ContainerInside>
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
									young and it’s always been my passion. I’m
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
									I’ve been drawing since I was young, as I
									grew I started doing commissions for
									traditional and digital art and have been
									doing them for as much as 6 years. I’m a
									self taught tattoo artist of a year and a
									half, I started during Covid of April 2020.
									I’m a painter, a traditional pencil artist,
									and a digital artist and have been for
									years. I’m working towards apprenticeships
									and growing from my own experiences.
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
