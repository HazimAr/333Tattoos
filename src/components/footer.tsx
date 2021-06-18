import { Box, Flex, Heading, Text, Link } from "@chakra-ui/react";
import { FaTwitter, FaInstagram } from "react-icons/fa";

// eslint-disable-next-line import/no-default-export
export default function footer(): JSX.Element {
	return (
		<Box as="footer" py="20px">
			<Heading size="md" color="text.100">
				Interested in my work?
			</Heading>
			<Text my="15px" color="text.400">
				I'm currently taking on new projects. Would you like to discuss
				yours?
			</Text>
			<Box color="text.500">
				<Text>+1 342-5461-6487</Text>
				<Text>devil@333tattoos.art</Text>
			</Box>
			<Flex justify="center" align="center" mt="20px">
				<Flex justify="space-between" w="100%" maxW="50px">
					<Link href="https://twitter.com/333tattoos" isExternal>
						<FaTwitter size="20px" />
					</Link>
					<Link
						href="https://www.instagram.com/333.tattoos"
						isExternal
					>
						<FaInstagram size="20px" />
					</Link>
				</Flex>
			</Flex>

			{/* Add fire / hell here */}
		</Box>
	);
}
