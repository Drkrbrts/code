import axios from "axios";
import {toast} from "react-toastify";


let postEntity = (data) => {

    var postURL = "https://api.remotebootcamp.dev/api/entities/"+ data.Name;

    var payload = {
        "Manufacturer": data.Manufacturer,
        "Discription": data.Discription,
        "Cost": data.Cost,
    }
    const config = {
        method: "POST",
        url: postURL,
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };

    return axios(config)
     .then(toast('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        }));
    // .catch(function (response) {
    //     console.warn(response)
    // });
};

export default postEntity; // export all your calls here

// if you had three functions to export 
// export { logIn, register, thirdFunction }