import axios from "axios";

var blogsEndpoint = "https://api.remotebootcamp.dev/api/blogs";

let getAll = () => {
  const config = {
    method: "GET",
    url: blogsEndpoint,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let add = (authorId, title, content) => {
  var payload = {
    authorId: authorId,
    title: title,
    content: content,
  };

  const config = {
    method: "POST",
    url: blogsEndpoint,
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

let getById = (id) => {
  const config = {
    method: "GET",
    url: `${blogsEndpoint}/${id}`,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config)
    .then(function (data) {
      console.log(data);
    })
    .catch(function (data) {
      console.warn(data);
    });
};

//update a blog
let update = (blogId, authorId, title, content) => {
  var payload = {
    authorId: authorId,
    title: title,
    content: content,
  };

  const config = {
    method: "PUT",
    url: `${blogsEndpoint}/${blogId}`,
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config)
    .then(function (data) {
      console.log(data);
    })
    .catch(function (data) {
      console.warn(data);
    });
};

export { getAll, add, getById, update };
