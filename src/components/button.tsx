/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-default-export */
import { Box } from "@chakra-ui/react";

export default function Button(props: any): JSX.Element {
	return (
		<Box
			px={4}
			py={2}
			{...props}
			as="button"
			// lineHeight="1.2"
			transition="all 0.2s ease"
			borderRadius="16px"
			fontSize="16px"
			fontWeight="semibold"
			bg="linear-gradient(90deg, #b71c1c 0%, #1cb7b7 100%)"
			_hover={{ transform: "scale(0.95)", boxShadow: "lg" }}
			_active={{
				transform: "scale(0.90)",
			}}
			boxShadow="lg"
		>
			{props.children}
		</Box>
	);
}
