import "antd/dist/reset.css";
import { Table, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import Axios from "axios";
import DentalWorkForm from "./DentalWorkForm";

// Define a map of status enum values to display names
const statusMap = {
  IN_PROGRESS: "In Progress",
  COMPLETED: "Completed",
};

const typeMap = {
    METAL_CERAMIC:"metal ceramic",
    VENEER:"veneer",
    ZIRCONIA:"zirconia",
    IMPLANT:"implant",
}
const colorMap= {
  A1: "a1",
  A2: "a2",
  A3: "a3",
  A35: "a3.5",
  A4: "a4",
  B1: "b1",
  B2: "b2",
  B3: "b3",
  C1: "c1",
  C2: "c2",
  C3: "c3",
  D2: "d2",
  D3: "d3",
  BL1: "bl1",
  BL2: "bl2",
  BL3: "bl3",
  BL4: "bl4",
}
export default function DentalWorks() {
  const [state, setstate] = useState([]);
  const [loading, setloading] = useState(true);
  const [showDentalWorkForm, setShowDentalWorkForm] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await Axios.get("http://localhost:8080/api/dental-works/all").then(
      (res) => {
        setloading(false);
        setstate(
          res.data.map((row) => ({
            key: row.id,
            Id: row.id,
            Patient: row.patient ? row.patient.name : "",
            Status: statusMap[row.status],
            Type: typeMap[row.type],
            Color: colorMap[row.color],
          }))
        );
      }
    );
  };
  const columns = [
    {
      key: "Id",
      title: "ID",
      dataIndex: "Id",
    },
    {
      key: "2",
      title: "Patient",
      dataIndex: "patient",
    },
    {
      key: "3",
      title: "Status",
      dataIndex: "status",
      render: (text) => statusMap[text],
    },
    {
      key: "4",
      title: "Type",
      dataIndex: "type",
      render: (text) => typeMap[text],
    },
    {
      key: "5",
      title: "Color",
      dataIndex: "color",
      render: (text) => colorMap[text],
    },
    {
      key: "6",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <EditOutlined />
            <DeleteOutlined />
          </>
        );
      },
    },
  ];
  const handleCreateDentalWork = async (values) => {
    try {
      await Axios.post("http://localhost:8080/api/dental-works", values);
      getData();
      setShowDentalWorkForm(false);
    } catch (err) {
      console.error(err);
    }
  };
  const onAddDentalWork = () => {
    setShowDentalWorkForm(true);
  };

  return (
    <div className="DentalWorks">
      {loading ? (
        "Loading"
      ) : (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Table
            columns={columns}
            dataSource={state}
            pagination={{ pageSize: 20 }}
            scroll={{ y: 240 }}
          />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button style={{ width: "150px" }} onClick={onAddDentalWork}>
              Add Dental Work
            </Button>
          </div>
          <DentalWorkForm
            visible={showDentalWorkForm}
            onCancel={() => setShowDentalWorkForm(false)}
            onCreate={handleCreateDentalWork}
          />
        </div>
      )}
    </div>
  );
}
