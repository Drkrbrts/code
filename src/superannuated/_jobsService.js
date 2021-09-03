var jobsService = {
  endpoint: "https://api.remotebootcamp.dev/api/jobs",
};

jobsService.getPaginated = () => {
  const config = {
    method: "GET",
    url: `${jobsService.endpoint}?pageIndex=0&pageSize=10`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

jobsService.add = (payload) => {
  const config = {
    method: "POST",
    url: jobsService.endpoint,
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

jobsService.update = (payload) => {
  const config = {
    method: "PUT",
    url: `${jobsService.endpoint}/${payload.id}`,
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

jobsService.getById = (id) => {
  const config = {
    method: "GET",
    url: `${jobsService.endpoint}/${id}`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

jobsService.search = (pageIndex, pageSize, searchQuery) => {
  const config = {
    method: "GET",
    url: `${jobsService.endpoint}/search?pageIndex=${pageIndex}&pageSize=${pageSize}&searchTerm=${searchQuery}`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

jobsService.changeStatusId = (id, statusIdInt) => {
  const config = {
    method: "PUT",
    url: `${jobsService.endpoint}/${id}/${statusIdInt}`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};
