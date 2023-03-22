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

function App() {
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Menu
        onClick={({ key }) => {
           navigate(key);
        }}
        items={[
          { label: "Home", key: "/", icon: <HomeOutlined /> },
          { label: "Dentists", key: "/dentists", icon: <IdcardOutlined /> },
          { label: "Technicians", key: "/dentaltechnicians", icon: <TeamOutlined />},
          { label: "Patients", key: "/patients", icon: <SmileOutlined /> },
          { label: "Dental works", key: "/dentalworks", icon: <CrownOutlined />},
          { label: "Login", key: "/authentication", icon: <UserOutlined /> },
        ]}
      ></Menu>
      <Content />
    </div>
  );
}
function Content() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>Home</div>}></Route>
        <Route path="/dentists" element={<div>Dentists</div>}></Route>
        <Route path="/dentaltechnicians" element={<div>Dental technicians</div>}></Route>
        <Route path="/patients" element={<div>Patients</div>}></Route>
        <Route path="/dentalworks" element={<div>Dental works</div>}></Route>
        <Route path="/authentication" element={<div>Login</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
