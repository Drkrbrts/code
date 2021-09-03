import React from "react"

class HomePage extends React.Component {


    render() {
        return (
            <div className="container text-center my-5">
                <h1 className ="homePageGreeting"
                    style={{ fontsize: "8rem" }}>{this.state.welcomeMsg}
                </h1>
            </div>
        );
    };
};


export default HomePage;