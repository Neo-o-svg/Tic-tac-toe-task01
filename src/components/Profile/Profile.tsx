import {
  Avatar,
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
} from "@mui/material";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import React from "react";

interface ProfileProps {
  avatarUrl: string;
  name: string;
  registrationDate: string;
  points: number;
  totalGames: number;
  losses: number;
}

interface StatRowProps {
  icon: React.ReactNode;
  label: string;
  value: number | string;
}

const StatRow = ({ icon, label, value }: StatRowProps) => (
  <Stack direction="row" alignItems="center" justifyContent="space-between">
    <Box display="flex" alignItems="center" gap={1}>
      {icon}
      <Typography color="var(--gray-400)">{label}</Typography>
    </Box>
    <Typography fontWeight="bold" color="var(--white)">
      {value}
    </Typography>
  </Stack>
);

export default function Profile({
  avatarUrl,
  name,
  registrationDate,
  points,
  totalGames,
  losses,
}: ProfileProps) {
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
              Registered: {registrationDate}
            </Typography>

            <Box mt={3} width="100%">
              <Stack spacing={2}>
                <StatRow
                  icon={
                    <EmojiEventsIcon sx={{ color: "var(--yellow-orange)" }} />
                  }
                  label="Points:"
                  value={points}
                />
                <StatRow
                  icon={<SportsEsportsIcon sx={{ color: "var(--blue)" }} />}
                  label="Total games:"
                  value={totalGames}
                />
                <StatRow
                  icon={
                    <SentimentVeryDissatisfiedIcon
                      sx={{ color: "var(--red)" }}
                    />
                  }
                  label="Losses:"
                  value={losses}
                />
              </Stack>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
