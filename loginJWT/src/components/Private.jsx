import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Private = () => {
  const navigate = useNavigate();
  const [fact, setFact] = useState("");

  const randomFact = () => {
    const facts = [
      "El término 'hacker' originalmente se refería a personas que encontraban formas creativas de resolver problemas con computadoras.",
      "El hackeo más grande de la historia ocurrió en 2013, cuando 3 mil millones de cuentas de Yahoo fueron comprometidas.",
      "En 1988, el 'Morris Worm' fue uno de los primeros ciberataques a gran escala que paralizó el Internet temprano.",
      "El hacking ético es una profesión legítima; los hackers éticos ayudan a las empresas a proteger sus sistemas.",
      "La contraseña más común utilizada es '123456', lo que facilita el trabajo a los hackers malintencionados.",
      "Kevin Mitnick, un famoso hacker, fue arrestado por infiltrarse en sistemas de grandes empresas como IBM y Nokia.",
      "El 'phishing' es uno de los métodos más comunes usados por hackers para robar información personal.",
      "Hackear Wi-Fi es más fácil si la contraseña es corta o común.",
      "El grupo Anonymous es conocido por realizar hackeos en protesta contra corporaciones y gobiernos.",
      "Los hackers de sombrero blanco ayudan a mejorar la ciberseguridad global.",
      "El término 'script kiddie' se usa para referirse a hackers principiantes que usan herramientas creadas por otros.",
      "En 2010, un virus llamado Stuxnet fue usado para atacar instalaciones nucleares en Irán.",
      "El hacking móvil está creciendo debido al aumento de las aplicaciones con vulnerabilidades.",
      "Muchas filtraciones de datos ocurren debido a errores humanos, como usar contraseñas débiles.",
      "Hackear cámaras de seguridad es una de las vulnerabilidades más explotadas por los cibercriminales.",
    ];
    const randomIndex = Math.floor(Math.random() * facts.length);
    setFact(facts[randomIndex]);
  };

  const handleLogout = () => {
    console.log("Sesión cerrada");  
    localStorage.removeItem("token"); 
    navigate("/"); 
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        backgroundColor: "#121212",
        padding: 2,
      }}
    >
      <Button
        onClick={handleLogout}
        variant="contained"
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
          backgroundColor: "#d32f2f",
          "&:hover": {
            backgroundColor: "#b71c1c",
          },
        }}
      >
        Cerrar sesión
      </Button>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Box
          sx={{
            padding: 4,
            maxWidth: 800,
            margin: "0 auto",
            backgroundColor: "#0d1117",
            color: "#c9d1d9",
            borderRadius: 2,
            boxShadow: 3,
            textAlign: "center",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 2 }}>
            Información sobre Hacking
          </Typography>
          <Typography variant="h6" sx={{ marginBottom: 3 }}>
            Descubre un dato interesante sobre el mundo del hacking:
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontStyle: "italic",
              marginBottom: 3,
              border: "1px solid #58a6ff",
              padding: 2,
              borderRadius: 1,
            }}
          >
            {fact || "Presiona el botón para obtener un dato."}
          </Typography>
          <Button
            onClick={randomFact}
            variant="contained"
            sx={{
              backgroundColor: "#58a6ff",
              "&:hover": {
                backgroundColor: "#1f6feb",
                transform: "scale(1.05)",
                transition: "all 0.3s ease-in-out",
              },
            }}
          >
            Obtener otro dato sobre hacking
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Private;
