import React from "react";


class Avatar extends React.Component {
    state = {
        avatar: ""
    }

    componentDidMount() {                                 
       
    }

    render() {                

        return <React.Fragment>

            <a
                href="/"
                className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
              >
                <img
                  src="https://pw.sabio.la/images/Sabio.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="Sabio"
                />          
              </a>    

        </React.Fragment>
    }
}




export default Avatar;