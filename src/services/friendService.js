import axios from "axios";

var add = (payload) =>
{
    const config = {
        method: "POST",
        url: "https://api.remotebootcamp.dev/api/friends",
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
      };

    return axios(config);
}

var getAll = (pageIndex, pageSize) =>
{
    const config = {
        method: "GET",
        url: `https://api.remotebootcamp.dev/api/friends?pageIndex=${pageIndex}&pageSize=${pageSize}`,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
      };

    return axios(config);
}

var deleteById = (id) =>
{
  const config = {
    method: "DELETE",
    url: `https://api.remotebootcamp.dev/api/friends/${id}`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
}

var updateByPayload = (payload, id) =>
{
  const config = {
    method: "PUT"
    ,url: `https://api.remotebootcamp.dev/api/friends/${id}`
    ,data: payload
    ,crossdomain: true
    ,headers: { "Content-Type": "application/json" }
  };

  return axios(config);
}

export { add, getAll, deleteById , updateByPayload };