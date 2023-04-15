import { createBrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";
import Gallery from "./Gallery";
import React from "react";
import Main from "./Main";
import Leaderboard from "./Leaderboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "user/:username",
    element: <Main />,
  },
  {
    path: "/leaderboard",
    element: <Leaderboard />,
  },
]);

export default router;
