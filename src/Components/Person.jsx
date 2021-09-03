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
    };
  }

  handleClick = (e) => {
    console.log(e.target);
  };
  render() {
    return (
      <PersonCard
        name={"Brijesh"}
        data={{ name: "brijesh", last_name: "Patel" }}
        clickingOnSomething={this.handleClick}
      />
    );
  }
}

export default Person;
