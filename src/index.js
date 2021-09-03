import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./services/serviceHelper";
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import "sweetalert2/dist/sweetalert2.min.css";
import { ToastContainer } from "react-toastify";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

export { default as AjaxPostEntity } from './components/AjaxForm';
export { default as FooterTemplate  } from './Footer';
export { default as NavigationBar   } from './navBar';
export { default as HeroSection } from './HeroSection';
export { default as UserLogin  } from './components/login';
//export { default as PersonForm} from './components/AddFriend';
export {default as MapPresidents} from './components/Presidents';
export {default as CarsMap} from './components/Cars'



ReactDOM.render(
  <React.Fragment>
    <App></App>
    <ToastContainer />
  </React.Fragment>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
