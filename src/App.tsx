import React from "react";
import "./App.css";
import { RouterProvider } from "react-router";
import router from "./components/Router";
import { SnackbarProvider } from "./components/SnackbarProvider";
import { Box } from "@mui/material";

function App() {
  return (
    <SnackbarProvider>
      <Box sx={{ width: "100%", height: "100%" }}>
        <div className="ocean">
          <div className="bubble bubble--1"></div>
          <div className="bubble bubble--2"></div>
          <div className="bubble bubble--3"></div>
          <div className="bubble bubble--4"></div>
          <div className="bubble bubble--5"></div>
          <div className="bubble bubble--6"></div>
          <div className="bubble bubble--7"></div>
          <div className="bubble bubble--8"></div>
          <div className="bubble bubble--9"></div>
          <div className="bubble bubble--10"></div>
          <div className="bubble bubble--11"></div>
          <div className="bubble bubble--12"></div>
        </div>
        <RouterProvider router={router} />
      </Box>
    </SnackbarProvider>
  );
}

export default App;
