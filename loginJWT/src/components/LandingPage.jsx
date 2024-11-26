import React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { IoIosSpeedometer, IoMdLock, IoMdPeople } from "react-icons/io";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Navbar */}
      <AppBar position="static" sx={{ backgroundColor: "#113E6E" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, color: "#FFFFFF" }}>
            Mi Aplicación
          </Typography>
          <Button
            sx={{
              color: "#D1E3F8",
              "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
            }}
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
          <Button
            sx={{
              color: "#D1E3F8",
              "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
            }}
            onClick={() => navigate("/register")}
          >
            Registro
          </Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
          background: "linear-gradient(to right, #0A2540, #1E88E5)",
          color: "white",
          textAlign: "center",
          flexDirection: "column",
          px: 2,
        }}
      >
        <Typography variant="h2" gutterBottom>
          Bienvenido a Nuestra Aplicación
        </Typography>
        <Typography variant="h6" gutterBottom>
          La mejor herramienta para la gestión de tu negocio, fácil y eficiente.
        </Typography>
        <Box mt={4}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#1E88E5",
              "&:hover": { backgroundColor: "#1565C0" },
              mx: 2,
              color: "#FFFFFF",
            }}
            size="large"
            onClick={() => navigate("/login")}
          >
            Iniciar Sesión
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderColor: "#64B5F6",
              color: "#64B5F6",
              "&:hover": {
                borderColor: "#1E88E5",
                color: "#1E88E5",
              },
            }}
            size="large"
            onClick={() => navigate("/register")}
          >
            Registrarse
          </Button>
        </Box>
      </Box>

      {/* Features Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          ¿Por qué elegirnos?
        </Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          justifyContent="center"
          alignItems="center"
        >
          <Feature
            icon={<IoIosSpeedometer className="text-5xl" />}
            title="Rápido"
            description="Procesa tus datos de manera eficiente con nuestras herramientas optimizadas."
          />
          <Feature
            icon={<IoMdLock className="text-5xl" />}
            title="Seguro"
            description="Garantizamos la protección de tus datos con tecnología avanzada."
          />
          <Feature
            icon={<IoMdPeople className="text-5xl" />}
            title="Intuitivo"
            description="Diseñado para ser fácil de usar para cualquier tipo de usuario."
          />
        </Stack>
      </Container>

      {/* Footer */}
      <Box
        sx={{
          backgroundColor: "#28527A",
          color: "white",
          py: 4,
          textAlign: "center",
        }}
      >
        <Typography variant="body1">
          &copy; {new Date().getFullYear()} Darkness. Todos los
          derechos reservados.
        </Typography>
      </Box>
    </>
  );
};

// Reusable Feature Component
const Feature = ({ icon, title, description }) => (
  <Stack
    alignItems="center"
    spacing={2}
    textAlign="center"
    sx={{
      "& .text-5xl": {
        color: "#64B5F6",
      },
    }}
  >
    {icon}
    <Typography variant="h5" gutterBottom>
      {title}
    </Typography>
    <Typography sx={{ color: "#0571eb" }}>{description}</Typography>
  </Stack>
);

export default LandingPage;
