import React from "react";

import "./App.css";

const payload = {
    email: "atorres@sabio.la",
    password: "GoDucks19!",
    tenantId: "bootcamp1",
};
    logIn(payload)
        .then(this.onLogInSuccess)
        .catch(this.onLogInError);

    onLogInSuccess = (response) => {
        console.log(response, "Successful log in");
        return response.data;
    };

    onLogInError = (errResponse) => {
        console.log(errResponse, "Unsuccessful log in");
        return Promise.reject(errResponse);
    };

<form>
    <h1 class="h3 mb-3 fw-normal">Log In</h1>
    <div class="form-floating">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"></input>
        <label for="floatingInput">Email</label>
    </div>
    <div class="form-floating">
        <input for="password" class="form-control" id="floatingPassword" placeholder="password"></input>
        <label for="floatingPassword">Password</label>
    </div>
    <div>
        <button class="w-100 btn btn-lg btn-primary" type="submit">Log In</button>
    </div>
</form>