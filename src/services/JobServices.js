import axios from "axios";

 addJobs= (payload) => {

    const config = {
      method: "POST",
      url: ,
      data: payload,
      withCredentials: true,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };
  
    return axios(config);
  };

  export {addJobs};