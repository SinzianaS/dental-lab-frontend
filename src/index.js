import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Patients from "./pages/patients/Patients";
import PatientExtraDetails from "./pages/patients/PatientExtraDetails";
import Authentication from "./pages/authentication/Authentication";


const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "patients",
    element: <Patients />,
  },
  {
    path: "patients/:id",
    element: <PatientExtraDetails />,
  },
  {
    path: "authentication",
    element: <Authentication />,
  },

]);

root.render(
  <React.StrictMode>
    <nav>
      <ul>
        <li>
          <a href="/patients">Patients</a>
        </li>
        <li>
          <a href="/authentication">Authentication</a>
        </li>
      </ul>
    </nav>
    <RouterProvider router={router}>
      <App></App>
    </RouterProvider>
  </React.StrictMode>
);
