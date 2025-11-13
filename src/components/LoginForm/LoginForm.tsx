import {
  Avatar,
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
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
  password: string;
  setName: (value: string) => void;
  setPassword: (value: string) => void;
}

export default function LoginForm({
  name,
  password,
  setName,
  setPassword,
}: LoginFormProps) {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({
    name: false,
    password: false,
  });

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

    const nameError = name.trim().length < 5;
    const passwordError = password.trim().length < 5;

    setErrors({ name: nameError, password: passwordError });

    if (!nameError && !passwordError) {
      setName(name);
      setPassword(password);
      navigate("/game");
    }
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
        <Typography
          variant="caption"
          gutterBottom
          sx={{
            display: "block",
            color: "var(--gray-800)",
            fontWeight: "300",
            fontStyle: "italic",
            mt: 2,
          }}
        >
          * max length: 15 (for all inputs)
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            label="Enter username"
            fullWidth
            required
            autoFocus
            autoComplete="off"
            value={name}
            error={errors.name}
            helperText={
              errors.name
                ? name.trim().length < 5
                  ? "Username must be at least 5 characters long."
                  : "This username is not allowed."
                : ""
            }
            color="secondary"
            sx={{ mb: 2 }}
            slotProps={{ htmlInput: { maxLength: 15 } }}
            onChange={(e) => {
              const value = e.target.value.trim();
              setName(value);

              const tooShort = value.length < 5;
              const isAdminVariant = value
                .toLocaleLowerCase()
                .includes("admin");

              setErrors((prev) => ({
                ...prev,
                name: tooShort || isAdminVariant,
              }));
            }}
          />
          <FormControl
            variant="outlined"
            required
            fullWidth
            color="secondary"
            error={errors.password}
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              value={password}
              inputProps={{
                maxLength: 15,
              }}
              onChange={(e) => {
                setPassword(e.target.value);
                if (e.target.value.trim().length >= 5) {
                  setErrors((prev) => ({ ...prev, password: false }));
                }
              }}
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
            <FormHelperText>
              {errors.password
                ? "Password must be at least 5 characters long."
                : ""}
            </FormHelperText>
          </FormControl>
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
