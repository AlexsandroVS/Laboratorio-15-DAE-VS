import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, TextField, Typography, Stack } from "@mui/material";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/register/", {
        username,
        email,
        password,
      });
      if (response.status === 201) {
        alert("Usuario registrado exitosamente");
        navigate("/login");
      }
    } catch (err) {
      setError("Error al registrar el usuario. Intenta de nuevo.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "linear-gradient(to right, #0A2540, #1E88E5)",
      }}
    >
      <Container maxWidth="xs">
        <Box
          sx={{
            backgroundColor: "#FFFFFF",
            padding: 4,
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography variant="h4" align="center" sx={{ fontWeight: "bold", color: "#113E6E" }}>
            Registro de Usuario
          </Typography>

          <form onSubmit={handleSubmit}>
            <Stack spacing={2} mt={2}>
              <TextField
                label="Nombre de Usuario"
                variant="outlined"
                fullWidth
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                sx={{
                  "& .MuiInputBase-root": {
                    backgroundColor: "#F1F8FF",
                  },
                }}
              />

              <TextField
                label="Correo Electrónico"
                variant="outlined"
                type="email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                sx={{
                  "& .MuiInputBase-root": {
                    backgroundColor: "#F1F8FF",
                  },
                }}
              />

              <TextField
                label="Contraseña"
                variant="outlined"
                type="password"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                sx={{
                  "& .MuiInputBase-root": {
                    backgroundColor: "#F1F8FF",
                  },
                }}
              />

              {error && (
                <Typography color="error" variant="body2" align="center">
                  {error}
                </Typography>
              )}

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: "#1E88E5",
                  "&:hover": {
                    backgroundColor: "#1565C0",
                  },
                  padding: 1.5,
                  fontWeight: "bold",
                }}
              >
                Registrar
              </Button>
            </Stack>
          </form>

          <Stack direction="row" justifyContent="center" mt={2}>
            <Typography variant="body2" color="textSecondary">
              ¿Ya tienes una cuenta?{" "}
              <a href="/login" style={{ color: "#1E88E5", textDecoration: "none" }}>
                Inicia sesión aquí
              </a>
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Register;
