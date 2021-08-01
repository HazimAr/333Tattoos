import {
	Box,
	Heading,
	HStack,
	Icon,
	Image,
	Link,
	Text,
	useToken,
	VStack,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import React from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import Wave from "react-wavify";

// eslint-disable-next-line import/no-default-export
export default function footer(): JSX.Element {
	const primary = useToken("colors", "brand.secondary");
	return (
		<Box as="footer">
			<Box mb="-8px">
				<Wave
					fill={primary}
					// paused
					options={{
						height: 120,
						amplitude: 9,
						speed: 0.5,
						points: 5,
					}}
				/>
			</Box>
			<Container bg="brand.secondary">
				<ContainerInside as="footer">
					<VStack>
						<VStack spacing={5}>
							<Heading as="h1">Interested in my work?</Heading>
							<Text
								color="text.400"
								fontSize="lg"
								as="h2"
								fontWeight="normal"
							>
								I'm currently taking on new projects. Would you
								like to discuss yours?
							</Text>
							<VStack color="text.500" spacing={0}>
								<Link href="tel:8592406617" isExternal>
									<Text fontSize="lg">+1 859-240-6617</Text>
								</Link>

								<Link
									href="mailto:devil@333tattoos.art"
									isExternal
								>
									<Text fontSize="lg">
										devil@333tattoos.art
									</Text>
								</Link>
							</VStack>

							<HStack>
								<Link
									href="https://twitter.com/333tattoos"
									isExternal
								>
									<Icon as={FaTwitter} boxSize="30px" />
								</Link>
								<Link
									href="https://www.instagram.com/333.tattoos"
									isExternal
								>
									<Icon as={FaInstagram} boxSize="30px" />
								</Link>
							</HStack>
						</VStack>

						<Image
							src="/drawing/devil2.png"
							w="200px"
							h="260px"
							alt="devilish girl holding a red trident"
						/>
					</VStack>
				</ContainerInside>
			</Container>
		</Box>
	);
}
