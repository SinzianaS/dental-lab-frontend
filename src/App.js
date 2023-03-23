import "antd/dist/reset.css";
import React from "react";
import { Menu } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  SmileOutlined,
  IdcardOutlined,
  CrownOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import DentalWorks from "./pages/dentalworks/DentalWorks";
import Patients from "./pages/patients/Patients";
import Dentists from "./pages/dentists/Dentists";
import Authentication from "./pages/authentication/Authentication";
import DentalTechnicians from "./pages/dentaltechnicians/DentalTechnicians";
import HomePage from "./pages/home/HomePage"

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        height: "100vh",
      }}
    >
      <Header />
      <div style={{ display: "flex", flexDirection: "row", flex: 1 }}>
        <SideMenu />
        <Content />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
function Header() {
  return (
    <div
      style={{
        height: 60,
        backgroundColor: "lightskyblue",
        fontSize:"30px",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold",
      }}
    >
      Dentis
    </div>
  );
}

function Footer() {
  return (
    <div
      style={{
        height: 60,
        backgroundColor: "lightgrey",
        color: "darkgrey",
        display: "flex",
        justifyContent: "center",
        fontSize: "13px",
        alignItems: "center",
        fontWeight: "bold",
      }}
    >
      Sinziana 2023
    </div>
  );
}

function SideMenu() {
  const navigate = useNavigate();
  return (
    <Menu
      onClick={({ key }) => navigate(key)}
      defaultSelectedKeys={[window.location.pathname]}
      items={[
        { label: "Home", key: "/", icon: <HomeOutlined /> },
        { label: "Dentists", key: "/dentists", icon: <IdcardOutlined /> },
        {
          label: "Technicians",
          key: "/dentaltechnicians",
          icon: <TeamOutlined />,
        },
        { label: "Patients", key: "/patients", icon: <SmileOutlined /> },
        {
          label: "Dental works",
          key: "/dentalworks",
          icon: <CrownOutlined />,
          children: [
            { label: "Show all", key: "/dentalworks/alldentalworks" },
            { label: "Find by id", key: "/dentalworks/getdentalworkbyid" },
            {
              label: "Find by color",
              key: "/dentalworks/getdentalworkbycolor",
            },
            {
              label: "Find by status",
              key: "/dentalworks/getdentalworkbystatus",
            },
            { label: "Find by type", key: "/dentalworks/getdentalworkbytype" },
          ],
        },
        { label: "Login", key: "/authentication", icon: <UserOutlined /> },
      ]}
    ></Menu>
  );
}

function Home() {
  return <div>component</div>;
}

function Content() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>Home Page</div>}></Route>
        <Route path="/dentists" element={<Dentists />}></Route>
        <Route
          path="/dentaltechnicians"
          element={<DentalTechnicians/>}
        ></Route>
        <Route path="/patients" element={<Patients />}></Route>

        <Route path="/dentalworks/alldentalworks" element={<DentalWorks />} />
        <Route
          path="/getdentalworkbyid"
          element={<div>Dental work by id</div>}
        ></Route>
        <Route
          path="/getdentalworkbycolor"
          element={<div>Dental work by color</div>}
        ></Route>
        <Route
          path="/getdentalworkbystatus"
          element={<div>Dental work by status</div>}
        ></Route>
        <Route
          path="/getdentalworkbytype"
          element={<div>Dental work by type</div>}
        ></Route>

        <Route
          path="/authentication"
          element={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "50vh",
              }}
            >
              <Authentication />
            </div>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
