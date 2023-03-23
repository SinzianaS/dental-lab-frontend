import { Empty } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DentistExtraDetails() {
  const [dentist, setDentist] = useState(null);

  const {id} = useParams();

  useEffect(() => {
    //api call
    const getDentistById = async () => {
      const response = await axios.get(
        `http://localhost:8080/api/dentists/${id}`
      );

      setDentist(response.data);
    };

    setTimeout(() => {
      getDentistById();
    }, 3000);
  }, [id]);

  return dentist ? <div>{dentist.name}</div> : <Empty />;
}
