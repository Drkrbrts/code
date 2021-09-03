import axios from "axios";
import "toastr";

let login = (data) => {

    var payload = {
        "email": data.emailAddress,
        "password": data.passwordOriginal,
        "tenantId": "U02BDNKCB9A"
    }
    const config = {
        method: "POST",
        url: "https://api.remotebootcamp.dev/api/users/login",
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };

    return axios(config)
    // .then(Toastr.info(test))cher
    // .catch(function (response) {
    //     console.warn(response)
    // });
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


export default login; // export all your calls here

// if you had three functions to export 
// export { logIn, register, thirdFunction }