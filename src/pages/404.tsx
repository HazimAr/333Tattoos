import {
	Link,
	Image,
	Center,
	Text,
	VStack,
	Heading,
	Button,
} from "@chakra-ui/react";

export default function FourOFour(): JSX.Element {
	return (
		<Center h="100vh" flexWrap="wrap-reverse">
			<VStack maxW="550px">
				<Heading>Oops! Looks like you found Hell</Heading>
				<Text fontSize="lg">
					The page you're looking for has fell down the depths of hell
					and can not be found
				</Text>

				<Button as={Link} href="/">
					Take Me Back
				</Button>
			</VStack>
			<Image
				w="300px"
				h="500px"
				src="/drawing/devil.png"
				alt="devil sitting on 8-ball"
			/>
		</Center>
	);
}
