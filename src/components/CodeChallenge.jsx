import axios from "axios";
import React, { Component } from "react"
import { BrowserRouter, Route } from "react-router-dom"
import "./App.css";

class Product extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            manufacturer: "",
            description: "",
            cost: 100
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        axios.post("https://api.remotebootcamp.dev/api/entities", this.state)
        .then(response =>{
            console.log(response)
        })
    }



    render() {
        const {name, manufacturer, description, cost} = this.state
        return (
            <BrowserRouter>
                <form onSubmit={handleSubmit}>
                    <h1 class="h3 mb-3 fw-normal">Product</h1>
                    <div class="form-floating">
                        <input type="name" class="form-control" id="floatingName" placeholder="name"></input>
                        <label for="floatingName">Name</label>
                    </div>
                    <div class="form-floating">
                        <input type="manufacturer" class="form-control" id="floatingManufacterer" placeholder="manufacturer"></input>
                        <label for="floatingManufacturer">Manufacturer</label>
                    </div>
                    <div class="form-floating">
                        <input type="description" class="form-control" id="floatingDescription" placeholder="description"></input>
                        <label for="floatingDescription">Description</label>
                    </div>
                    <div class="form-floating">
                        <input for="cost" class="form-control" id="floatingCost" placeholder="cost"></input>
                        <label for="floatingCost">Cost</label>
                    </div>
                    <button type="submit">Create</button>
                </form>
            </BrowserRouter>
        )
    }
}