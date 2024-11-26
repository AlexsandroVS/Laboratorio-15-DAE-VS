import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { FaHome, FaChartLine, FaUserAlt, FaCog } from "react-icons/fa";
import { RiGitRepositoryPrivateFill } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("token"); 
    navigate("/"); 
  };
  const handlePrivate = () => {
    navigate("/private");
  }
  return (
    <Box
      sx={{
        width: 240,
        height: "100vh",
        background: "linear-gradient(to right, #0A2540, #0d3b68)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 3,
      }}
    >
      <Box>
        <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 3 }}>
          Darkness App
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Button
            sx={{
              color: "white",
              "&:hover": {
                backgroundColor: "#1565C0",
                transform: "scale(1.05)",
                transition: "all 0.3s ease-in-out",
              },
            }}
            startIcon={<FaHome />}
          >
            Inicio
          </Button>
          <Button
            sx={{
              color: "white",
              "&:hover": {
                backgroundColor: "#1565C0",
                transform: "scale(1.05)",
                transition: "all 0.3s ease-in-out",
              },
            }}
            startIcon={<FaChartLine />}
          >
            Estadísticas
          </Button>
          <Button
            sx={{
              color: "white",
              "&:hover": {
                backgroundColor: "#1565C0",
                transform: "scale(1.05)",
                transition: "all 0.3s ease-in-out",
              },
            }}
            startIcon={<FaUserAlt />}
          >
            Perfil
          </Button>
          <Button
            sx={{
              color: "white",
              "&:hover": {
                backgroundColor: "#1565C0",
                transform: "scale(1.05)",
                transition: "all 0.3s ease-in-out",
              },
            }}
            startIcon={<FaCog />}
          >
            Configuración
          </Button>
          <Button
          onClick={handlePrivate}
            sx={{
              color: "white",
              "&:hover": {
                backgroundColor: "#1565C0",
                transform: "scale(1.05)",
                transition: "all 0.3s ease-in-out",
              },
            }}
            startIcon={<RiGitRepositoryPrivateFill />}
          >
            Privado
          </Button>
        </Box>
      </Box>
      <Button
        sx={{
          color: "white",
          marginTop: "auto",
          backgroundColor: "#06213d",
          "&:hover": {
            backgroundColor: "#0D47A1",
            transform: "scale(1.05)",
            transition: "all 0.3s ease-in-out",
          },
        }}
        startIcon={<FiLogOut />}
        onClick={handleLogout}
      >
        Cerrar sesión
      </Button>
    </Box>
  );
};

export default Sidebar;
