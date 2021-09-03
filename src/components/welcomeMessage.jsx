import React, { Component } from "react";

class welcomeMessage extends React.Component {
  render(props) {
    return (
      <div className="container">
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Welcome! </h1>
            <div class="emailDisplay">
              {props.extra}
              {props.extra2}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
