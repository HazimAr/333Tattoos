import { Box, Flex, Heading, Icon, Image, Link, Text } from "@chakra-ui/react";
import { FaInstagram, FaTwitter } from "react-icons/fa";

// eslint-disable-next-line import/no-default-export
export default function footer(): JSX.Element {
	return (
		<Flex as="footer" mt="100vh" justify="center" align="center">
			<Box>
				<Heading size="md" color="text.100">
					Interested in my work?
				</Heading>
				<Text my="15px" color="text.400">
					I'm currently taking on new projects. Would you like to
					discuss yours?
				</Text>
				<Box color="text.500">
					<Link href="tel:8592406617" isExternal>
						+1 859-240-6617
					</Link>
					<br />
					<Link href="mailto:devil@333tattoos.art" isExternal>
						devil@333tattoos.art
					</Link>
				</Box>
				<Flex justify="center" align="center" mt="20px">
					<Flex justify="space-between" w="100%" maxW="50px">
						<Link href="https://twitter.com/333tattoos" isExternal>
							<Icon as={FaTwitter} size="20px" />
						</Link>
						<Link
							href="https://www.instagram.com/333.tattoos"
							isExternal
						>
							<Icon as={FaInstagram} size="20px" />
						</Link>
					</Flex>
				</Flex>
				<Flex justify="center">
					<Image src="/drawing/devil2.png" w="200px" />
				</Flex>
			</Box>
		</Flex>
	);
}
