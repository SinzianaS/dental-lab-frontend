import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  BrowserRouter,
  createBrowserRouter,
} from "react-router-dom";
import Patients  from "./pages/patients/Patients";
import PatientExtraDetails  from "./pages/patients/PatientExtraDetails";


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
    path: "patients/:patientId",
    element: <PatientExtraDetails />,
  },
]);

root.render(
  <BrowserRouter>
    <App></App>
  </BrowserRouter>

);
