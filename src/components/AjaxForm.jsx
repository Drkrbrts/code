import React from "react";
import axios from "axios";




class AjaxPostEntity extends React.Component {
    state = {
        input: {},
    };

    saveInputs = (event) => {
        var key = event.target.name;
        this.state.input[key] = event.target.value;
        this.setState({ [key]: event.target.value });
    };

    saveData = () => {
        console.log(this.state);
        var currentthis = this;

        //Use for JSON POST REQUEST
        // axios

        //   .post("https://api.remotebootcamp.dev/api/entities/artists", {
        //     name: this.state.name,
        //     manufacturer: this.state.manufacturer,
        //     description: this.state.description,
        //     cost: this.state.cost,
        //   })
        //   .then(function (response) {
        //     //Success Callback
        //     console.log(response);
        //   })
        //   .then(function (error) {
        //     //Error Callback
        //     console.log(error);
        //   })
        //   .then(function () {
        //     //Always Callback
        //     console.log("Always Running");
        //   });

        //Use for POST FORM REQUEST

        // var formData = new FormData();
        // formData.set("name", this.state.name);
        // formData.set("manufacturer", this.state.manufacturer);
        // formData.set("description", this.state.description);
        // formData.set("cost", this.state.cost);

        // axios
        //   .post("https://api.remotebootcamp.dev/api/entities/artists", formData, {
        //     headers: { "Content-Type": "application/json" },
        //   })
        //   .then(function (response) {
        //     //Success Callback
        //     console.log(response);
        //   })
        //   .then(function (error) {
        //     //Error Callback
        //     console.log(error);
        //   })
        //   .then(function () {
        //     //Always Callback
        //     console.log("Always Running");
        //   });







        console.log(this.state.input);
        var formData = new FormData();
        for (var data in this.state.input) {
            formData.set(data, this.state.input[data]);
        }







        axios
            .post("https://api.remotebootcamp.dev/api/entities/artists", formData, {
                headers: { "Content-Type": "application/json" },
            })
            .then(function (response) {
                //Success Callback
                console.log(response);
            })
            .then(function (error) {
                //Error Callback
                console.log(error);
            })
            .then(function () {
                //Always Callback
                console.log("Always Running");
            });
    };

    render() {

        return (
            
            <React.Fragment>

                <h1>AJAX POST </h1>
                <input
                    name="name"
                    placeholder="Enter Name :"
                    onChange={this.saveInputs}
                />
                <br />
                <input
                    name="manufacturer"
                    placeholder="Manufacturer :"
                    onChange={this.saveInputs}
                />
                <br />
                <input
                    name="description"
                    placeholder="Description:"
                    onChange={this.saveInputs}
                />
                <br />
                <input
                    name="cost"
                    placeholder="Cost:"
                    onChange={this.saveInputs}
                />
                <br />
                <button id="save_data" onClick={this.saveData}>
                    Save Data Using Ajax
                </button>
                <br />
            </React.Fragment>
        );
    }
}

export default AjaxPostEntity;