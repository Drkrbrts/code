// var blogsService = {
//     endpoint: "https://api.remotebootcamp.dev/api/blogs"
//   }

//   //returns all blogs
//   blogsService.getAll = () => {
//     const config = {
//       method: "GET",
//       url: blogsService.endpoint,
//       crossdomain: true,
//       headers: { "Content-Type": "application/json" },
//     };

//     return axios(config);
//   };

//   //adds a new blog.
//   blogsService.add = (authorId, title, content) => {

//     // if(!authorId){
//     //   return console.log("To create a blog: params int,str,str (authorId, title, content)");
//     // }

//     var payload = {
//       "authorId": authorId,
//       "title": title,
//       "content": content
//     }

//     const config = {
//       method: "POST",
//       url: blogsService.endpoint,
//       data: payload,
//       crossdomain: true,
//       headers: { "Content-Type": "application/json" },
//     };

//     return axios(config);
//   };

//   //get blog by ID
//   blogsService.getById = (id) => {

//     // if(!id){
//     //   return console.log("params int (blogId)");
//     // }

//     const config = {
//       method: "GET",
//       url: blogsService.endpoint + "/" + id,
//       crossdomain: true,
//       headers: { "Content-Type": "application/json" }
//     };

//     return axios(config)
//       .then(function (data) {
//         console.log(data);
//       })
//       .catch(function (data) {
//         console.warn(data);
//       });
//   }

//   //update a blog
//   blogsService.update = (blogId, authorId, title, content) => {

//     var payload = {
//       "authorId": authorId,
//       "title": title,
//       "content": content
//     }

//     const config = {
//       method: "PUT",
//       url: blogsService.endpoint + "/" + blogId,
//       data: payload,
//       crossdomain: true,
//       headers: { "Content-Type": "application/json" }
//     }

//     return axios(config)
//       .then(function (data) {
//         console.log(data);
//       })
//       .catch(function (data) {
//         console.warn(data);
//       });

//   }
