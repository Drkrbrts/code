import React from "react";

class Home extends React.Component
{
    render()
    {

        return (
            <div className="container text-center">
                <div>  Welcome to the home page!</div>
                <div>  Hello {this.props.currentUser.firstName}!</div>
            </div>
        )
    }
}

export default Home;