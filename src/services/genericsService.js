import axios from "axios";

const endpoint = "https://api.remotebootcamp.dev/api";

const add = (service, item) => {
  console.log("genericsService add firing", service, item);

  const config = {
    method: "POST",
    url: `${endpoint}/${service}`,
    data: item,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

const edit = (service, item) => {
  console.log("genericsService edit firing", service, item);

  const config = {
    method: "PUT",
    url: `${endpoint}/${service}/${item.id}`,
    data: item,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

const getBy = (service, id) => {
  console.log("genericsService getBy firing", service, id);
  const config = {
    method: "GET",
    url: `${endpoint}/${service}/${id}`,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

const getPaginated = (service, pageIndex, pageSize) => {
  console.log(
    "genericsService getPaginated firing",
    service,
    pageIndex,
    pageSize
  );
  const config = {
    method: "GET",
    url: `${endpoint}/${service}?pageIndex=${pageIndex}&pageSize=${pageSize}`,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

const search = (service, pageIndex, pageSize, searchTerm) => {
  console.log(
    "genericsService search firing",
    service,
    pageIndex,
    pageSize,
    searchTerm
  );
  const config = {
    method: "GET",
    url: `${endpoint}/${service}/search?pageIndex=${pageIndex}&pageSize=${pageSize}&q=${searchTerm}`,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

const deleteById = (service, id) => {
  console.log("genericsService delete firing", service, id);
  const config = {
    method: "DELETE",
    url: `${endpoint}/${service}/${id}`,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config).then(() => {
    return id;
  });
};

export { add, edit, getBy, getPaginated, search, deleteById };
