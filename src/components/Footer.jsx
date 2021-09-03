import React from "react";

class Footer extends React.Component {
    render() {
        return(
            <footer className="container p-2" 
            style={{
                position: 'absolute',
                bottom: '0',
                width: '100%',
                marginBottom: "-600px",
                marginLeft: `650px`
            }}>
          <p>&copy; Sabio 2021-2022</p>
        </footer>
        );
    }
}

export default Footer;