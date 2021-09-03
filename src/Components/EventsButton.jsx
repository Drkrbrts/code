import React from "react";


class EventsButton extends React.Component {

    toEvents = () => {
        this.props.history.push("/events");
    }

    render() {

        return (
            <button onClick={this.toEvents} type="button" className="nav-link px-2 text-white link-button" >Events</button>
        )
    }
}




export default EventsButton;