import React, { Component } from "react";
import Register from "./components/Register";
import Fruits from "./components/Fruits";
import Contacts from "./components/Contacts";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import SiteNav from "./components/SiteNav";
import "rc-pagination/assets/index.css";
//import Button from "./services/buttonServices";

//import SignUp from "./services/buttonServices";
import "./App.css";
import Login from "./components/Login";

class App extends Component {
	// // Implement Click Handler
	// onbuttonClick=()=>{
	//   console.log("onbuttonClick", new Date());
	// };

	state = {
		buttonClick: "unclicked",
	};
	clickChange = () => {
		this.setState({
			buttonClick: "clicked",
		});
		console.log("Clicked");
	};

	signUpClick = () => {
		this.setState({
			signupbuttonClick: "clicked",
		});
		console.log("signupClicked");
	};

	componentDidMount() {
		console.log("componentDidMount");
		console.log(this.state);
	}

	render() {
		return (
			<React.Fragment>
				<BrowserRouter>
					<SiteNav />

					<main role="main">
						{/* <div className="container">
            <div className="p-5 mb-4 bg-light rounded-3">
              <div className="container-fluid py-5"> */}
						{/* <h1 className="display-5 fw-bold">Hello, world!</h1> */}
						<p className="col-md-8 fs-4">
							<Switch>
								<Route path="/register" exact component={Register} />
								<Route path="/login" exact component={Login} />
							</Switch>
						</p>
						{/* </div>
            </div>
          </div> */}
						<div className="container">
							<div className="row">
								<div className="col-md-4">
									<h2>Heading</h2>
									<p>
										Donec id elit non mi porta gravida at eget metus. Fusce
										dapibus, tellus ac cursus commodo, tortor mauris condimentum
										nibh, ut fermentum massa justo sit amet risus. Etiam porta
										sem malesuada magna mollis euismod. Donec sed odio dui.
									</p>
									<p>
										<button className="btn btn-secondary">
											View details &raquo;
										</button>
									</p>
								</div>
								<div className="col-md-4">
									<h2>Heading</h2>
									<p>
										Donec id elit non mi porta gravida at eget metus. Fusce
										dapibus, tellus ac cursus commodo, tortor mauris condimentum
										nibh, ut fermentum massa justo sit amet risus. Etiam porta
										sem malesuada magna mollis euismod. Donec sed odio dui.
									</p>
									<p>
										<button className="btn btn-secondary">
											View details &raquo;
										</button>
									</p>
								</div>
								<div className="col-md-4">
									<h2>Heading</h2>
									<p>
										Donec sed odio dui. Cras justo odio, dapibus ac facilisis
										in, egestas eget quam. Vestibulum id ligula porta felis
										euismod semper. Fusce dapibus, tellus ac cursus commodo,
										tortor mauris condimentum nibh, ut fermentum massa justo sit
										amet risus.
									</p>
									<p>
										<button className="btn btn-secondary">
											View details &raquo;
										</button>
									</p>
								</div>
							</div>

							<hr />
						</div>
					</main>

					<footer className="container">
						<row>
							<div>
								<NavLink to="/Contacts">Contact Us</NavLink>
								<Route path="/Contacts" exact component={Contacts}>
									{" "}
									Sabio@test.email.com
								</Route>
							</div>
							<div>
								<Route path="/Fruits" component={Fruits}>
									fruits
								</Route>
							</div>
						</row>
						<p>&copy; Sabio 2019-2020</p>
					</footer>
				</BrowserRouter>
			</React.Fragment>
		);
	}
}

export default App;
