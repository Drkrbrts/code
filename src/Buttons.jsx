import React from "react";


class Buttons extends React.Component{
    onBuyClicked = (e) => {
        console.log("Buy was clicked");
    };

    render() {
        return (
            <React.Fragment>
                <div className="col-md-4">
                    <button
                        type="submit"
                        className="btn btn-outline-primary"
                        onClicked={this.onBuyClicked}
                    >
                        Buy Product
                    </button>
                </div>
                <div className="col-md-4">
                    <button type="submit" className="btn btn-outline-secondary">
                        Log Out
                    </button>
                </div>
                <div className="col-md-4">
                    <button type="submit" className="btn btn-outline-secondary">
                        See Product Details
                    </button>
                </div>
            </React.Fragment>
        );
    };
};

export default Buttons;