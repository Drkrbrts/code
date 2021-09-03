import axios from "axios";
const endpoint = "https://localhost:50001/api/emails/";

const resetPasswordEmail = (email) => {
  console.log("usersService resetPassword firing", email);
  const config = {
    method: "GET",
    url: `${endpoint}resetpassword/${email}`,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

export { resetPasswordEmail };
