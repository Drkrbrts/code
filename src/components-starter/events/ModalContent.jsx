import React from "react";
import debug from "sabio-debug";
import { updateEvent, createNewEvent } from "../../services/eventService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const _logger = debug.extend("ModalContent");

class ModalContent extends React.Component
{

    state = {
        eventInfo: {
            metaData: {
                dateStart: "",
                dateEnd: "",
                location: {
                    latitude: "",
                    longitude: "",
                    zipCode: "",
                    address: ""
                }
            },
            name: "",
            headline: "",
            description: "",
            summary: "",
            slug: "",
            statusId: ""
        }
    }

    notify = (toastMessage) =>
    {
        toast.info(toastMessage);
    }

    componentDidMount()
    {
        _logger("componentDidMount Modal")
        this.setState(() =>
        {
            let eventInfo = { ...this.state.eventInfo };

            if (this.props.eventInfo)
            {
                eventInfo = this.props.eventInfo;
            }
            else
            {
                eventInfo = this.state.eventInfo;
            }
            return { eventInfo }
        })
    }


    onChangeFunction = (e) =>
    {
        let inputName = e.currentTarget.name;
        let inputValue = e.currentTarget.value;

        this.setState(() =>
        {
            let eventInfo = { ...this.state.eventInfo };

            if (inputName === "name")
            {
                eventInfo[inputName] = inputValue;
            }

            if (inputName === "dateStart" || inputName === "dateEnd")
            {
                eventInfo.metaData[inputName] = inputValue;
            }

            else if (inputName === "latitude"
                || inputName === "longitude"
                || inputName === "address"
                || inputName === "zipCode")
            {
                eventInfo.metaData.location[inputName] = inputValue;
            }

            eventInfo[inputName] = inputValue;

            return { eventInfo: eventInfo };

        })
    };

    onUpdateEventSuccess = (response) =>
    {
        _logger("onUpdateEventSuccess", response);

        let localMessage = "Event updated!"

        this.notify(localMessage);
    }

    onUpdateEventFail = (response) =>
    {
        _logger("onUpdateEventFail", response);
        let localMessage = "Event failed to update"

        this.notify(localMessage);
    }

    onUpdateEventButtonClicked = () =>
    {

        _logger("updateEventButtonClicked", this.state.eventInfo);

        let eventInfo = this.state.eventInfo;

        updateEvent(eventInfo, eventInfo.id)
            .then(this.onUpdateEventSuccess)
            .catch(this.onUpdateEventFail)
    };

    onCreateNewEventSuccess = (response) =>
    {
        _logger("onCreateNewEventSuccess:", response);
        let localMessage = "New event created!";
        this.notify(localMessage);
    };

    onCreateNewEventFail = (response) =>
    {
        _logger("onCreateNewEventFail:", response);
        let localMessage = "Failed to create new event";
        this.notify(localMessage);
    };

    onCreateEventButtonClicked = () =>
    {
        createNewEvent(this.state.eventInfo)
            .then(this.onCreateNewEventSuccess)
            .catch(this.onCreateNewEventFail);
    };

    render()
    {

        return (
            <>
                <ToastContainer />
                {this.props.shouldUpdateEvent && <h2 >Update Event</h2>}
                {!this.props.shouldUpdateEvent && <h2 >Create New Event</h2>}
                <form>
                    <div className="mb-3">
                        <label htmlFor="dateStart" className="form-label">Date Start:</label>
                        <input type="text"
                            className="form-control"
                            name="dateStart"
                            value={this.state.eventInfo.metaData.dateStart}
                            onChange={this.onChangeFunction}
                            placeholder="mm/dd/yyyy"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dateEnd" className="form-label">Date End:</label>
                        <input type="text"
                            className="form-control"
                            name="dateEnd"
                            value={this.state.eventInfo.metaData.dateEnd}
                            onChange={this.onChangeFunction}
                            placeholder="mm/dd/yyyy"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="latitude" className="form-label">Latitude:</label>
                        <input type="text"
                            className="form-control"
                            name="latitude"
                            value={this.state.eventInfo.metaData.location.latitude}
                            onChange={this.onChangeFunction}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="longitude" className="form-label">Longitude:</label>
                        <input type="text"
                            className="form-control"
                            name="longitude"
                            value={this.state.eventInfo.metaData.location.longitude}
                            onChange={this.onChangeFunction}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="zipCode" className="form-label">Zip Code:</label>
                        <input type="text"
                            className="form-control"
                            name="zipCode"
                            value={this.state.eventInfo.metaData.location.zipCode}
                            onChange={this.onChangeFunction}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address:</label>
                        <input type="text"
                            className="form-control"
                            name="address"
                            value={this.state.eventInfo.metaData.location.address}
                            onChange={this.onChangeFunction}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input type="text"
                            className="form-control"
                            name="name"
                            value={this.state.eventInfo.name}
                            onChange={this.onChangeFunction}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="headline" className="form-label">Headline:</label>
                        <input type="text"
                            className="form-control"
                            name="headline"
                            value={this.state.eventInfo.headline}
                            onChange={this.onChangeFunction}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description:</label>
                        <input type="text"
                            className="form-control"
                            name="description"
                            value={this.state.eventInfo.description}
                            onChange={this.onChangeFunction}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="summary" className="form-label">Summary:</label>
                        <input type="text"
                            className="form-control"
                            name="summary"
                            value={this.state.eventInfo.summary}
                            onChange={this.onChangeFunction}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="slug" className="form-label">Slug:</label>
                        <input type="text"
                            className="form-control"
                            name="slug"
                            value={this.state.eventInfo.slug}
                            onChange={this.onChangeFunction}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="statusId" className="form-label">Status ID:</label>
                        <input type="text"
                            className="form-control"
                            name="statusId"
                            value={this.state.eventInfo.statusId}
                            onChange={this.onChangeFunction}
                        />
                    </div>
                </form>
                {this.props.shouldUpdateEvent && <button type="button" className="btn btn-outline-info" onClick={this.onUpdateEventButtonClicked}>Update Event</button>}
                {!this.props.shouldUpdateEvent && <button type="button" className="btn btn-outline-info" onClick={this.onCreateEventButtonClicked}>Create Event</button>}
            </>
        )
    }
}

export default ModalContent;