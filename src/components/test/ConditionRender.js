import React, { useState } from "react";
const ConditionRender = () => {
  const [loggedIn, setLoggedIn] = useState(3);
  return (
    <>
      {loggedIn == 1 ? (
        <h1>Welcome User 1</h1>
      ) : loggedIn == 2 ? (
        <h1>Welcome User 2</h1>
      ) : (
        <h1>Welcome User 3</h1>
      )}
    </>
  );
};

export default ConditionRender;
