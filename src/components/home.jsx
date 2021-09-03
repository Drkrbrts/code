import React from "react";
import { currentUser } from "../services/userServices";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      name: "",
      roles: null,
      tenantId: "U025G4MMDEH",
      siteId: 0,
      isSuccessful: true,
      transactionId: "",
    };
  }
  componentDidMount() {
    const payload = this.state;

    currentUser(payload)
      .then(onGetCurrentUserSuccess)
      .catch(onGetCurrentUserError);

    function onGetCurrentUserSuccess(response) {
      console.log("CurrentUser Onboarded", response.data);
    }

    function onGetCurrentUserError(response) {
      console.warn("User Not Found..", response.data);
    }
  }
  /*mapCurrentUser = user => {
    this.setState(user){
     const user = currentUser.state
    }

    
  }*/

  render() {
    return (
      <>
        <div className="container">
          <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
              <h1 className="display-5 fw-bold text-center">Home</h1>
              <h1 className="display-5 fw-bold text-center">
                {/*{user.map(name)}*/}
              </h1>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
