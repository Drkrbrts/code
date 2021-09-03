import React from "react";
import { withRouter } from "react-router-dom";
import "rc-pagination/assets/index.css";
//import "bootstrap/dist/css/bootstrap.min.css";
//import "./Home.css";

class Tech extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <h1>Holy Tech!</h1>
          <img
            src="https://www.nightmarketbangkok.com/wp-content/uploads/2021/08/tech-1024x683.jpg"
            alt=""
            width="618"
            height="412"
            class="aligncenter size-large wp-image-8717"
          />
        </div>
      </>
    );
  }
}
export default Tech;
