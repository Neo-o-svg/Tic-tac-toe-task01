import Container from "@/components/Container/Container";
import Game from "@/components/Game/Game";

interface GameProps {
  name: string;
}

export default function GamePage({ name }: GameProps) {
  return (
    <Container name={name}>
      <Game />
    </Container>
  );
}
