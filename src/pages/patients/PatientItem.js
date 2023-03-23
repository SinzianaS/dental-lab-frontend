import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Tabs } from "antd";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import EditUserModal from "./EditUserModal";
import DeleteUserModal from "./DeleteUserModal";
import { useEffect, useState } from "react";

export default function PatientsItem({ patient, patients, onPatientsChange }) {

  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    setDentist(patient?.dentist || null);
  }, [patient]);

  const tabs = [
    {
      label: <FontAwesomeIcon icon={faUser} />,
      key: 1,
      children: (
        <div>
          <div>{patient.name}</div>
          <div>Age:{patient.age}</div>
          <div>Dentist:{dentist?.name}</div>
        </div>
      ),
    },
    {
      label: <FontAwesomeIcon icon={faLocationDot} />,
      key: 2,
      children: (
        <div>
          <div>{dentist?.name}</div>
          <div>{dentist?.clinicName}</div>
          <div>{dentist?.address}</div>
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
        title={<h3>{patient.name}</h3>}
      >
        <Tabs tabPosition="left" items={tabs} />
      </Card>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <EditUserModal patient={patient}></EditUserModal>
        <DeleteUserModal patient={patient}></DeleteUserModal>
      </div>
    </div>
  );
}
