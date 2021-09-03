import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalView extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Modal isOpen={this.props.isOpen} toggle={this.props.toggleModal}>
          <ModalHeader toggle={this.props.toggleModal}>
            <p style={{ fontSize: "40px" }}>{this.props.title}</p>
          </ModalHeader>
          <ModalBody>
            <div style={{ textAlign: "center" }}>
              <div>
                <p style={{ fontSize: "25px", fontWeight: "500" }}>
                  {this.props.company}
                </p>
                <p style={{ fontSize: "20px", fontWeight: "400" }}>
                  ${this.props.pay}/yr Full-time
                </p>
              </div>
              <div>
                <h5>Job Description</h5>
                <p>{this.props.slogan}</p>
                <p>{this.props.description}</p>
              </div>
              <div>
                <h5>Position Summary</h5>
                <p>{this.props.summary}</p>
              </div>
              <div>
                <h5>All Interested Parties Send Resumes to:</h5>
                <p>{this.props.contact}</p>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.props.toggleModal}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }

  //   render() {
  //     return (
  //       <div className="card">
  //         <div className="card-header">
  //           <h1>{this.props.location.state.payload.techCompany.name}</h1>
  //         </div>
  //         <div className="card-body">
  //           <h5 className="card-title">
  //             Position - {this.props.location.state.payload.title}
  //           </h5>
  //           <h5 className="card-title">
  //             Salary - ${this.props.location.state.payload.pay}
  //           </h5>
  //           <p className="card-text">
  //             {this.props.location.state.payload.description}
  //           </p>
  //         </div>
  //       </div>
  //     );
  //   }
}

export default ModalView;
