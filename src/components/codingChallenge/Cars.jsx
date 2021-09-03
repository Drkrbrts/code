import React from "react";
import { Container } from "react-bootstrap";
import { withRouter } from "react-router-dom";

class Cars extends React.Component {
  state = {
    cars: [
      {
        avatar:
          "https://images.hgmsites.net/hug/2020-kia-sorento_100722275_h.jpg",
        make: "Kia",
        model: "Sorento",
        year: 2020,
        id: 0,
      },
      {
        avatar:
          "https://www.thetruthaboutcars.com/wp-content/uploads/2018/03/13742_Optima-e1522429234156.jpg",
        make: "Kia",
        model: "Optima",
        year: 2019,
        id: 1,
      },
      {
        avatar:
          "https://gaadiwaadi.com/wp-content/uploads/2020/10/2021-Tesla-Model-3-feature.jpg",
        make: "Tesla",
        model: "Model 3",
        year: 2021,
        id: 2,
      },
      {
        avatar:
          "https://www.chicagoautoshow.com/assets/1/23/VehicleRegularDimensionId/2019-Honda-Civic-1.jpg",
        make: "Honda",
        model: "Civic",
        year: 2019,
        id: 3,
      },
      {
        avatar:
          "http://images.newcars.com/images/car-pictures/original/2018-Honda-Accord-Sedan-LX-4dr-Sedan-Exterior-2.png",
        make: "Honda",
        model: "Accord",
        year: 2018,
        id: 4,
      },
      {
        avatar:
          "https://carros2021.pro.br/wp-content/uploads/2020/04/VW-Jetta-2021-8.jpg",
        make: "Volkswagen",
        model: "Jetta",
        year: 2021,
        id: 5,
      },
      {
        avatar:
          "https://cdn.motor1.com/images/mgl/PpxnX/s1/2021-toyota-camry-xse-hybrid.jpg",
        make: "Toyota",
        model: "Camry",
        year: 2021,
        id: 6,
      },
      {
        avatar:
          "https://pictures.topspeed.com/IMG/jpg/201806/2019-ford-mustang---.jpg",
        make: "Ford",
        model: "Mustang",
        year: 2019,
        id: 7,
      },
      {
        avatar:
          "https://st.automobilemag.com/uploads/sites/11/2018/05/2019-Ford-F-150-Raptor-front-three-quarter-02.jpg",
        make: "Ford",
        model: "F-150",
        year: 2019,
        id: 8,
      },
      {
        avatar:
          "https://assets.newcars.com/images/car-pictures/original/2020-Toyota-Camry-Sedan-L-4dr-Sedan-Photo-1.png",
        make: "Toyota",
        model: "Camry",
        year: 2020,
        id: 9,
      },
      {
        avatar:
          "https://www.fordfd.com/wp-content/uploads/2020/03/2021-Ford-F150-Exterior.jpg",
        make: "Ford",
        model: "F-150",
        year: 2021,
        id: 10,
      },
    ],
    visible: false,
    carYear: 0,
    filteredCars: [],
  };

  onFormFieldChange = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;

    this.setState(() => {
      let carYear = { ...this.state.carYear };
      carYear = newValue;

      return { carYear };
    });
  };

  mapCars = (oneCar) => {
    return (
      <div key={`Cars-${oneCar.id}`} className="col-md-3 m-1">
        <img src={oneCar.avatar} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{oneCar.model}</h5>
          <h5 className="card-text">{oneCar.make}</h5>
          <h5 className="card-text">{oneCar.year}</h5>
        </div>
      </div>
    );
  };

  filterBy2021(car) {
    let result = [car];

    if (car.year === 2021) {
      return result;
    }
  }

  filterBy2020(car) {
    let result = [car];

    if (car.year === 2020) {
      return result;
    }
  }

  filterBy2019(car) {
    let result = [car];

    if (car.year === 2019) {
      return result;
    }
  }

  btnClicked = () => {
    if (this.state.carYear === "2021") {
      this.setState({
        filteredCars: this.state.cars.filter(this.filterBy2021),
      });
    } else if (this.state.carYear === "2020") {
      this.setState({
        filteredCars: this.state.cars.filter(this.filterBy2020),
      });
    } else if (this.state.carYear === "2019") {
      this.setState({
        filteredCars: this.state.cars.filter(this.filterBy2019),
      });
    } else
      this.setState({
        filteredCars: this.state.cars,
      });

    this.setState({ visible: !this.state.visible });
  };

  render() {
    return (
      <Container>
        <div className="form-group">
          <label htmlFor="carYear">Car Year</label>
          <select
            className="form-control"
            value={this.state.cars.year}
            onChange={this.onFormFieldChange}
            name="carYear"
          >
            <option value="">All Cars</option>
            <option value={this.state.carYears}>2021</option>
            <option value={this.state.carYears}>2020</option>
            <option value={this.state.carYears}>2019</option>
          </select>
        </div>
        <button className="btn btn-danger" onClick={this.btnClicked}>
          Show Cars
        </button>
        <div>
          {this.state.visible ? this.state.filteredCars.map(this.mapCars) : ""}
        </div>
      </Container>
    );
  }
}

export default withRouter(Cars);
