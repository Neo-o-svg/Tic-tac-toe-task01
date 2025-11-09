import type { Player } from "@/data/playersData";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from "@mui/material";

interface LeaderBoardProps {
  players: Player[];
}

export default function LeaderBoard({ players }: LeaderBoardProps) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{ backgroundColor: "var(--bg-color)" }}
    >
      <TableContainer
        component={Paper}
        sx={{
          maxWidth: 700,
          backgroundColor: "var(--gray-900)",
          color: "var(--white)",
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ p: 2, textAlign: "center", color: "var(--gold1)" }}
        >
          Leaderboard
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "var(--white)" }}>Player</TableCell>
              <TableCell sx={{ color: "var(--white)" }} align="right">
                Points
              </TableCell>
              <TableCell sx={{ color: "var(--white)" }} align="right">
                Total Games
              </TableCell>
              <TableCell sx={{ color: "var(--white)" }} align="right">
                Losses
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {players.map((player, index) => (
              <TableRow
                key={index}
                hover
                sx={{ "&:hover": { backgroundColor: "var(--gray-800)" } }}
              >
                <TableCell sx={{ color: "var(--white)" }}>
                  {player.name}
                </TableCell>
                <TableCell sx={{ color: "var(--white)" }} align="right">
                  {player.points}
                </TableCell>
                <TableCell sx={{ color: "var(--white)" }} align="right">
                  {player.totalGames}
                </TableCell>
                <TableCell sx={{ color: "var(--white)" }} align="right">
                  {player.losses}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
