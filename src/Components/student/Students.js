import React, { Component } from "react";
import Student from "./Student";

class Students extends Component {
    constructor(props) {
      super(props);
      this.state = {
        students: [
          {
            id: 1,
            first_name: "Adi",
            last_name: "Broadway",
            email: "abroadway0@gnu.org",
            grade: 80,
          },
          {
            id: 2,
            first_name: "Sibyl",
            last_name: "Wraighte",
            email: "swraighte1@cam.ac.uk",
            grade: "90",
          },
          {
            id: 3,
            first_name: "Nanete",
            last_name: "Dalgetty",
            email: "ndalgetty2@pbs.org",
            grade: null,
          },
          {
            id: 4,
            first_name: "Rutger",
            last_name: "Gear",
            email: "rgear3@theglobeandmail.com",
            grade: 86
          },
        ],
        mappedStudent: [],
      };
    }
    componentDidMount() {
        this.setState(() => {
            return{
                mappedStudent: this.state.students.map(this.mappedStudent)
            };
        });
    }
    mappedStudent = student => <Student key={student.id} student={student} />;

    render() {
        return (
            <>
            <h2>No PropTypes</h2>
            <div className="row">{this.state.mappedStudent}</div>
            </>
        )
    }
};
export default Students;