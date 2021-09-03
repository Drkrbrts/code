import React from "react";
import ".App.css";
import {Route, NavLink} from "react-router-dom"
import NewComponent from "./services/code challenge/NewComponent";

class App extends React.Component {

render(){
    return ( 
    <div className="App">
        <header className="App=header">
        <div>
            <NavLink to="/newComponent"> Show </NavLink>
        </div>
        <div>
            <Route path="/newcCmponent" exact={true} component={NewComponent} ></Route>
        </div>
        <div>
            <p>Hello World, I Love Code</p>
        </div>
        </header>
    </div>
    );
 }
}

export default App;