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
import LeaderBoardPage from "./pages/LiderBoardPage";
import { addPlayer } from "./data/playersData";
import { useEffect } from "react";

export interface UserStats {
  name: string;
  points: number;
  totalGames: number;
  losses: number;
}

function App() {
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
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    localStorage.removeItem("userStats");
    setName("");
    setPassword("");
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
        <Route path="/leaderboard" element={<LeaderBoardPage name={name} />} />
        <Route path="*" element={<h1>404: Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
