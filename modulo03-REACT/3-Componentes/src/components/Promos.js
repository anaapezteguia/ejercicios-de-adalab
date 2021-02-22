import React from "react";
import ItemPromos from "./ItemPromos";

function Promos() {
  const students = [
    {
      promo: "A",
      name: "Sofía",
      age: 20,
    },
    {
      promo: "B",
      name: "María",
      age: 21,
    },
    {
      promo: "A",
      name: "Lucía",
      age: 22,
    },
  ];
  // const filteredStudents = students.filter((student) => student.promo ?{
  //   console.log(students.promo);
  //   return students;
  // });

  const selectedPromo = students.map((student, index) => {
    return <ItemPromos key={index} student={student} />;
  });
  return (
    <div className="App">
      <h1>Pintar listados con React:</h1>
      <ul>{selectedPromo}</ul>
    </div>
  );
}
export default Promos;
