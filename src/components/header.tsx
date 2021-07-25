import Container from "@components/container";
import ContainerInside from "@components/containerInside";

// eslint-disable-next-line import/no-default-export
export default function Header(): JSX.Element {
	return (
		<Container>
			<ContainerInside></ContainerInside>
		</Container>
	);
}
