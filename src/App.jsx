import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Footer from "./Components/Footer"
import Content from "./Components/Content"
import Jumbo from "./Components/Jumbo"
import SiteNav from "./Components/SiteNav"


import "./App.css";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<SiteNav />
				<main role="main">
					<Route path="/page-1" exact component={Jumbo}></Route>
					<Content />
				</main>
				<Footer />
			</BrowserRouter>
		);
	}
}

export default App;
