import React from "react"
import * as CarService from "../services/CarService";
import SingleCar from "./SingleCar";

//CREATED COMPONENT CALLED CARS
//DISPLAYED CARS COMPONENT ON APP.JSX
//RENDERED CARS ON PAGE
//USED TEMPLATE AS REFERENCE
//CREATED SHOW CARS BTN; COULD'T GET FUNCTIONALITY TO WORK
//CREATED DROPDOWN MENU W/ <SELECT> TAGS; COULD'NT GET FUNCTIONALITY TO WORK

class Cars extends React.Component {

  state = {
    formData: { make: ""
              , model: ""
              , year: "" 
  }
};
  

onChange = event => {
  const target = event.target;
  const value = target.value;
  const name = target.name;
  this.setState(prevState => {
    const updatedFormData = {
      ...prevState.formData
    };
    updatedFormData[name] = value;
    return { formData: updatedFormData };
  }, this.stateChanged);
};


componentDidMount() {
  CarService.getCars() //making axios call to get cars
    .then(this.onGetAllCarsSuccess)
    .catch(this.onGetAllCarsError)
};

mapCar = (oneCar) => { //passing props of one car
return (<SingleCar
  car={oneCar}
  key={oneCar.id}
  handleEdit={this.onHandleEdit}
  handleDelete={this.onHandleDelete}
/>)};


onGetAllCarsSuccess = (res) => {
  console.log(res)
  let allCars = res.data.items; //getting whole array of cars
  console.log(allCars)
  this.setState((prevState)=>{ //set state
    return {
      ...prevState, //copy of prevState
      mappedCars: allCars.map(this.mapCar) // creating another variable called mappedCars with the array of friends
    }
})
}

onGetAllCarsError = (err) => {
console.error({error: err})
}


  render() {
      return  <form>
      {/* <div>
      function showCars() { 
  const [show,setShow]=useState(true)
  return(
    <div className="App">
      {
        show? [
          {
              make: "Kia",
              model: "Sorento",
              year: 2020
          },
          {
              make: "Kia",
              model: "Optima",
              year: 2019
          },
          {
              make: "Tesla",
              model: "Model 3",
              year: 2021
          },
          {
              make: "Honda",
              model: "Civic",
              year: 2019
          },
          {
              make: "Honda",
              model: "Accord",
              year: 2018
          },
          {
              make: "Volkswagen",
              model: "Jetta",
              year: 2021
          },
          {
              make: "Toyota",
              model: "Camry",
              year: 2021
          },
          {
              make: "Ford",
              model: "Mustang",
              year: 2019
          },
          {
              make: "Ford",
              model: "F-150",
              year: 2019
          },
          {
              make: "Toyota",
              model: "Camry",
              year: 2020
          },
          {
              make: "Ford",
              model: "F-150",
              year: 2021
          }
      ] :null
      };

      <button onClick={()=>setShow(!show)} >Show Cars</button>
    </div>
      // **TRIED GETTING FUNCTIONALITY OF SHOW CARS BUTTON; COULD'NT GET TO WORK.**

  )
        </div> */}
        
        <button
        type="button" 
        className="btn btn-primary"
        style={{float: 'left'}}
        > 
         Show Cars 
        </button>

        
        <select class="form-select" aria-label="Default select example">
            <option selected>Year of Model</option>
            <option value="1">2019</option>
            <option value="2">2020</option>
            <option value="3">2021</option>
        </select>
    

        <div className="container">
                    <div className="row">
                        <div className="col-9"></div>
                            {this.state.mappedCars}
                   </div>
                </div>

    </form>
       
  }
}

export default Cars;