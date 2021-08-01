import { Heading, HStack, Text, VStack } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import Image from "next/image";

export default function about(): JSX.Element {
	return (
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
						<VStack borderColor="brand.primary" borderWidth="5px">
							<Image
								src="/me.gif"
								width="2500px"
								height="1250px"
							/>
						</VStack>

						<VStack>
							<Heading>Who Am I?</Heading>
							<Text>
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit. Ut eius numquam ipsam eaque
								accusantium ad sunt maxime magnam deserunt odio,
								debitis cum expedita necessitatibus fugiat optio
								ducimus, ratione quam ea. Accusantium ad sunt
								maxime magnam deserunt odio, debitis cum
								expedita necessitatibus fugiat optio ducimus,
								ratione quam ea.
							</Text>
						</VStack>
					</HStack>
					<HStack
						spacing={{ base: 0, md: 20 }}
						flexDir={{ base: "column", md: "row" }}
					>
						<VStack>
							<Heading>My Experience</Heading>
							<Text>
								Lorem ipsum dolor sit, amet consectetur
								adipisicing elit. Ut eius numquam ipsam eaque
								accusantium ad sunt maxime magnam deserunt odio,
								debitis cum expedita necessitatibus fugiat optio
								ducimus, ratione quam ea. Accusantium ad sunt
								maxime magnam deserunt odio, debitis cum
								expedita necessitatibus fugiat optio ducimus,
								ratione quam ea.
							</Text>
						</VStack>
						<VStack borderColor="brand.primary" borderWidth="5px">
							<Image
								src="/me.gif"
								width="2500px"
								height="1250px"
							/>
						</VStack>
					</HStack>
				</VStack>
			</ContainerInside>
		</Container>
	);
}
