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
          registrationDate="2025-11-09"
          points={1200}
          totalGames={87}
          losses={15}
        />
      </Container>
    </div>
  );
}
