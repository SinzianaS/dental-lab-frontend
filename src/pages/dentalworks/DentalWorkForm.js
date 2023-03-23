import { Form, Select, Button, Modal } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";

export default function DentalWorkForm({ visible , onCancel, onCreate }) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/patients");
        setPatients(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPatients();
  }, []);

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      setLoading(true);
      onCreate(values);
    } catch (err) {
      console.error(err);
    }
  };

  const handleCancel = () => {
    form.resetFields();
    onCancel();
  };

  return (
    <Modal open={visible} onCancel={handleCancel} footer={null}>
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          name="patient"
          label="patient"
          rules={[{ required: true, message: "Please select a patient!" }]}
        >
          <Select>
            {patients.map((patient) => (
              <Select.Option key={patient.id} value={patient.name}>{patient.name}</Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="status"
          label="status"
          rules={[{ required: true, message: "Please select a status!" }]}
        >
          <Select>
            <Select.Option value="IN_PROGRESS">In Progress</Select.Option>
            <Select.Option value="COMPLETED">Completed</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="type"
          label="type"
          rules={[{ required: true, message: "Please enter a type!" }]}
        >
          <Select>
            <Select.Option value="metal ceramic">metal ceramic</Select.Option>
            <Select.Option value="veneer">veneer</Select.Option>
            <Select.Option value="zirconia">zirconia</Select.Option>
            <Select.Option value="implant">implant</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="color"
          label="color"
          rules={[{ required: true, message: "Please enter a color!" }]}
        >
          <Select placeholder="Select a color">
            <Select.Option value="A1">A1</Select.Option>
            <Select.Option value="A2">A2</Select.Option>
            <Select.Option value="A3">A3</Select.Option>
            <Select.Option value="A3.5">A3.5</Select.Option>
            <Select.Option value="A4">A4</Select.Option>
            <Select.Option value="B1">B1</Select.Option>
            <Select.Option value="B2">B2</Select.Option>
            <Select.Option value="B3">B3</Select.Option>
            <Select.Option value="C1">C1</Select.Option>
            <Select.Option value="C2">C2</Select.Option>
            <Select.Option value="C3">C3</Select.Option>
            <Select.Option value="D2">D2</Select.Option>
            <Select.Option value="D3">D3</Select.Option>
            <Select.Option value="BL1">BL1</Select.Option>
            <Select.Option value="BL2">BL2</Select.Option>
            <Select.Option value="BL3">BL3</Select.Option>
            <Select.Option value="BL4">BL4</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary"
          htmlType="submit"
          >
            Add
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}
