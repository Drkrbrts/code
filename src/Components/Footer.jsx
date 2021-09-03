import React from "react";
import 'rc-pagination/assets/index.css'

class Footer extends React.Component {
    render() {
        return <React.Fragment>
             <footer style={{position: "fixed", bottom: "0"}} className="container">
          <p>&copy; Sabio 2019-2020</p>
        </footer>
        </React.Fragment>
    }
}

export default Footer;