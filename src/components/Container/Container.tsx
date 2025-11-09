import { useEffect, useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import GamepadIcon from "@mui/icons-material/Gamepad";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

interface HeaderProps {
  name: string;
}

const Header = ({ name }: HeaderProps) => {
  const [elevated, setElevated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setElevated(true);
      } else {
        setElevated(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          height: "8vh",
          justifyContent: "center",
          backgroundColor: "black",
          boxShadow: elevated ? "0px 2px 10px rgba(0, 0, 0, 0.5)" : "none",
          transition: "box-shadow .3s ease-in-out",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
          <Typography variant="h6">{name}</Typography>
          <Box
            sx={{
              display: "flex",
              gap: 3,
              "& button": {
                transition: "opacity 0.2s ease-in-out",
                "&:hover": {
                  opacity: 0.8,
                },
              },
            }}
          >
            <Button
              color="inherit"
              startIcon={<GamepadIcon />}
              onClick={() => navigate("/game")}
            >
              Play
            </Button>
            <Button
              color="inherit"
              startIcon={<EmojiEventsIcon />}
              onClick={() => navigate("/liderboard")}
            >
              Leaderboard
            </Button>
            <Button
              color="inherit"
              startIcon={<AccountCircleIcon />}
              onClick={() => navigate("/profile")}
            >
              Profile
            </Button>
            <Button color="inherit" onClick={() => navigate("/login")}>
              Exit
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

interface ContainerProps {
  name: string;
  children?: ReactNode;
}

export default function Container({ name, children }: ContainerProps) {
  return (
    <div className="wrapper">
      <Header name={name} />
      <main>{children}</main>
    </div>
  );
}
