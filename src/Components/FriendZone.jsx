import React from "react";


class FriendZone extends React.Component {

    render() {

        return <React.Fragment>
            <div className="container">
                {this.props.friends}
            </div>

        </React.Fragment>
    }
}





export default FriendZone;