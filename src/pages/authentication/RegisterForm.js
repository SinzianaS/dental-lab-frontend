import { Form, Input } from "antd";
import RegisterButton from "./RegisterButton";
import axios from "axios";

export default function RegisterForm(props) {
  const [form] = Form.useForm();
  const handleRegister = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/signup",
        values
      );
      console.log("Register response:", response.data);
      localStorage.setItem("accessToken", response.data.accessToken);
      window.location.href = "/";
    } catch (error) {
      console.error("Register error:", error);
    }
  };
  return (
    <div style={{ width: 400, margin: "0 auto" }}>
      <Form form={form} onFinish={handleRegister}>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true }]}
        >
          <Input style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true }]}
        >
          <Input.Password style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, type: "email" }]}
        >
          <Input style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item label="Role" name="role" rules={[{ required: true }]}>
          <Input style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item>
          <RegisterButton onClick={form.submit} />
        </Form.Item>
      </Form>
    </div>
  );
}
