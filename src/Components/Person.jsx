import React, { Component } from "react";
import PersonCard from "./PersonCard";

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          id: 1,
          first_name: "Adi",
          last_name: "Broadway",
          email: "abroadway0@gnu.org",
          gender: "Female",
        },
        {
          id: 2,
          first_name: "Sibyl",
          last_name: "Wraighte",
          email: "swraighte1@cam.ac.uk",
          gender: "Male",
        },
        {
          id: 3,
          first_name: "Nanete",
          last_name: "Dalgetty",
          email: "ndalgetty2@pbs.org",
          gender: "Male",
        },
        {
          id: 4,
          first_name: "Rutger",
          last_name: "Gear",
          email: "rgear3@theglobeandmail.com",
          gender: "Bigender",
        },
        {
          id: 5,
          first_name: "Melania",
          last_name: "Borell",
          email: "mborell4@joomla.org",
          gender: "Female",
        },
      ],
      mappedPeople: [],
    };
  }
  componentDidMount() {
    this.renderPeople();
  }

  renderPeople = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        mappedPeople: prevState.people.map(this.mapPerson),
      };
    });
  };

  mapPerson = (person) => (
    <PersonCard
      person={person}
      key={person.id}
      handleDelete={this.handleDelete}
    />
  );

  handleDelete = (id) => {
    console.log(id);
  };
  render() {
    return (
      <>
        {" "}
        {this.state.mappedPeople.length > 0
          ? this.state.mappedPeople
          : "No Records found"}
      </>
    );
  }
}

export default Person;
