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

function App() {
  const [name, setName] = usePersistedState<string>("username", "");
  const [password, setPassword] = usePersistedState<string>("password", "");

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
            />
          }
        />
        <Route path="/game" element={<GamePage name={name} />} />
        <Route path="/profile" element={<ProfilePage name={name} />} />
        <Route path="/leaderboard" element={<LeaderBoardPage name={name} />} />
        <Route path="*" element={<h1>404: Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
