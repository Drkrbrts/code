import React from "react";
import register from "./registerService";
//import postEntity from "./EntityService"
import Login from "./userService";

function Button(props) {
	console.log(props);
	//var data = props
	//register(props.submitdata);
	//postEntity(props.submitdata);
	Login();
	console.log(Login());
	return (
		<button
			onClick={props.click}
			submitdata={props.submitData}
			type="submit"
			class="btn btn-warning"
		>
			Login
		</button>
	);
}

function SignUp(props) {
	console.log(props);
	//var data = props
	register(props.submitdata);
	//postEntity(props.submitdata);
	Login();
	return (
		<button
			onClick={props.click}
			signUpata={props.submitData}
			type="submit"
			class="btn btn-primary"
		>
			Sign-up
		</button>
	);
}

export { Button, SignUp };
