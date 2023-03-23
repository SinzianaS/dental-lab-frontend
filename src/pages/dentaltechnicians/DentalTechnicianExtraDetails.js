import { Empty } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DentalTechnicianExtraDetails() {
  const [dentalTechnician, setDentalTechnician] = useState(null);

  const {id} = useParams();

  useEffect(() => {
    //api call
    const getDentalTechnicianById = async () => {
      const response = await axios.get(
        `http://localhost:8080/api/technicians/${id}`
      );

      setDentalTechnician(response.data);
    };

    setTimeout(() => {
      getDentalTechnicianById();
    }, 3000);
  }, [id]);

  return dentalTechnician ? <div>{dentalTechnician.name}</div> : <Empty />;
}
