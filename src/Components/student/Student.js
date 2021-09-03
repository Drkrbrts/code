import React from "react";

const Student = props => {
    return(
        <div className="col-sm-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        Name: {props.student.first_name} {props.student.last_name}
                    </h5>
                    <p className="card-text">Email: {props.student.email}</p>
                    <p className="card-text">Grade: {props.student.grade % 100}</p>
                </div>
            </div>
        </div>
    )
}

export default Student;