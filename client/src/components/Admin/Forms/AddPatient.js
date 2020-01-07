import React, { Component } from "react";

import axios from "axios";

class AddPatient extends Component {
  state = {
    firstName: "",
    lastName: "",
    phoneNumber: ""
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value
    });
  };

  resetUserInputs = () => {
    this.setState({
      firstName: "",
      lastName: "",
      phoneNumber: ""
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const payload = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phoneNumber: this.state.phoneNumber
    };

    axios({
      url: "http://localhost:5000/admin/addPatients",
      method: "POST",
      data: payload
    })
      .then(() => {
        console.log("Data has been sent to the server");
        this.resetUserInputs();
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    console.log("State: ", this.state);

    return (
      <>
        <div style={{ marginLeft: "250px" }}>
          This is the new patient form
          <form onSubmit={this.handleSubmit}>
            <div>
              <input
                type="text"
                name="firstName"
                value={this.state.firstName}
                placeholder="First Name"
                onChange={this.handleChange}
              ></input>
              <input
                type="text"
                name="lastName"
                value={this.state.lastName}
                placeholder="Last Name"
                onChange={this.handleChange}
              ></input>
              <input
                type="text"
                name="phoneNumber"
                value={this.state.phoneNumber}
                placeholder="Phone Number"
                onChange={this.handleChange}
              ></input>
              <button>Sumbit</button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default AddPatient;
