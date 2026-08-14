import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createHashRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/Error.jsx";
import IkonenPage from "./pages/Ikonen.jsx";
import InnovationPage from "./pages/Innovation.jsx";
import LandingPage from "./pages/Landing.jsx";
import PremiumPage from "./pages/Premium.jsx";



const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "ikonen", element: <IkonenPage /> },
      { path: "innovation", element: <InnovationPage /> },
      { path: "premium", element: <PremiumPage /> },
      { path: "schachbrett", element: <LandingPage /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]); 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
