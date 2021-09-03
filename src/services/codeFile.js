import axios from "axios";

let submit = () => {

    var payload = { 
      Name: [
        "Bronco"
    ],
    Manufacturer: [
        "Ford"
    ],
    Description: [
        "Tuck"
    ],
    Cost: [
        50000
    ], };

  const config = {
    method: "POST",
    url: "https://api.remotebootcamp.dev/api/entities/Cars",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};


export { submit };