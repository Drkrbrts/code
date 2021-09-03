import axios from "axios";

let getEventsByDate = () => {

    const config = {
        method: "GET",
        url: "https://api.remotebootcamp.dev/api/events/search?pageIndex=0&pageSize=5&dateStart=7%2F15%2F2021&dateEnd=7%2F16%2F2021",
        withCredentials: true,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
      };
    
      return axios(config);
}

export { getEventsByDate }