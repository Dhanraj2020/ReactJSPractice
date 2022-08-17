import React, { useState } from "react";

const InputBox = () => {
  const [data, setData] = useState([]);
  const [print, setPrint] = useState(false);
  const getData = (val) => {
    setData(val.target.value);
    setPrint(false);
  };
  const handlePrintData = () => {
    setPrint(true);
  };

  return (
    <>
      <h1>Get your Input Box value here... {data}</h1>
      {print ? <h2>{data}</h2> : null}
      <input type="text" onChange={getData} />
      <button onClick={handlePrintData}>Print Data</button>
    </>
  );
};

export default InputBox;
