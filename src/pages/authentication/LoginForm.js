import { Form, Input, message } from "antd";
import LoginButton from './LoginButton';
import axios from 'axios';

export default function LoginForm(props) {
  const [form] = Form.useForm();
  const handleLogin = async (values) => {
    try {
      const response = await axios.post('http://localhost:8080/api/auth/signin', values);
      console.log('Login response:', response.data);
      localStorage.setItem('accessToken', response.data.accessToken);
      props.setIsLoggedIn(true);
      message.success('Logged in successfully');
    } catch (error) {
      console.error('Login error:', error);
      message.error('Failed to log in');
    }
  };
  return (
    <div style={{ width: 400, margin: "0 auto" }}>
      <Form form={form}
      onFinish={handleLogin}
      >
        <Form.Item label="Username" name="username" rules={[{ required: true }]}>
          <Input style={{ width: '100%' }}  />
        </Form.Item>
        <Form.Item label="Password" name="password" rules={[{ required: true }]}>
          <Input.Password style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item>
          <LoginButton onClick={form.submit} />
        </Form.Item>
      </Form>
    </div>
  );
}
