import axios from 'axios';
import { useState, useEffect } from 'react';
import PatientsItem from './PatientItem';

export default function Patients() {
  const [patients, setPatients] = useState([]);

  const getPatients = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/patients"
    );

    setPatients(response.data);
  };

  useEffect(() => {
    getPatients();
  }, []);

  const onPatientsChange = () => {
    setPatients([]);
  };

  useEffect(() => {
    console.log(patients);
  }, [patients]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {patients.map((patient) => (
        <PatientsItem
          key={patient.id}
          patient={patient}
          patients={patients}
          onPatientsChange={onPatientsChange}
        />
      ))}
    </div>
  );
}
