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
					<NextChakraLink href="/">
						<HStack align="center">
							<Image src="/logo.png" w="100px" />
							<Heading
								transition="ease .2s"
								_hover={{ color: "brand.primary" }}
							>
								333 Tattoos
							</Heading>
						</HStack>
					</NextChakraLink>
					<HStack align="center" spacing={5}>
						{headerOptions.map(({ title, href }) => {
							return (
								<NextChakraLink key={title} href={href}>
									<Heading
										fontSize="25px"
										transition="ease .2s"
										_hover={{ color: "brand.primary" }}
									>
										{title}
									</Heading>
								</NextChakraLink>
							);
						})}
					</HStack>
				</HStack>
			</ContainerInside>
		</Container>
	);
}
