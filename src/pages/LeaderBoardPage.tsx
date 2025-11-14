import Container from "@/components/Container/Container";
import LeaderBoard from "@/components/LeaderBoard/LeaderBoard";
import type { Player } from "@/data/playersData";

interface LeaderBoardPageProps {
  name: string;
  players: Player[];
}

export default function LeaderBoardPage({ name, players }: LeaderBoardPageProps) {

  return (
    <Container name={name}>
      <LeaderBoard players={players} />
    </Container>
  );
}
