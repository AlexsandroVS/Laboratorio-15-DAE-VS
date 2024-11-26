import React from "react";
import { Box, Container } from "@mui/material";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import InfoCard from "./InfoCard";
import { FaChartLine, FaUserAlt, FaHome } from "react-icons/fa";

const Dashboard = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, padding: 3 }}>
        <Navbar />
        <Container sx={{ marginTop: 4 }}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 3,
              justifyContent: "space-between",
            }}
          >
            <InfoCard title="Ventas del mes" value="$1,200" icon={<FaChartLine />} />
            <InfoCard title="Clientes atendidos" value="1,450" icon={<FaUserAlt />} />
            <InfoCard title="Productos en inventario" value="120" icon={<FaHome />} />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;
