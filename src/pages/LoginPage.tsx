import LoginForm from "../components/LoginForm/LoginForm";

interface LoginPageProps {
  name: string;
  setName: (value: string) => void;
}




export default function LoginPage({name, setName}: LoginPageProps) {
  return (
    <div
      className="login-page page-bg"
      style={{
        backgroundImage: "url('/img/login-bg.jpg')",
      }}
    >
      <LoginForm name={name} setName={setName} />
    </div>
  );
}
