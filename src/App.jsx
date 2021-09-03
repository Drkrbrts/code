import "./App.css";
import React, { Component } from "react";
import { withRouter, Route, Redirect } from "react-router-dom";

import * as userServices from './services/userService'
import * as Components from './Components'
import * as Views from './Views'

import Widget from './Components/codingchallenge/Widget'
import Cars from './Components/codingchallenge/Cars'
import { toast } from "react-toastify";

//!<-----TODO List----->
//// Set up conditional rendering for home page 
//// have Home (getUserById) to display user information.
//// Set up conditional rendering for SiteNav login/logout button
//TODO: Work on friends page, have view render all friends from database
//?			Get pagination to work.
//TODO: Set up add/edit friend form on addFriend route
//!<------------------->



class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tenantId: "U0250AX5C3D",
			userId: "",
			currentUser: {},
			isLogged: false
		}
	}

	componentDidMount() {
		userServices.current()
			.then(data => {
				userServices.getInfo(data.item.id)
					.then(data => {
						this.setState({
							currentUser: { ...data.item }
						})
					})
			})
			.catch(error => console.log(error))
	}

	isLoggedIn = () => {
		this.setState({ isLogged: true })
	}

	//* Handles Logout
	isLoggedOut = () => {
		userServices.logout()
			.then(() => {
				toast.success('Good Bye!')
				this.setState({ isLogged: false })
			})
			.catch(error => console.log(error))
		this.props.history.push("/login")
	}

	//* Collects all of current users info
	getUserInfo = () => {

	}

	//* Renders the "main" container
	renderMain = () => {
		const isLogged = this.state.isLogged;
		return (
			<main role="main">
				{isLogged
					? (
						<React.Fragment>
							<Route
								path="/"
								exact
								render={() => <Views.Home
									{...this.props}
									key={this.state.isLogged}
									currentUser={this.state.currentUser}
									isLogged={this.state.isLogged}
									getUserInfo={this.getUserInfo}
								/>}
							/>
							<Route
								path="/friends"
								exact
								render={() => <Views.Friends
									{...this.props}
								/>}
							/>
							<Route
								path="/friends/addFriend"
								exact
								render={() => <Views.FriendForm
									{...this.props}
								/>}
							/>
						</React.Fragment>
					)
					: <Redirect to="/login" />
				}
				<Route
					path="/register"
					exact
					render={() => <Views.Register
						{...this.props}
						tenantId={this.state.tenantId}
						isLogged={this.state.isLogged}
					/>}
				/>
				<Route
					path="/login"
					exact
					render={() => <Views.Login
						{...this.props}
						isLogged={this.isLoggedIn}
					/>}
				/>
			</main>
		)
	}
	render() {
		return (
			<React.Fragment>
				<Components.SiteNav
					isLogged={this.state.isLogged}
					isLoggedOut={this.isLoggedOut}
				/>
				{/* {this.renderMain()} */}
				<Route
					path="/widget"
					exact
					render={() => <Widget />}
				/>
				<Route
					path="/cars"
					exact
					render={() => <Cars />}
				/>
				<Components.Footer />
			</React.Fragment>
		);
	}
}

export default withRouter(App);
