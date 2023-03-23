import axios from "axios";
import { useState, useEffect } from "react";
import DentalTechnicianItem from "./DentalTechnicianItem";

export default function DentalTechnicians() {
  const [dentalTechnicians, setDentalTechnicians] = useState([]);

  const getDentalTechnicians = async () => {
    const response = await axios.get("http://localhost:8080/api/technicians");

    setDentalTechnicians(response.data);
  };

  useEffect(() => {
    getDentalTechnicians();
  }, []);

  const onDentalTechniciansChange = () => {
    setDentalTechnicians([]);
  };

  useEffect(() => {
    console.log(dentalTechnicians);
  }, [dentalTechnicians]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {dentalTechnicians.map((dentalTechnician) => (
        <DentalTechnicianItem
          key={dentalTechnician.id}
          dentalTechnician={dentalTechnician}
          dentalTechnicians={dentalTechnicians}
          onDentalTechniciansChange={onDentalTechniciansChange}
        />
      ))}
    </div>
  );
}
