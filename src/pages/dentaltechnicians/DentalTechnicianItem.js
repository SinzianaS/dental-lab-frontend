import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Tabs } from "antd";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import EditUserModal from "./EditUserModal";
import DeleteUserModal from "./DeleteUserModal";

export default function DentalTechnicianItem({ dentalTechnician }) {
  const tabs = [
    {
      label: <FontAwesomeIcon icon={faUser} />,
      key: 1,
      children: (
        <div>
          <div>{dentalTechnician.name}</div>
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
        title={<h3>{dentalTechnician.name}</h3>}
      >
        <Tabs tabPosition="left" items={tabs} />
      </Card>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <EditUserModal dentalTechnician={dentalTechnician}></EditUserModal>
        <DeleteUserModal dentalTechnician={dentalTechnician}></DeleteUserModal>
      </div>
    </div>
  );
}
