import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LicenseList from "./pages/license/LicenseList";
import Create from "./pages/license/license1/Create";
import License from "./pages/license/license1/License";
import View from "./pages/license/license1/View";
import Update from "./pages/license/license1/Update";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/licenselist",
    element: <LicenseList />,
  },
  {
    path: "/license1",
    element: <License />,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "view",
    element: <View />,
  },
  {
    path: "update",
    element: <Update />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
