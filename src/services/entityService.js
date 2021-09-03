import axios from "axios";

var add = (payload) =>
{
    const config = {
        method: "POST",
        url: "https://api.remotebootcamp.dev/api/entities/widgets",
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
      };
  
      return axios(config);
}

var getId = (id) =>
{
    const config = {
        method: "GET",
        url: "https://api.remotebootcamp.dev/api/entities/widgets/" + id,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
      };
  
      return axios(config);
}

export { add , getId};

//no id in post response

//login to info to post entitiy
// {
//     "email": "Verge@sabio.la",
//     "password": "Password2!^,",
//     "tenantId": "bootcamp2"
//   }

//entity post successful
// {
//     "item": "1317163617",
//     "isSuccessful": true,
//     "transactionId": "c822693a-bf87-4e5e-805e-a66892039f9f"
//   }

