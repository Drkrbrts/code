import React from 'react';
import { toast } from 'react-toastify';
import * as widgetService from './widgetService'


class Widget extends React.Component {

    state = {
        formData: {
            id: "",
            name: "",
            manufacturer: "",
            description: "",
            cost: ""
        }
    }

    onChangeHandler = e => {
        const target = e.target,
            value = target.value,
            name = target.name;

        this.setState(() => {
            let newState = { ...this.state.formData }
            newState[name] = value;

            return { formData: newState };
        });
    };

    onCreate = e => {
        e.preventDefault();
        const widget = { ...this.state.formData };

        widgetService
            .create(widget)
            .then(data => {
                this.setState(prevState => {
                    const formData = { ...prevState.formData, id: data.item };
                    console.log(`Widget created with id: ${data.item}`)

                    return { ...prevState, formData: formData };
                });
            })
            .then(() => { this.callComplete(this.state.formData.id); })
            .catch(error => console.log(error));
    };

    callComplete = id => {
        if (id)
            return toast.success('You made a widget with id: ' + id);
        else
            return;
    }

    render() {
        return (
            <div className="container col-8 border pb-4 my-4">
                <h3 className="text-center my-4">Create a Widget</h3>
                <form id="reg-form" className="form-group">
                    <input
                        className="form-control mb-2"
                        name="name"
                        type="text"
                        placeholder="Name"
                        value={this.state.formData.name}
                        onChange={this.onChangeHandler}
                    />
                    <input
                        className="form-control mb-2"
                        name="manufacturer"
                        type="text"
                        placeholder="Manufacturer"
                        value={this.state.formData.manufacturer}
                        onChange={this.onChangeHandler}
                    />
                    <input
                        className="form-control mb-2"
                        name="description"
                        type="text"
                        placeholder="Desicription"
                        value={this.state.formData.description}
                        onChange={this.onChangeHandler}
                    />
                    <input
                        className="form-control mb-2"
                        name="cost"
                        type="number"
                        placeholder="Cost"
                        value={this.state.formData.cost}
                        onChange={this.onChangeHandler}
                    />

                    <div className="form-group d-flex justify-content-between mb-3">
                        <input
                            className="btn btn-primary register"
                            type="submit"
                            value="Create"
                            onClick={this.onCreate}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default Widget;