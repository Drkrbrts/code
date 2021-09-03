import React from "react";



class WelcomeMessage extends React.Component {


    componentDidMount() {
       

    }                  

    render() {
        return <React.Fragment>
            <div style={{padding: "10px"}}>
                <h1 >
                   Welcome {this.props.user.name} !
                </h1>
            </div>

        </React.Fragment>
    }
}






export default WelcomeMessage;