import axios from "axios";

var peopleEndpoint = "https://api.remotebootcamp.dev/api/people";
let getPaginated = (numberOfPeople) => {
  console.log(numberOfPeople);
  const config = {
    method: "GET",
    url: `${peopleEndpoint}/paginate?pageIndex=0&pageSize=${numberOfPeople}`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

export { getPaginated };
