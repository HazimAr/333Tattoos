import { Heading, HStack, Image } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextChakraLink from "@components/nextChakraLink";

const headerOptions = [
	{
		title: "Home",
		href: "/",
	},
	{
		title: "Art Gallery",
		href: "/gallery",
	},
	{
		title: "About Me",
		href: "/about",
	},
];

// eslint-disable-next-line import/no-default-export
export default function Header(): JSX.Element {
	return (
		<Container>
			<ContainerInside>
				<HStack
					justify={{ base: "center", md: "space-between" }}
					flexDir={{ base: "column", md: "row" }}
				>
					<HStack align="center">
						<Image src="/logo.png" w="100px" />
						<Heading>333 Tattoos</Heading>
					</HStack>
					<HStack align="center" spacing={5}>
						{headerOptions.map(({ title, href }) => {
							return (
								<NextChakraLink
									key={title}
									href={href}
									_hover={{ textDecoration: "none" }}
								>
									<Heading size="lg">{title}</Heading>
								</NextChakraLink>
							);
						})}
					</HStack>
				</HStack>
			</ContainerInside>
		</Container>
	);
}
