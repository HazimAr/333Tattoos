import {
	Center,
	Grid,
	GridItem,
	Heading,
	Image,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalOverlay,
	useDisclosure,
	VStack,
} from "@chakra-ui/react";
import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import Head from "next/head";
import { useState } from "react";
export default function Gallery(): JSX.Element {
	// console.log(__dirname);
	const pictures = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
		21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
		39, 40,
	];
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [image, setImage] = useState();
	return (
		<>
			<Head>
				<title>333 Tattoos | Gallery</title>
			</Head>
			<Container>
				<ContainerInside>
					<VStack>
						<Heading>Tattoos</Heading>
						<DrawingGrid>
							{pictures.map((picture) => {
								return (
									<DrawingImage
										key={`tattoo${picture}.jpg`}
										name={`tattoo${picture}.jpg`}
										src="/art/tattoos/"
									/>
								);
							})}
						</DrawingGrid>
						<Heading>Drawings</Heading>
						<DrawingGrid>
							{pictures.map((picture) => {
								return (
									<DrawingImage
										key={`drawing${picture}.jpg`}
										name={`drawing${picture}.jpg`}
										src="/art/drawings/"
									/>
								);
							})}
						</DrawingGrid>
					</VStack>
				</ContainerInside>
			</Container>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalCloseButton />
					<ModalBody>
						<Image src="" />
					</ModalBody>

					<ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={onClose}>
							Close
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}

function DrawingImage({ name, src }: { name: string; src: string }) {
	return (
		<GridItem>
			<Center h="100%">
				<Image
					src={`${src}${name}`}
					transition="ease .2s"
					_hover={{
						transform: "scale(0.9)",
						cursor: "pointer",
					}}
					rounded={5}
					maxW="230px"
					maxH="300px"
				/>
			</Center>
		</GridItem>
	);
}

function DrawingGrid({ children }: { children: any }) {
	return (
		<Grid
			templateColumns={{
				base: "repeat(1, 1fr)",
				sm: "repeat(2, 1fr)",
				md: "repeat(3, 1fr)",
				lg: "repeat(4, 1fr)",
				xl: "repeat(5, 1fr)",
			}}
			gap={6}
		>
			{children}
		</Grid>
	);
}
