import "antd/dist/reset.css";
import { Table, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import Axios from "axios";

// Define a map of status enum values to display names
const statusMap = {
    "IN_PROGRESS": "In Progress",
    "COMPLETED": "Completed"
  };
export default function DentalWorks() {
  const [state, setstate] = useState([]);
  const [loading, setloading] = useState(true);
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
            Status:statusMap[row.status],
            Type: row.type,
            Color: row.color,
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
    },
    {
      key: "5",
      title: "Color",
      dataIndex: "color",
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
  const onAddDentalWork = () => {
    const randomNumber = parseInt(Math.random() * 1000);
    const newDentalWork = {
      id: randomNumber,
      name: "name" + randomNumber,
      age: randomNumber,
    };
    setstate((preState) => {
      return [...preState, newDentalWork];
    });
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
          <Button onClick={onAddDentalWork}>Add new Dental Work</Button>
        </div>
      )}
    </div>
  );
}
