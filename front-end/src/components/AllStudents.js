import { useEffect, useState } from "react";
import axios from "axios";

function AllStudents() {
  const [students, setStudents] = useState([]);

  console.log('ALL');

  useEffect(async () => {
    const API_URL = process.env.REACT_APP_BASE_URL;
    try {
        const response = await axios.get(`${API_URL}/students`);
        const students = response.data;
        if (!students) {
            alert("Putz! Não há estudantes cadastrados para o sorteio!");
        } else {
            setStudents(students);
        }
    } catch (error) {
        alert("Não foi possível realizar o sorteio!");
    }
}, []);

  return (
    <>
        {students.length > 0 ? students.map((elem, index) => <h1 key={index}>{elem.name}</h1>) : "Carregando..."}
    </>
  )
}

export default AllStudents;