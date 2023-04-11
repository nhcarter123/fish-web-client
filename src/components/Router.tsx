import { createBrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";
import Gallery from "./Gallery";
import React from "react";
import Main from "./Main";

const router = createBrowserRouter([
  {
    path: "/fish-web-client/",
    element: <Main />,
  },
  {
    path: "/fish-web-client/user/:username",
    element: <Main />,
  },
]);

export default router;
