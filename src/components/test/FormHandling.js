import React, { useState } from "react";
const FormHandling = () => {
  const getFormData = (e) => {
    console.log(name, tnc, occupation);
    e.preventDefault();
  };

  const [name, setName] = useState("");
  const [tnc, setTnc] = useState(false);
  const [occupation, setOccupation] = useState("");
  return (
    <>
      <h1>Form Handle in React</h1>
      <form onSubmit={getFormData}>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <select onChange={(e) => setOccupation(e.target.value)}>
          <option>Select</option>
          <option>Engineer</option>
          <option>Doctor</option>
          <option>Teacher</option>
          <option>Worker</option>
        </select>
        <br />
        <br />
        <input type="checkbox" onChange={(e) => setTnc(e.target.checked)} />
        <span>Accept terms and conditions</span>
        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};
export default FormHandling;
