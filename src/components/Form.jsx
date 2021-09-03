import axios from "axios";

let Form = () => {

    var payload = 
    {
        title: "The Count of Monte Cristo" , 
        body: "Dantes took the chest by the handles and tried to lift it, but that was quite impossible. He tried to open it: it was locked. He inserted the sharp end of his pickaxe between the chest and the lid and burst it open. The chest was uncovered!", 
        userId: "Alexandre Dumas"
    }

    const config = {
      method: "GET",
      url: "https://api.remotebootcamp.dev/api/entities/books",
      data: payload,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };
  
    return axios(config)
    
  };

export default Form
