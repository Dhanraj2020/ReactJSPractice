import React, { Component } from "react";

class Employees extends Component {
  constructor() {
    super();
    this.state = {
      name: "dhanraj",
    };
  }
  render() {
    console.log(this.props);
    // const handleEmpName = () => {
    //   this.setState({ name: "Dhanraj Lambhate" });
    // };
    return (
      <div style={{ backgroundColor: "skyblue", margin: 20 }}>
        <h1>Employees Details</h1>
        <h4>Hello {this.props.name}</h4>
        {/* <h4>Email ID: {this.props.email}</h4> */}
        {/* <button onClick={handleEmpName}>Update Emp Name</button> */}
      </div>
    );
  }
}
export default Employees;
