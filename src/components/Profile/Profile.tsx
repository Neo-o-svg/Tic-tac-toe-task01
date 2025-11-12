import type { UserStats } from "@/App";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
} from "@mui/material";

interface ProfileProps {
  avatarUrl: string;
  name: string;
  userStats: UserStats;
}

export default function Profile({ avatarUrl, name, userStats }: ProfileProps) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Card
        sx={{
          width: 400,
          p: 3,
          borderRadius: 3,
          backgroundColor: "var(--gray-900)",
          boxShadow: "0 4px 20px var(--dark-stroke)",
          color: "var(--white)",
        }}
      >
        <CardContent>
          <Stack alignItems="center" spacing={2}>
            <Avatar
              src={avatarUrl}
              alt={name}
              sx={{
                width: 100,
                height: 100,
                border: "3px solid var(--gray-600)",
              }}
            />

            <Typography variant="h5" fontWeight="bold" color="var(--gold1)">
              {name}
            </Typography>

            <Typography variant="body2" color="var(--gray-600)">
              Hello new player, have a nice game here !!!
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
