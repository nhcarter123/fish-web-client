import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Main from "./Main";
import Leaderboard from "./Leaderboard";
import Shop from "./shop/Shop";

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
  {
    path: "/shop/:username",
    element: <Shop />,
  },
]);

export default router;
