import { Button } from "antd";

export default function LoginButton({ onClick }) {
  return (
    <Button type="primary" onClick={onClick}>
      Login
    </Button>
  );
}
