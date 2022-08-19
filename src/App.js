import React, { useState } from "react";
import "./App.css";
import Student from "./components/test/Student";
import Employees from "./components/test/Employees";
import InputBox from "./components/test/InputBox";
import HideShow from "./components/test/HideShow";
import FormHandling from "./components/test/FormHandling";
import ConditionRender from "./components/test/ConditionRender";
import BasicFormValidation from "./components/test/BasicFormValidation";
import User from "./components/test/User";

function App() {
  const [name, setName] = useState("Anil");

  function getData() {
    alert("Hello from app component");
  }
  const handleClick = () => {
    setName("Sidhu");
  };

  const [empName, setEmpname] = useState("Dhanraj");
  const handleEmpName = () => {
    setEmpname("Dhanraj Lambhate");
  };

  return (
    <div className="App">
      <h1>Props in React :)</h1>
      <User data={getData} />
      <Student data={getData} />
      <Student name={name} />
      {/* <button
        onClick={() => {
          setName("Sidhu");
        }}
      >
        Update Name
      </button> */}
      <button onClick={handleClick}>Update Name</button>
      <Employees name={empName} email="dhanraj@gmail.com" />
      <button onClick={handleEmpName}>Update Emp Name</button>
      {/* <Employees name="Sushil" email="sushil@gmail.com" /> */}
      <InputBox />
      <HideShow />
      <FormHandling />
      <ConditionRender />
      <BasicFormValidation />
    </div>
  );
}

export default App;
