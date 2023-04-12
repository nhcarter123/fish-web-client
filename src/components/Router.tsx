import { createBrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";
import Gallery from "./Gallery";
import React from "react";
import Main from "./Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "user/:username",
    element: <Main />,
  },
]);

export default router;
