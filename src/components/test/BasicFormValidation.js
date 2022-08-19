import React, { useState } from "react";

function BasicFormValidation() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [userErr, setUserErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  const loginHandler = (e) => {
    if (user.length < 3 || password.length < 3) {
      alert("type correct values");
    } else {
      alert("all good :)");
    }
    e.preventDefault();
  };

  function userHandler(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }
    setUser(item);
  }

  function passHandler(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setPassErr(true);
    } else {
      setPassErr(false);
    }
    setPassword(item);
  }
  return (
    <>
      <h1> Login Form </h1>
      <form onSubmit={loginHandler}>
        <input type="text" placeholder="Enter User Id" onChange={userHandler} />
        <br /> {userErr ? <p> User Not Valid </p> : ""} <br />
        <input
          type="password"
          placeholder="Enter Password"
          onChange={passHandler}
        />
        <br /> {passErr ? <p> Password Not Valid </p> : ""} <br />
        <button type="submit"> Login </button>
      </form>
    </>
  );
}

export default BasicFormValidation;
