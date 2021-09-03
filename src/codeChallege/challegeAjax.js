import axios from "axios"

export var codeChallegePost = (payload) =>{
    const config = {
        method: "POST",
        url: "https://api.remotebootcamp.dev/api/entities/codechalleges",
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
      }
      return axios(config)
}