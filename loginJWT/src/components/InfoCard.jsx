import React from "react";
import { Box, Card, Typography } from "@mui/material";

const InfoCard = ({ title, value, icon }) => {
  return (
    <Card
      sx={{
        backgroundColor: "#F1F8FF",
        boxShadow: 3,
        borderRadius: 2,
        padding: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
        },
        flexBasis: "30%", 
      }}
    >
      <Box sx={{ fontSize: 40, color: "#1E88E5" }}>{icon}</Box>
      <Typography variant="h6" sx={{ fontWeight: "bold", marginTop: 2 }}>
        {title}
      </Typography>
      <Typography variant="h5" sx={{ marginTop: 1, fontWeight: "bold" }}>
        {value}
      </Typography>
    </Card>
  );
};

export default InfoCard;
