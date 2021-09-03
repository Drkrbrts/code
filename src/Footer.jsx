import React from "react";

class Footer extends React.Component{

    render()
    {
        return (
            <footer className="container" style={{position:"absolute", bottom: 0}}>
            <p>&copy; Sabio 2019-2020</p>
            </footer>
        );
    };
};

export default Footer;