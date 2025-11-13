import type { UserStats } from "@/App";
import LoginForm from "../components/LoginForm/LoginForm";

interface LoginPageProps {
  name: string;
  password: string;
  setName: (value: string) => void;
  setPassword: (value: string) => void;
  setUserStats: (stats: UserStats) => void;
}

export default function LoginPage({
  name,
  password,
  setName,
  setPassword,
  setUserStats,
}: LoginPageProps) {
  return (
    <div
      className="login-page page-bg"
      style={{
        backgroundImage: "url('/img/login-bg.jpg')",
      }}
    >
      <LoginForm
        name={name}
        password={password}
        setName={setName}
        setPassword={setPassword}
        setUserStats={setUserStats}
      />
    </div>
  );
}
