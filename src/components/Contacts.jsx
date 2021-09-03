import React from "react";


class Contacts extends React.Component {
    state = {
        Email: "Sabio@test.email.com",
    };

    render() {

        return  <div>
            <strong>{this.state.Email}</strong>
        </div>;
    }


}

export default Contacts;