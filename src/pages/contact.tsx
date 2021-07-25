import Container from "@components/container";
import ContainerInside from "@components/containerInside";

// eslint-disable-next-line import/no-default-export
export default function footer(): JSX.Element {
	return (
		<Container bg="brand.secondary">
			<ContainerInside></ContainerInside>
		</Container>
	);
}
