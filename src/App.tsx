import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { usePersistedState } from "./hooks/usePersistedState";
import LoginPage from "./pages/LoginPage";
import GamePage from "./pages/GamePage";
import ProfilePage from "./pages/ProfilePage";
import LeaderBoardPage from "./pages/LeaderBoardPage";
import { useEffect, useState } from "react";
import { defaultPlayers } from "./data/playersData";
import { ensureStorageInitialized } from "./utils/storage";

export interface Player {
  name: string;
  points: number;
  totalGames: number;
  losses: number;
}

export interface UserStats {
  name: string;
  points: number;
  totalGames: number;
  losses: number;
}

function App() {
  const [players, setPlayers] = useState<Player[]>(defaultPlayers);

  function addPlayer(player: Player) {
    let copy_players = [...players];
    const index = copy_players.findIndex((p) => p.name === player.name);
    if (index >= 0) {
      copy_players[index] = player;
    } else {
      copy_players.push(player);
    }
    copy_players.sort((a, b) => b.points - a.points);
    setPlayers(copy_players);
  }

  function removePlayer(name: string) {
    let copy_players = [...players];
    const index = copy_players.findIndex((p) => p.name === name);
    if (index !== -1) {
      copy_players.splice(index, 1);
    }
    setPlayers(copy_players);
  }

  const [name, setName] = usePersistedState<string>("username", "");
  const [password, setPassword] = usePersistedState<string>("password", "");
  const [userStats, setUserStats] = usePersistedState<UserStats>("userStats", {
    name: name || "",
    points: 0,
    totalGames: 0,
    losses: 0,
  });

  useEffect(() => {
    if (userStats.name) {
      addPlayer(userStats);
    }
  }, [userStats]);

  const handleExit = () => {
    if (userStats.name) {
      removePlayer(userStats.name);
    }

    localStorage.clear();

    localStorage.removeItem("username");
    localStorage.removeItem("password");
    localStorage.removeItem("userStats");

    setName("");
    setPassword("");

    setUserStats({
      name: "",
      points: 0,
      totalGames: 0,
      losses: 0,
    });

    setPlayers(defaultPlayers);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route
          path="/login"
          element={
            <LoginPage
              name={name}
              password={password}
              setName={setName}
              setPassword={setPassword}
              userStats={userStats}
              setUserStats={setUserStats}
            />
          }
        />
        <Route
          path="/game"
          element={
            <GamePage
              name={name}
              onExit={handleExit}
              userStats={userStats}
              setUserStats={setUserStats}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <ProfilePage
              name={name}
              onExit={handleExit}
              userStats={userStats}
            />
          }
        />
        <Route
          path="/leaderboard"
          element={<LeaderBoardPage name={name} players={players} />}
        />
        <Route path="*" element={<h1>404: Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
