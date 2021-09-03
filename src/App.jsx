import "./App.css";
import React, { Component } from "react";
import { withRouter, Route } from "react-router-dom";

import * as Components from './Components'
import * as Views from './Views'

import Widget from './Components/codingchallenge/Widget'

//!<-----TODO List----->
//TODO: Set up conditional rendering for 
//?                if(id != "") render Home
//?                else render Login

//TODO: Pass app state to login and have it set up id with return user id
//TODO: have Home (getUserById) to display user information.
//TODO: Set up conditional rendering for SiteNav
//?                if(notLogin) render Login/Sign-up buttons
//?                else render logout button
//!<------------------->



class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			tenantId: "U0250AX5C3D",
			id: "",
			isLogged: false
		}
		this.handleId = this.handleId.bind(this);
		// this.isLoggedIn = this.isLoggedIn(this.state.id, this.state.isLogged);
	}


	handleId(id, bool) {
		this.setState({ id: id })
		this.setState({ isLogged: bool })
	}

	isLoggedIn(isLogged) {
		if (!isLogged) {
			this.props.history.push("/login")
		}
		else {
			this.props.history.push("/")
		}
	}

	render() {
		return (
			<React.Fragment>
				<Components.SiteNav />

				<main role="main">
					<Route
						path="/register"
						exact
						render={() => <Views.Register
							{...this.props}
							tenantId={this.state.tenantId}
							id={this.state.id}
							setUserId={this.handleId}
						/>}
					/>
					<Route
						path="/login"
						exact
						render={() => <Views.Login
							{...this.props}
							setUserId={this.handleId}
						/>}
					/>
					<Route
						path="/"
						exact
						render={() => <Views.Home
							{...this.props}
						/>}
					/>

					<Route
						path="/widget"
						exact
						render={() => <Widget />} />
				</main>

				<Components.Footer />
			</React.Fragment>
		);
	}
}

export default withRouter(App);
