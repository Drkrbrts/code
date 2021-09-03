import React, { Component } from "react";
import loginConfig from "../services/userService";
import { toast } from "react-toastify";
//import Button from "../services/loginButtonServices";

class Login extends Component {
	state = {
		formData: {
			email: " ",
			password: "",
			tenantId: "U02BDNKCB9A",
		},
	};

	onFormFieldChange = (e) => {
		let currentTarget = e.currentTarget;
		let newValue = currentTarget.value;
		let inputName = currentTarget.name;
		console.log({ newValue, currentTarget });

		this.setState(() => {
			let formData = { ...this.state.formData };
			formData[inputName] = newValue;
			console.log({ formData });

			return { formData };
		});
	};

	submit = () => {
		const payload = { ...this.state.formData };
		loginConfig(payload).then(this.buttonOnSuccess).catch(this.buttonOnError);
	};

	buttonOnSuccess = (response) => {
		toast.success(" Login Successful", {
			position: "top-right",
			autoClose: 3000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
		console.log({ response });
		console.log({ response });
	};

	buttonOnError = (response) => {
		toast.error(" Login Unuccessful", {
			position: "top-right",
			autoClose: 3000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
		console.log({ response });
		console.log({ response });
	};

	render() {
		return (
			<React.Fragment>
				{/* <BrowserRouter> */}
				<div class="row">
					<h1>Login Form</h1>
				</div>
				<div class="form-group">
					<label for="emailAddress" class="form-label">
						Email address
					</label>
					<input
						type="email"
						class="form-control email"
						id="emailAddress"
						name="emailAddress"
						aria-describedby="emailHelp"
						placeholder="Enter email"
						onChange={this.onFormFieldChange}
						value={this.state.formData.email}
					/>
					<small id="emailHelp" class="form-text text-muted">
						We'll never share your email with anyone else.
					</small>
				</div>
				<div class="form-group">
					<label for="passwordOriginal" class="form-label">
						Password
					</label>
					<input
						type="password"
						class="form-control"
						id="passwordOriginal"
						onChange={this.onFormFieldChange}
						name="passwordOriginal"
						placeholder="Password"
						value={this.state.formData.password}
					/>
				</div>
				<div>
					<br></br>
					<button type="submit" onClick={this.submit} class="btn btn-primary">
						Login
					</button>
					{/* <Button click={this.clickChange} submitdata = {this.state.formData}  /> */}
				</div>

				<success />

				{/* </form> */}

				{/* </BrowserRouter> */}
			</React.Fragment>
		);
	}
}

export default Login;
