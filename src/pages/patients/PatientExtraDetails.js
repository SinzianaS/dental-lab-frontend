import { Empty } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PatientExtraDetails() {
  const [patient, setPatient] = useState(null);

  const {id} = useParams();

  useEffect(() => {
    //api call
    const getPatientById = async () => {
      const response = await axios.get(
        `http://localhost:8080/api/patients/${id}`
      );

      setPatient(response.data);
    };

    setTimeout(() => {
      getPatientById();
    }, 3000);
  }, [id]);

  return patient ? <div>{patient.name}</div> : <Empty />;
}
