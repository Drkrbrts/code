import React from "react";

class Footer extends React.Component {
    render() {
        return(
            <footer className="container p-2" 
            style={{
                position: 'fixed',
                bottom: '0',
                width: '100%',
                height: '2.5rem',
                marginLeft: `650px`
            }}>
          <p>&copy; Sabio 2021-2022</p>
        </footer>
        );
    }
}

export default Footer;