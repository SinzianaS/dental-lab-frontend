import { Button, Modal } from "antd";
import { useState } from "react";

export default function EditUserModal({ dentist }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button type="primary" style={{ marginRight: "4px" }} onClick={showModal}>
        Edit
      </Button>
      <Modal
        title={`Edit ${dentist.name}`}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >

      </Modal>
    </div>
  );
}
