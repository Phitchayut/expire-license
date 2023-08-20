import { useState } from "react";
import "./App.css";
import { Button } from "@material-tailwind/react";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="container mx-auto">
      <Dashboard />
    </div>
  );
}

export default App;
