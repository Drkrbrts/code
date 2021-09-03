import React from "react";
import { withRouter } from "react-router-dom";
//import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/css/bootstrap.min.css";
//import "./Home.css";

class Blogs extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <h1>This is the Blog!</h1>
          <img
            src="https://www.nightmarketbangkok.com/wp-content/uploads/2021/06/wolf-of-wall-street-2.jpg"
            alt=""
            width="1207"
            height="801"
            class="aligncenter size-full wp-image-8712"
          />
        </div>
      </>
    );
  }
}
export default Blogs;
