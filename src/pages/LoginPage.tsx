import LoginForm from "../components/LoginForm/LoginForm";

interface LoginPageProps {
  name: string;
  password: string;
  setName: (value: string) => void;
  setPassword: (value: string) => void;
}

export default function LoginPage({
  name,
  password,
  setName,
  setPassword,
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
      />
    </div>
  );
}
