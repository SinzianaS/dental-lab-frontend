import axios from 'axios';
import { useState, useEffect } from 'react';
import DentistItem from './DentistItem';

export default function Dentists() {
  const [dentists, setDentists] = useState([]);

  const getDentists = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/dentists"
    );

    setDentists(response.data);
  };

  useEffect(() => {
    getDentists();
  }, []);

  const onDentistsChange = () => {
    setDentists([]);
  };

  useEffect(() => {
    console.log(dentists);
  }, [dentists]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {dentists.map((dentist) => (
        <DentistItem
          key={dentist.id}
          dentist={dentist}
          dentists={dentists}
          onDentistsChange={onDentistsChange}
        />
      ))}
    </div>
  );
}
