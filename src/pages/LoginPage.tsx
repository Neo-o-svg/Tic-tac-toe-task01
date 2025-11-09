import LoginForm from "../components/LoginForm/LoginForm";

interface LoginPageProps {
  name: string;
  setName: (value: string) => void;
}




export default function LoginPage({name, setName}: LoginPageProps) {
  return (
    <div
      className="login-page"
      style={{
        backgroundImage: "url('/img/login-bg.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
        height: "100vh",
        overflowX: "hidden",
      }}
    >
      <LoginForm name={name} setName={setName} />
    </div>
  );
}
