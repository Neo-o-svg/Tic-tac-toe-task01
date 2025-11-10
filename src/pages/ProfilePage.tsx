import Container from "@/components/Container/Container";
import Profile from "@/components/Profile/Profile";

interface ProfilePageProps {
  name: string;
}

export default function ProfilePage({ name }: ProfilePageProps) {
  return (
    <div
      className="profile-page page-bg"
      style={{
        backgroundImage: "url('/img/profile-bg.jpg')",
      }}
    >
      <Container name={name}>
        <Profile
          avatarUrl="/img/profile.jpg"
          name={name}
        />
      </Container>
    </div>
  );
}
