import React from "react";
import { Box, Button, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 3,
        boxShadow: 2,
      }}
    >
      <Typography variant="h6" color="textPrimary">
        Dashboard
      </Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button
          variant="outlined"
          sx={{
            "&:hover": {
              backgroundColor: "#F1F8FF",
              transform: "scale(1.05)",
              transition: "all 0.3s ease-in-out",
            },
          }}
        >
          Notificaciones
        </Button>
        <Button
          variant="outlined"
          sx={{
            "&:hover": {
              backgroundColor: "#F1F8FF",
              transform: "scale(1.05)",
              transition: "all 0.3s ease-in-out",
            },
          }}
        >
          Perfil
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;
