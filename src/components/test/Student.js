// import React from "react";
// const Student = (props) => {
//   return (
//     <div style={{ backgroundColor: "skyblue", margin: "10px" }}>
//       <h1>Hello {props.name} !!!!!</h1>
//       <h2>Email ID : {props.email} </h2>
//       <h3>Address : {props.others.address}</h3>
//       <h4>Contact No. : {props.others.mobile}</h4>
//     </div>
//   );
// };
// export default Student;

function Student(props) {
  console.log(props);
  return (
    <div style={{ backgroundColor: "skyblue", margin: 10 }}>
      <h1>Hello {props.name}</h1>
      <button onClick={props.data}>Call Function</button>
    </div>
  );
}

export default Student;
