import React, {Component} from "react"; 

class Footer extends Component {

    render() {
        return ( 
        <React.Fragment>
        <footer className="container" 
        style={{
                marginTop: "400px",
                marginLeft: "100px",
                marginRight: "100px",
              }}>
          <p>&copy; Sabio 2019-2020</p>
        </footer>
        </React.Fragment>)
    }
}

export default Footer; 