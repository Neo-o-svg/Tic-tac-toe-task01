import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  IconButton,
  InputLabel,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

interface LoginFormProps {
  name: string;
  setName: (value: string) => void;
}

export default function LoginForm({ name, setName }: LoginFormProps) {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setName(name);
    navigate("/game");
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={10} sx={{ marginTop: 20, padding: 2 }}>
        <Avatar
          sx={{
            mx: "auto",
            bgcolor: "secondary.main",
            textAlign: "center",
            mb: 1,
          }}
        >
          <LoginOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ textAlign: "center" }}>
          Sign In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            label="Enter username"
            fullWidth
            required
            autoFocus
            autoComplete="off"
            color="secondary"
            sx={{ mb: 2 }}
            onChange={(e) => setName(e.target.value)}
          />
          <FormControl variant="outlined" required fullWidth color="secondary">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              endAdornment={
                <>
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </>
              }
              label="Password"
            />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="secondary" />}
            label={"Remember me"}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            color="secondary"
            sx={{ mt: 1 }}
          >
            Sign in
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
