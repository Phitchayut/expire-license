import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Create from "./pages/Create.jsx";
import License from "./pages/License.jsx";
import View from "./pages/View.jsx";
import Update from "./pages/Update.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "license",
    element: <License />,
  },
  {
    path: "create",
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
