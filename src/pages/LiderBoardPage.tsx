import Container from "@/components/Container/Container";
import LeaderBoard from "@/components/LeaderBoard/LeaderBoard";
import { players } from "@/data/playersData";

interface LeaderBoardPageProps {
  name: string;
}

export default function LeaderBoardPage({ name }: LeaderBoardPageProps) {
  return (
    <Container name={name}>
      <LeaderBoard players={players} />
    </Container>
  );
}
