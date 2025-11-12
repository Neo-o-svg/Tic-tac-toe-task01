import type { UserStats } from "@/App";
import Container from "@/components/Container/Container";
import Game from "@/components/Game/Game";

interface GamePageProps {
  name: string;
  userStats: UserStats;
  setUserStats: (stats: UserStats) => void;
  onExit: () => void;
}

export default function GamePage({
  name,
  userStats,
  setUserStats,
  onExit,
}: GamePageProps) {
  return (
    <Container name={name} onExit={onExit}>
      <Game userStats={userStats} setUserStats={setUserStats} />
    </Container>
  );
}
