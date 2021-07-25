import {
	Box,
	Flex,
	Heading,
	Icon,
	Image,
	Link,
	Text,
	useToken,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import Wave from "react-wavify";

// eslint-disable-next-line import/no-default-export
export default function footer(): JSX.Element {
	const redPrimary = useToken("colors", "brand.secondary");
	return (
		<>
			<Box mt="80%" mb="-8px">
				<Wave
					fill={redPrimary}
					// paused
					options={{
						height: 120,
						amplitude: 9,
						speed: 0.3,
						points: 4,
					}}
				/>
			</Box>
			<Container bg="brand.secondary">
				<ContainerInside as="footer" justify="center" align="center">
					<Heading color="text.100" as="h1">
						Interested in my work?
					</Heading>
					<Heading
						my="15px"
						color="text.400"
						fontSize="lg"
						as="h2"
						fontWeight="normal"
					>
						I'm currently taking on new projects. Would you like to
						discuss yours?
					</Heading>
					<Box color="text.500">
						<Link href="tel:8592406617" isExternal>
							<Text fontSize="lg">+1 859-240-6617</Text>
						</Link>

						<Link href="mailto:devil@333tattoos.art" isExternal>
							<Text fontSize="lg">devil@333tattoos.art</Text>
						</Link>
					</Box>
					<Flex justify="center" align="center" mt="20px">
						<Flex justify="space-between" w="100%" maxW="50px">
							<Link
								href="https://twitter.com/333tattoos"
								isExternal
							>
								<Icon as={FaTwitter} />
							</Link>
							<Link
								href="https://www.instagram.com/333.tattoos"
								isExternal
							>
								<Icon as={FaInstagram} />
							</Link>
						</Flex>
					</Flex>
					<Flex justify="center">
						<Image
							src="/drawing/devil2.png"
							w="200px"
							h="260px"
							alt="devilish girl holding a red trident"
						/>
					</Flex>
				</ContainerInside>
			</Container>
		</>
	);
}
