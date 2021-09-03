import React from "react";

function FooterComponent () {
    return(
    <React.Fragment>
          <footer className="container">
    <p>&copy; Sabio {new Date().getFullYear() - 1} - {new Date().getFullYear() }</p>
    </footer>
    </React.Fragment>);
}

export default FooterComponent;