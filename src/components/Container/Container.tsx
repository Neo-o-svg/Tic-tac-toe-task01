import { useEffect, useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import GamepadIcon from "@mui/icons-material/Gamepad";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import MenuIcon from "@mui/icons-material/Menu";

interface HeaderProps {
  name: string;
}

const Header = ({ name }: HeaderProps) => {
  const [elevated, setElevated] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const handleScroll = () => setElevated(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Play", icon: <GamepadIcon />, path: "/game" },
    { label: "Leaderboard", icon: <EmojiEventsIcon />, path: "/leaderboard" },
    { label: "Profile", icon: <AccountCircleIcon />, path: "/profile" },
    { label: "Exit", icon: <ExitToAppIcon />, path: "/login" },
  ];

  const handleNavigate = (path: string) => {
    navigate(path);
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          height: "8vh",
          justifyContent: "center",
          backgroundColor: "var(--black)",
          boxShadow: elevated ? "0px 2px 10px rgba(0, 0, 0, 0.5)" : "none",
          transition: "box-shadow .3s ease-in-out",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            px: 3,
          }}
        >
          <Typography variant="h6">{name}</Typography>

          {!isMobile ? (
            <Box
              sx={{
                display: "flex",
                gap: 3,
                "& button": {
                  transition: "opacity 0.2s ease-in-out",
                  "&:hover": { opacity: 0.8 },
                },
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  color="inherit"
                  startIcon={item.icon}
                  onClick={() => handleNavigate(item.path)}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          ) : (
            <IconButton
              color="inherit"
              edge="end"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          backgroundColor: "var(--gray-7)",
          color: "var(--white)",
          pt: 8,
        }}
      >
        <List>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton onClick={() => handleNavigate(item.path)}>
                <ListItemIcon sx={{ color: "var(--white)" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
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
