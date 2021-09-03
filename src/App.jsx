import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import JumboComp from "./Components/Jumbo";
import FooterComp from "./Components/Footer";
import ContentComp from "./Components/Content";
import SitenavComp from "./Components/Sitenav";
// import Presidents from "./Components/Presidents";
import Cars from "./Components/Cars";
// import * as userService from "./services/userService"
import Person from "./Components/Person";

class App extends Component {
  constructor() {
    super();
    this.state = { show: false };
  }

  handleClick() {
    this.setState({
      show: !this.state.show,
    });
  }
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <SitenavComp></SitenavComp>
          <main role="main">
            <p className="Show-intro">
              <button onClick={() => this.handleClick()}>Show Cars</button>
            </p>
            {this.state.show && <Cars></Cars>}
            <Person></Person>
            {/* <Presidents></Presidents> */}
            <JumboComp></JumboComp>
            <ContentComp></ContentComp>
          </main>
          <FooterComp></FooterComp>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;

//Code examples from the videos
// import React, { Component } from "react";

// import "./App.css";

// class App extends Component {
//   state = {
//     formData: {
//       firstName: "Bryan",
//       lastName: "Engelke",
//       email: "",
//       color: 0,
//       agree: true,
//       name: "Sabio",
//       zipCode: "05854",
//       cost: 5285,
//     },
//   };

//   onFormFieldChanged = (e) => {
//     let currentTarget = e.currentTarget;
//     console.log(e.currentTarget.name);
//     let newValue =
//       currentTarget.type === "checkbox"
//         ? currentTarget.checked
//         : currentTarget.value;
//     let inputName = currentTarget.name;
//     // console.log({ newValue, currentTarget });

//     this.setState(() => {
//       let formData = { ...this.state.formData };

//       formData[inputName] = newValue;

//       return { formData };
//     });
//   };

//   onItemClicked = (e) => {
//     e.stopPropagation();
//     console.log("I was clicked", e.currentTarget);
//     console.log("here is state", this.state);
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <header className="p-3 bg-dark text-white">
//           <div className="container">
//             <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
//               <a
//                 href="/"
//                 className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
//               >
//                 <img
//                   src="https://pw.sabio.la/images/Sabio.png"
//                   width="30"
//                   height="30"
//                   className="d-inline-block align-top"
//                   alt="Sabio"
//                 />
//               </a>

//               <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
//                 <li>
//                   <button
//                     href="#"
//                     className="nav-link px-2 text-secondary link-button"
//                   >
//                     Home
//                   </button>
//                 </li>
//                 <li>
//                   <button className="nav-link px-2 text-white link-button">
//                     Features
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     href="#"
//                     className="nav-link px-2 text-white link-button"
//                   >
//                     Pricing
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     href="#"
//                     className="nav-link px-2 text-white link-button"
//                   >
//                     FAQs
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     href="#"
//                     className="nav-link px-2 text-white link-button"
//                   >
//                     About
//                   </button>
//                 </li>
//               </ul>

//               <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
//                 <input
//                   type="search"
//                   className="form-control form-control-dark"
//                   placeholder="Search..."
//                   aria-label="Search"
//                 />
//               </form>

//               <div className="text-end">
//                 <button type="button" className="btn btn-outline-light me-2">
//                   Login
//                 </button>
//                 <button type="button" className="btn btn-warning">
//                   Sign-up
//                 </button>
//               </div>
//             </div>
//           </div>
//         </header>

//         <main role="main">
//           <div className="container">
//             <div className="row">
//               <div
//                 className="col-md-4 p-5 bg-info"
//                 onClick={this.onItemClicked}
//               >
//                 <form>
//                   <div className="form-group">
//                     <label htmlFor="exampleInputEmail1">First Name</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="firstName"
//                       name="firstName"
//                       onChange={this.onFormFieldChanged}
//                       value={this.state.formData.firstName}
//                     />
//                   </div>

//                   <div className="form-group">
//                     <label htmlFor="exampleInputEmail1">Last Name</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="lastName"
//                       name="lastName"
//                       onChange={this.onFormFieldChanged}
//                       value={this.state.formData.lastName}
//                     />
//                   </div>

//                   <div className="form-group">
//                     <label htmlFor="exampleInputEmail1">Email</label>
//                     <input
//                       type="email"
//                       className="form-control"
//                       id="lastName"
//                       name="email"
//                       onChange={this.onFormFieldChanged}
//                       value={this.state.formData.email}
//                     />
//                   </div>

//                   <div className="form-group">
//                     <label htmlFor="exampleFormControlSelect1">
//                       Favorite Color
//                     </label>
//                     <select
//                       onChange={this.onFormFieldChanged}
//                       className="form-control"
//                       name="color"
//                       value={this.state.formData.color}
//                     >
//                       <option value="">Select Color</option>
//                       <option value="1">Red</option>
//                       <option value="2">Green</option>
//                       <option value="3">Blue</option>
//                     </select>
//                   </div>

//                   <div className="form-check">
//                     <input
//                       className="form-check-input"
//                       type="checkbox"
//                       name="agree"
//                       checked={this.state.formData.agree}
//                       onChange={this.onFormFieldChanged}
//                       value="989"
//                     />
//                     <label className="form-check-label" htmlFor="defaultCheck1">
//                       Agree to terms?
//                     </label>
//                   </div>

//                   <button
//                     type="submit"
//                     className="btn btn-primary"
//                     onClick={this.onItemClicked}
//                   >
//                     Submit
//                   </button>

//                   <button
//                     type="button"
//                     className="btn btn-outline-primary"
//                     onClick={this.onItemClicked}
//                   >
//                     Click Me
//                   </button>

//                   <p onClick={this.onItemClicked} className="p-3">
//                     I am a p tag
//                   </p>
//                 </form>
//               </div>
//             </div>

//             <hr />
//           </div>
//         </main>

//         <footer className="container">
//           <p>&copy; Sabio 2019-2020</p>
//         </footer>
//       </React.Fragment>
//     );
//   }
// }

// export default App;
