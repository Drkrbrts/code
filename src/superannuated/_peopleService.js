// var peopleService = {
//     endpoint: "https://api.remotebootcamp.dev/api/people"
// }

// peopleService.getPaginated = (numberOfPeople) => {
//     console.log(numberOfPeople)
//     const config = {
//         method: "GET",
//         url: `${peopleService.endpoint}/paginate?pageIndex=0&pageSize=${numberOfPeople}`,
//         crossdomain: true,
//         headers: { "Content-Type": "application/json" },
//     };
//     return axios(config).then(response => response.data.item.pagedItems)
// }
