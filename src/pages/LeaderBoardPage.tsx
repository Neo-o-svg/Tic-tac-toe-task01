import Container from "@/components/Container/Container";
import LeaderBoard from "@/components/LeaderBoard/LeaderBoard";
import { getPlayers } from "@/data/playersData";
import { useState, useEffect } from "react";

interface LeaderBoardPageProps {
  name: string;
}

export default function LeaderBoardPage({ name }: LeaderBoardPageProps) {
  const [players, setPlayers] = useState(getPlayers());

  useEffect(() => {
    const handleStorage = () => setPlayers(getPlayers());
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <Container name={name}>
      <LeaderBoard players={players} />
    </Container>
  );
}
