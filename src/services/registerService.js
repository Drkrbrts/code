import axios from "axios";
import success from "./toasterSuccess";

let register = (data) => {

    var payload = {
        "firstName": data.firstName,
        "lastName": data.lastName,
        "email": data.emailAddress,
        "password": data.passwordOriginal,
        "passwordConfirm": data.passwordConfirm,
        "avatarUrl": data.avatarURL,
        "tenantId": "U02BDNKCB9A"
    }
    const config = {
        method: "POST",
        url: "https://api.remotebootcamp.dev/api/users/register",
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };

    console.log("test register", data);
    return axios(config)
    .then(success())
    
    .catch(function (response) {
        console.warn(response)
    });
};


// let register = (payload, onSuccess, onError) => {

//   const config = {
//     method: "_PICK_A_HTPP_METHOD_FOR_THIS_ENDPOINT",
//     url: "_AnOther_URL_GOES_HERE",
//     data: payload,
//     withCredentials: true,
//     crossdomain: true,
//     headers: { "Content-Type": "application/json" }
//   };

//   return axios(config);
// };


export default register; // export all your calls here

// if you had three functions to export 
// export { logIn, register, thirdFunction }