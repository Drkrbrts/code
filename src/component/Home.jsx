import React from "react";
// import Logout from "./Logout";
// import Login from "./Login";

class Home extends React.Component {
  render() {
    return this.props.user ? (
      <center>
        <h1>Welcome {this.props.user}</h1>
      </center>
    ) : (
      <center>
        <h1>Please Log In</h1>
      </center>
    );
  }
}

// const Greeting = (props) => {
//   const isLoggedin = props.isAuthenticated;
//   if (isLoggedin) {
//     return (
//       <center>
//         <h1>Welcome back!</h1>
//       </center>
//     );
//   }
//   return (
//     <center>
//       <h1>Please Log In</h1>
//     </center>
//   );
// };

export default Home;
