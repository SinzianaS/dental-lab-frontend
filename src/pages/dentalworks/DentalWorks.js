import "antd/dist/reset.css";
import { Table, Button, Input } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import Axios from "axios";
import DentalWorkForm from "./DentalWorkForm";
const { Search } = Input;

// Define a map of status enum values to display names
const statusMap = {
  IN_PROGRESS: "In Progress",
  COMPLETED: "Completed",
};

const typeMap = {
  METAL_CERAMIC: "metal ceramic",
  VENEER: "veneer",
  ZIRCONIA: "zirconia",
  IMPLANT: "implant",
};
const colorMap = {
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
};
export default function DentalWorks() {
  const [state, setstate] = useState([]);
  const [loading, setloading] = useState(true);
  const [showDentalWorkForm, setShowDentalWorkForm] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [dentalWorkFormValues, setDentalWorkFormValues] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await Axios.get("http://localhost:8080/api/dental-works/all").then(
      (res) => {
        setloading(false);
        const mappedResponse = res.data.map((row) => ({
          key: row.id,
          id: row.id,
          patient: row.patient ? row.patient.name : "",
          status: statusMap[row.status],
          type: typeMap[row.type],
          color: colorMap[row.color],
        }));

        setstate(mappedResponse);
      }
    );
  };

  const handleDelete = async (id) => {
    try {
      await Axios.delete(`http://localhost:8080/api/dental-works/id/${id}`);
      getData();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = async (record) => {
    try {
      const response = await Axios.get(`http://localhost:8080/api/dental-works/id/${record.id}`);
      const dentalWorkToUpdate = response.data;
  
      setDentalWorkFormValues({
        id: dentalWorkToUpdate.id,
        patientId: dentalWorkToUpdate.patient ? dentalWorkToUpdate.patient.id : null,
        status: dentalWorkToUpdate.status,
        type: dentalWorkToUpdate.type,
        color: dentalWorkToUpdate.color,
        note: dentalWorkToUpdate.note,
      });
      setShowDentalWorkForm(true);
    } catch (err) {
      console.error(err);
    }
  };

  const columns = [
    {
      key: "Id",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Patient",
      dataIndex: "patient",
      sorter: (record1, record2) => {
        return record1.patient > record2.patient;
      },
    },
    {
      key: "3",
      title: "Status",
      dataIndex: "status",
      filters: Object.keys(statusMap).map((key) => ({
        text: statusMap[key],
        value: key,
      })),
      onFilter: (value, record) => record.status === value,
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
      sorter: (record1, record2) => {
        return record1.color > record2.color;
      },
    },
    {
      key: "6",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <Button icon={<EditOutlined />} onClick={() => handleEdit(record)}>
              Edit
            </Button>
            <Button
              icon={<DeleteOutlined />}
              onClick={() => handleDelete(record)}
            >
              Delete
            </Button>
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

  const { Search } = Input;
  const [searchText, setSearchText] = useState("");
  const handleSearch = (value) => {
    setSearchText(value.toLowerCase());
  };

  const filteredData = state.filter((row) =>
    row.patient.toLowerCase().includes(searchText)
  );

  return (
    <div className="DentalWorks">
      {loading ? (
        "Loading"
      ) : (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: 16,
            }}
          >
            <Search
              placeholder="Search by patient name"
              onChange={(e) => handleSearch(e.target.value)}
              style={{ width: 200 }}
              prefix={<SearchOutlined />}
            />
          </div>
          <Table
            columns={columns}
            dataSource={filteredData}
            pagination={{
              current: page,
              pageSize: pageSize,
              onChange: (page, pageSize) => {
                setPage(page);
                setPageSize(pageSize);
              },
            }}
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
            setFormValues={setDentalWorkFormValues}
          />
        </div>
      )}
    </div>
  );
}
