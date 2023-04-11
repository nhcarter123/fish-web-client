import React from "react";
import "./App.css";
import { RouterProvider } from "react-router";
import router from "./components/Router";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
