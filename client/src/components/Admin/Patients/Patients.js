import React, { Component } from "react";
import axios from "axios";

class Patients extends Component {
  state = {
    patients: [],
    isLoaded: false
  };

  getPatients = () => {
    axios
      .get("http://localhost:5000/admin/patients")
      .then(response => {
        const data = response.data;
        console.log(data);
        this.setState({
          patients: data.patients,
          isLoaded: true
        });
        console.log("data has been received");
        console.log(this.state.patients);
      })
      .catch(err => {
        alert("Error retrieving data");
      });
  };

  componentDidMount = () => {
    this.getPatients();
  };

  render() {
    const { patients, isLoaded } = this.state;
    const patientArray = patients.map(patient => (
      <div key={patient._id}>
        <h3>
          {patient.firstName} {patient.lastName}
        </h3>
        <h5>{patient.phoneNumber}</h5>
      </div>
    ));

    if (!isLoaded) {
      return <div>Loading...</div>;
    }

    console.log("State: ", this.state);
    return (
      <>
        <div style={{ marginLeft: "275px" }}>
          <h2>List of all patients</h2>
          <div>{patientArray}</div>
        </div>
      </>
    );
  }
}

export default Patients;
