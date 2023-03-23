import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Tabs } from "antd";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import EditUserModal from "./EditUserModal";
import DeleteUserModal from "./DeleteUserModal";

export default function DentistsItem({ dentist, dentists, onDentistsChange }) {
  const tabs = [
    {
      label: <FontAwesomeIcon icon={faUser} />,
      key: 1,
      children: (
        <div>
          <div>{dentist && dentist.name}</div>
          <div>Clinic:{dentist && dentist.clinicName}</div>
        </div>
      ),
    },
    {
      label: <FontAwesomeIcon icon={faLocationDot} />,
      key: 2,
      children: (
        <div>
          <div>{dentist && dentist.address}</div>
        </div>
      ),
    },
  ];

  return (
    <div style={{ marginBottom: "16px" }}>
      <Card
        hoverable
        style={{
          width: 500,
          marginBottom: "8px",
        }}
        title={<h3>{dentist.name}</h3>}
      >
        <Tabs tabPosition="left" items={tabs} />
      </Card>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <EditUserModal dentist={dentist}></EditUserModal>
        <DeleteUserModal dentist={dentist}></DeleteUserModal>
      </div>
    </div>
  );
}
