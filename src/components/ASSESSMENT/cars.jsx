import React from "react"
import { render } from "react-dom"
import CarsCards from "./carsCard"

class Cars extends React.Component {
	state = {
		cars: [
			{
				make: "Kia",
				model: "Sorento",
				year: 2020,
			},
			{
				make: "Kia",
				model: "Optima",
				year: 2019,
			},
			{
				make: "Tesla",
				model: "Model 3",
				year: 2021,
			},
			{
				make: "Honda",
				model: "Civic",
				year: 2019,
			},
			{
				make: "Honda",
				model: "Accord",
				year: 2018,
			},
			{
				make: "Volkswagen",
				model: "Jetta",
				year: 2021,
			},
			{
				make: "Toyota",
				model: "Camry",
				year: 2021,
			},
			{
				make: "Ford",
				model: "Mustang",
				year: 2019,
			},
			{
				make: "Ford",
				model: "F-150",
				year: 2019,
			},
			{
				make: "Toyota",
				model: "Camry",
				year: 2020,
			},
			{
				make: "Ford",
				model: "F-150",
				year: 2021,
			},
		],
	}

	componentDidMount = () => {
		this.mappedCars()
	}
	mappedCars = () => {
		this.setState(() => {
			return {
				mappedCars: this.state.cars.map(this.mapCar),
			}
		})
	}

	handleClick = () => {
		this.setState({ showCards: !this.state.showCards ? true : false })
	}
	mapCar = (car) => <CarsCards cars={car} key={car.model + car.year} />

	dropDownHandle = (e) => {
		this.setState({
			value: e.target.value,
		})
		this.filterCars()
	}

	filterCars = () => {
		this.setState(() => {
			return {
				filteredCars: this.state.cars
					.filter((car) => car.year == this.state.value)
					.map(this.mapCar),
			}
		})
	}
	render() {
		return (
			<div>
				<button onClick={this.handleClick}>Show Cars</button>
				<div
					className="mappedCars"
					style={{ display: !this.state.showCards ? "block" : "none" }}
				>
					<select
						onChange={this.dropDownHandle}
						className="cars"
						id="cars"
						style={{ display: "block" }}
					>
						<option value="all">All</option>
						<option value="2021">2021</option>
						<option value="2020">2020</option>
						<option value="2019">2019</option>
					</select>
					{!this.state.filteredCars
						? this.state.mappedCars
						: this.state.filteredCars}
				</div>
			</div>
		)
	}
}

export default Cars
