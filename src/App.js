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

function App() {
  const navigate = useNavigate();
  return (
    <div  style={{ display: "flex", flexDirection: "column", flex: 1, height:"100vh"}}>
      <Header />
      <div style={{ display: "flex", flexDirection: "row", flex: 1}}>
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
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold",
      }}
    >
      Header
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
        alignItems: "center",
        fontWeight: "bold",
      }}
    >
      Footer
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
          { label: "Dentists", key: "/dentists", icon: <IdcardOutlined />},
          {label: "Technicians", key: "/dentaltechnicians", icon: <TeamOutlined />},
          { label: "Patients", key: "/patients", icon: <SmileOutlined />},
          {label: "Dental works", key: "/dentalworks", icon: <CrownOutlined />,
          children:[
            {label: "Show all", key: "/dentalworks/alldentalworks"},
            {label: "Find by id", key: "/dentalworks/getdentalworkbyid"},
            {label: "Find by color", key: "/dentalworks/getdentalworkbycolor"},
            {label: "Find by status", key: "/dentalworks/getdentalworkbystatus"},
            {label: "Find by type", key: "/dentalworks/getdentalworkbytype"}
            ]},
          { label: "Login", key: "/authentication", icon: <UserOutlined /> },
        ]}
      ></Menu>
  );
}
function Home(){
return <div> component</div>
}

function Content() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dentists" element={<div>Dentists</div>}></Route>
        <Route path="/dentaltechnicians" element={<div>Dental technicians</div>}></Route>
        <Route path="/patients" element={<div>Patients</div>}></Route>

        <Route path="/dentalworks/alldentalworks" element={<DentalWorks />} />
        <Route path="/getdentalworkbyid" element={<div>Dental work by id</div>}></Route>
        <Route path="/getdentalworkbycolor" element={<div>Dental work by color</div>}></Route>
        <Route path="/getdentalworkbystatus" element={<div>Dental work by status</div>}></Route>
        <Route path="/getdentalworkbytype" element={<div>Dental work by type</div>}></Route>

        <Route path="/authentication" element={<div>Login</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
