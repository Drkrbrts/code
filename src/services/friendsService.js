import axios from "axios"

var friendsService = {
    endpoint: "https://api.remotebootcamp.dev/api/friends"
}

friendsService.showAll = () => {
    let people = {
        title: "testTitle",
        id: 1,
        first_name: "fakeFirstName",
        last_name: "fakeLastName",
        email: "fakeemail@gmail.com",
        gender: "Male",
        bio: "test data",
        slug: "fakeslug",
        summary: "test data",
        headline: "test data",
        primaryImage: "test data",


      }; 
    const config = {
        method: "POST",
        url: friendsService.endpoint,
        data: people,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }

    }
    return axios(config)

}

export {friendsService}