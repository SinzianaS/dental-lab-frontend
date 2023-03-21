import { Button } from "antd";

export default function RegisterButton({ onClick }) {
    return (
      <Button type="primary" onClick={onClick}>
        Register
      </Button>
    );
  }
