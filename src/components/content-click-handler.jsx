import React from "react";
// import logIn from "../services/userService";

class Content extends React.Component
{

    onElementClicked = (e) =>
    {
        e.stopPropagation();
        console.log("button clicked!", e.currentTarget);
    }

    render()
    {

        return (
            <div className="container">
                <div className="row">
                    <div style={{ "backgroundColor": "lightgray" }} className="col-md-4 p-5" onClick={this.onElementClicked}>
                        <button type="button" className="btn btn-outline-primary" onClick={this.onElementClicked}>
                            Click Me
                        </button>
                        <p onClick={this.onElementClicked}>
                            I am a paragraph.
                        </p>
                    </div>
                </div>

                <hr />
            </div>
        )
    }
}

export { Content };