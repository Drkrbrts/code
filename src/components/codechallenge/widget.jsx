import React from "react";
import debug from "sabio-debug";
import createWidget from "./codeChallengeService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const _logger = debug.extend("Widget");

class Widget extends React.Component
{
    state = {
        formData: {
            "name": "",
            "manufacturer": "",
            "description": "",
            "cost": 0
        }
    }


    onChangeFunction = (e) =>
    {
        let inputName = e.currentTarget.name;
        let inputValue = e.currentTarget.value;
        _logger(inputName, inputValue)

        this.setState(() =>
        {
            let formData = { ...this.state.formData };
            formData[inputName] = inputValue;
            return { formData }
        })

    }

    notify = (entityIdForToastMessage) =>
    {
        toast.success(`Entity created! Entity Id: ${entityIdForToastMessage}`)
    }

    onCreateWidgetSuccess = (response) =>
    {
        _logger("onCreateWidgetSuccess", response);
        let entityId = response.data.item;
        _logger("Entity ID:", entityId)
        this.notify(entityId);

    }

    onCreateWidgetFail = (response) =>
    {
        _logger("onCreateWidgetFail", response);
    }

    onCreateWidgetButtonClicked = () =>
    {
        _logger("onCreateWidgetButtonClicked");
        let widgetInfo = this.state.formData;
        createWidget(widgetInfo)
            .then(this.onCreateWidgetSuccess)
            .catch(this.onCreateWidgetFail)
    }

    render()
    {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 p-5">
                        <ToastContainer />
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name:</label>
                                <input type="text"
                                    className="form-control"
                                    name="name"
                                    value={this.state.formData.name}
                                    onChange={this.onChangeFunction}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="manufacturer" className="form-label">Manufacturer:</label>
                                <input type="text"
                                    className="form-control"
                                    name="manufacturer"
                                    value={this.state.formData.manufacturer}
                                    onChange={this.onChangeFunction}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description:</label>
                                <input type="text"
                                    className="form-control"
                                    name="description"
                                    value={this.state.formData.description}
                                    onChange={this.onChangeFunction}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="cost" className="form-label">Cost:</label>
                                <input type="text"
                                    className="form-control"
                                    name="cost"
                                    value={this.state.formData.cost}
                                    onChange={this.onChangeFunction}
                                />
                            </div>
                        </form>
                        <button type="button" className="btn btn-success" onClick={this.onCreateWidgetButtonClicked}>Create Widget</button>
                    </div>
                </div>
            </div>

        )
    }
}

export default Widget;