import { Box, Flex, Heading, Text, Link, Image } from "@chakra-ui/react";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import { motion, isValidMotionProp } from "framer-motion";

const MotionFaTwitter = motion(FaTwitter);
const MotionFaInstagram = motion(FaInstagram);

// eslint-disable-next-line import/no-default-export
export default function footer(): JSX.Element {
	return (
		<Box as="footer" mt="100vh">
			<Heading size="md" color="text.100">
				Interested in my work?
			</Heading>
			<Text my="15px" color="text.400">
				I'm currently taking on new projects. Would you like to discuss
				yours?
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
						<MotionFaTwitter
							size="20px"
							whileTap={{ background: "red" }}
						/>
					</Link>
					<Link
						href="https://www.instagram.com/333.tattoos"
						isExternal
					>
						<MotionFaInstagram
							size="20px"
							whileTap={{ background: "red" }}
						/>
					</Link>
				</Flex>
			</Flex>
			<Flex justify="center">
				<Image src="/drawing/footer.png" w="500px" />
			</Flex>
		</Box>
	);
}
