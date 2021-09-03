import React from "react";

import "./App.css";

const config = {
    method: "POST",
    url: "https://api.remotebootcamp.dev/api/users/register",
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
};


//<nav className="navbar navbar-expand-md navbar-dark bg-dark sabio"></nav>
<form>
    <h1 class="h3 mb-3 fw-normal">Registration</h1>
    <div class="form-floating">
        <input type="firstName" class="form-control" id="floatingFirstName" placeholder="firstName"></input>
        <label for="floatingFirstName">First Name</label>
    </div>
    <div class="form-floating">
        <input type="lastName" class="form-control" id="floatingLastName" placeholder="lastName"></input>
        <label for="floatingLastName">Last Name</label>
    </div>
    <div class="form-floating">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"></input>
        <label for="floatingInput">Email</label>
    </div>
    <div class="form-floating">
        <input for="password" class="form-control" id="floatingPassword" placeholder="password"></input>
        <label for="floatingPassword">Password</label>
    </div>
    <div class="form-floating">
        <input for="retypePassword" class="form-control" id="floatingRetypePassword" placeholder="retypePassword"></input>
        <label for="floatingRetypePassword">Retype Password</label>
    </div>
    <div class="form-floating">
        <input for="avatarUrl" class="form-control" id="floatingAvatarUrl" placeholder="avatarUrl"></input>
        <label for="floatingAvatarUrl">Avatar Url</label>
    </div>
    <div class>
        <input type="checkbox" class="form-check-input" id="agreeCheckbox">
        <label class="form-check-label" for="agreeCheckbox">I agree to the terms</label>
        <button type="submit" class="btn btn-primary">Register</button>
    </div>
</form>



