import { useState } from "react";
import { Form, Input } from "antd";
import LoginButton from './LoginButton';
import RegisterButton from './RegisterButton';

// Authenticate component with login and registration forms
export default function Authenticate() {
  const [form] = Form.useForm();
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = (values) => {
    // Handle login form submission
    console.log("Logging in with", values);
  };

  const handleRegister = (values) => {
    // Handle registration form submission
    console.log("Registering with", values);
  };

  const toggleIsLogin = () => {
    // Toggle between login and registration forms
    setIsLogin(!isLogin);
  };

  return (
    <div style={{ width: 400, margin: "0 auto" }}>
      <Form form={form} onFinish={isLogin ? handleLogin : handleRegister}>
        <Form.Item label="Username" name="username" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password" rules={[{ required: true }]}>
          <Input.Password />
        </Form.Item>
        {!isLogin && (
          <Form.Item label="Email" name="email" rules={[{ required: true, type: "email" }]}>
            <Input />
          </Form.Item>
        )}
        {!isLogin && (
          <Form.Item label="Role" name="role" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        )}
        <Form.Item>
          {isLogin ? (
            <LoginButton onClick={form.submit} />
          ) : (
            <RegisterButton onClick={form.submit} />
          )}
        </Form.Item>
      </Form>
      <div style={{ marginTop: "16px" }}>
        {isLogin ? (
          <p>
            Don't have an account?{" "}
            <a href="#" onClick={toggleIsLogin}>
              Register
            </a>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <a href="#" onClick={toggleIsLogin}>
              Login
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
