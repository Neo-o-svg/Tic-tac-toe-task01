import type { UserStats } from "@/App";
import Container from "@/components/Container/Container";
import Profile from "@/components/Profile/Profile";

interface ProfilePageProps {
  name: string;
  userStats: UserStats;
  onExit: () => void;
}

export default function ProfilePage({
  name,
  userStats,
  onExit,
}: ProfilePageProps) {
  return (
    <div
      className="profile-page page-bg"
      style={{
        backgroundImage: "url('/img/profile-bg.jpg')",
      }}
    >
      <Container name={name} onExit={onExit}>
        <Profile
          avatarUrl="/img/profile.jpg"
          name={name}
          userStats={userStats}
        />
      </Container>
    </div>
  );
}
