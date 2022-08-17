import React, { useState } from "react";
function StateExample() {
  const [data, setData] = useState("Dhanraj");
  function updateData() {
    setData("Lambhate");
  }
  return (
    <>
      <h1>{data}</h1>
      <button onClick={updateData}>Update Data</button>
    </>
  );
}
export default StateExample;
