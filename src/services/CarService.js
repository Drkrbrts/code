import axios from "axios";



let getCars = () => {

    const config = {
      method: "GET",
      url: "https://api.remotebootcamp.dev/api/entities/Cars",
      data: "",
      withCredentials: true,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };
  
    return axios(config);
  };




// function showCars() { 
//   const[show,setShow]=useState(true)
//   return(
//     <div className="App">
//       {
//         show? [
//           {
//               make: "Kia",
//               model: "Sorento",
//               year: 2020
//           },
//           {
//               make: "Kia",
//               model: "Optima",
//               year: 2019
//           },
//           {
//               make: "Tesla",
//               model: "Model 3",
//               year: 2021
//           },
//           {
//               make: "Honda",
//               model: "Civic",
//               year: 2019
//           },
//           {
//               make: "Honda",
//               model: "Accord",
//               year: 2018
//           },
//           {
//               make: "Volkswagen",
//               model: "Jetta",
//               year: 2021
//           },
//           {
//               make: "Toyota",
//               model: "Camry",
//               year: 2021
//           },
//           {
//               make: "Ford",
//               model: "Mustang",
//               year: 2019
//           },
//           {
//               make: "Ford",
//               model: "F-150",
//               year: 2019
//           },
//           {
//               make: "Toyota",
//               model: "Camry",
//               year: 2020
//           },
//           {
//               make: "Ford",
//               model: "F-150",
//               year: 2021
//           }
//       ] :null
//       };

//       <button onClick={()=>setShow(!show)} >Show Cars</button>
//     </div>
//   )
// }

export {getCars};