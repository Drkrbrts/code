import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import "./App.css";
import "rc-pagination/assets/index.css";
import "react-toastify/dist/ReactToastify.css";
import Products from "./codeChallenge/Products";


class App extends Component {
  state = {
    formData: {
      name: "",
      manufacturer: "",
      description: "",
      cost: "",
      
    },
  };

  notify = () => toast("Wow so easy !");

  onButtonClicked = (e) => {
    const data = {...this.notify};

    data
    .then(this.onActionSuccess)
    .catch(this.onActionError);

    e.stopPropagation();
    console.log("I was clicked.");
    
  };

  onFormFieldChange = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    //console.log(newValue, currentTarget);
    this.setState(() => {
      let formData = { ...this.state.formData };

      formData[inputName] = newValue;

      return { formData };
    });
  };

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <header className="p-3 bg-dark text-white">
            <div className="container">
              <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a
                  href="/"
                  className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
                >
                  <img
                    src="https://pw.sabio.la/images/Sabio.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Sabio"
                  />
                </a>

                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                  <li>
                    <button
                      href="#"
                      className="nav-link px-2 text-secondary link-button"
                    >
                      <NavLink to="/Home"> Home</NavLink>
                    </button>
                  </li>
                  <li>
                    <button >
                      <Products>Products</Products>
                    </button>
                  </li>
                  <li>
                    <button className="nav-link px-2 text-white link-button">
                      Features
                    </button>
                  </li>
                  <li>
                    <button
                      href="#"
                      className="nav-link px-2 text-white link-button"
                    >
                      Pricing
                    </button>
                  </li>
                  <li>
                    <button
                      href="#"
                      className="nav-link px-2 text-white link-button"
                    >
                      FAQs
                    </button>
                  </li>
                  <li>
                    <button
                      href="#"
                      className="nav-link px-2 text-white link-button"
                    >
                      About
                    </button>
                  </li>
                </ul>

                <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                  <input
                    type="search"
                    className="form-control form-control-dark"
                    placeholder="Search..."
                    aria-label="Search"
                  />
                </form>

                <div className="text-end">
                  <button type="button" className="btn btn-outline-light me-2">
                    Login
                  </button>
                  <button type="button" className="btn btn-warning">
                    Sign-up
                  </button>
                </div>
              </div>
            </div>
          </header>

          <main role="main">
            <div className="container">
              <div className="row">
                <div className="col align-self-center ">
                  <form>
                    <div>
                      <label
                        htmlFor="registerForNewMembership"
                        className="form-label"
                      >
                        Register for new Membership
                      </label>
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleFirstName1"
                        className="form-label"
                        placeholder="First Name"
                      ></label>
                      <input
                        className="form-control"
                        id="name"
                        name="name"
                        value={this.state.formData.name}
                        onChange={this.onFormFieldChange}
                        type="text"
                        placeholder=""
                      ></input>
                    </div>

                    <div className="mb-3">
                      <label
                        htmlFor="exampleLastName1"
                        className="form-label"
                        placeholder=""
                      ></label>
                      <input
                        className="form-control"
                        id="manufacturer"
                        name="manufacturer"
                        value={this.state.formData.manufacturer}
                        onChange={this.onFormFieldChange}
                        type="text"
                        placeholder=""
                      ></input>
                    </div>

                    <div className="mb-3">
                      <label
                        htmlFor="exampleDescription1"
                        className="form-label"
                      ></label>
                      <input
                        type="description"
                        className="form-control"
                        id="description"
                        name="description"
                        value={this.state.formData.description}
                        onChange={this.onFormFieldChange}
                        placeholder=""
                        aria-describedby="descriptionHelp"
                      />
                    </div>

                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputCost1"
                        className="form-label"
                        placeholder=""
                      ></label>
                      <input
                        type="text"
                        className="form-control"
                        id="cost"
                        name="cost"
                        value={this.state.formData.cost}
                        onChange={this.onFormFieldChange}
                        placeholder=""
                        aria-describedby="costHelp"
                      />
                    </div>

    
                    <div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg"
                        onClick={this.onButtonClicked}
                        
                      >
                        Register!
                      </button>
                      <ToastContainer />
                    </div>
                  </form>
                </div>
              </div>

              <hr />
            </div>
          </main>

          <footer className="container">
            <p>&copy; Sabio 2019-2020</p>
          </footer>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
