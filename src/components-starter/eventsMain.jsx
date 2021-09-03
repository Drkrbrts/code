import React from "react";
import debug from "sabio-debug";
import Modal from 'react-modal';
import { createNewEvent, getAllEvents, updateEvent } from "../services/eventService";
import MapContainer from "./map";


const _logger = debug.extend("EventsMain");

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
            statusId: "Active"
        }
    }

    componentDidMount()
    {
        this.setState(() =>
        {
            let eventInfo = { ...this.state.eventInfo };
            eventInfo = this.props.eventInfo;
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
    }

    onUpdateEventFail = (response) =>
    {
        _logger("onUpdateEventFail", response);
    }

    onUpdateEventButtonClicked = () =>
    {

        _logger("updateEventButtonClicked", this.state.eventInfo);

        let eventInfo = this.state.eventInfo;

        updateEvent(eventInfo, eventInfo.id)
            .then(this.onUpdateEventSuccess)
            .catch(this.onUpdateEventFail)
    }

    render()
    {

        return (
            <>
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
                <button type="button" className="btn btn-outline-info" onClick={this.onUpdateEventButtonClicked}>Update Event</button>
            </>
        )
    }
}

class CurrentEvent extends React.Component
{

    componentDidUpdate()
    {
        _logger(this.props)


    }

    render()
    {


        return (
            <>
                {/* <div className="event-container text-center m-5" style={{ backgroundColor: "lightblue" }}>
                    <div className="name">
                        
                    </div>
                    <div className="summary">
                        
                    </div>
                    <div className="description">
                        
                    </div>
                </div> */}
                <div className="card border-info mb-3 m-3" style={{ height: "800px" }} >
                    <div className="card-header text-center">
                        <h2>{this.props.selectedEvent.name}</h2>
                    </div>
                    <div className="card-body m-3">
                        <h5 className="card-title">{this.props.selectedEvent.summary}</h5>
                        <p className="card-text">{this.props.selectedEvent.description}</p>
                        <div className="card-location row" >
                            <div style={{ marginTop: "100px", marginLeft: "100px" }}>
                                <p>
                                    <strong>Location:</strong><br />
                                    {this.props.selectedEvent.metaData.location.address}<br />
                                    Encinitas, CA {this.props.selectedEvent.metaData.location.zipCode}<br />
                                    {this.props.selectedEvent.metaData.dateStart}
                                </p>
                            </div>
                            <div className="map-container" style={{ marginTop: "-200px" }}>
                                <MapContainer currentLat={this.props.selectedEvent.metaData.location.latitude} currentLng={this.props.selectedEvent.metaData.location.longitude} />
                            </div>
                        </div>

                    </div>
                </div>
            </>
        )
    }
}

class Card extends React.Component      // pass props from the card -> to EventsMain -> change state of EventsMain
{

    state = {
        modal: {
            showModal: false
        },
        eventInfo: {}
    }

    openModal = () =>
    {
        this.setState(() =>
        {
            let modal = { ...this.state.modal };
            modal.showModal = true;
            return { modal };
        })
        _logger("openModal:", this.state.modal);
    };

    closeModal = () =>
    {
        this.setState(() =>
        {
            let modal = { ...this.state.modal };
            modal.showModal = false;
            return { modal: modal };
        })
    };

    onViewMoreButtonClicked = () =>
    {
        _logger("onViewMoreButtonClicked");
        this.setState(() =>
        {
            let eventInfo = { ...this.state.eventInfo };
            eventInfo = this.props.eventInfo;
            return { eventInfo }
        })
    }

    componentDidUpdate = () =>
    {
        this.props.history.push("/events", this.state.eventInfo)
    }


    render()
    {


        return (
            <>
                <div>
                    <Modal {...this.props}
                        isOpen={this.state.modal.showModal}
                        onRequestClose={this.closeModal}
                        // style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <h2 >Create New Event</h2>
                        <div className="float-right">
                            <button onClick={this.closeModal}>&times;</button>
                        </div>
                        <ModalContent {...this.props} />
                    </Modal>
                    <div className="card-body m-5">
                        <h5 className="card-title">{this.props.eventInfo.name}</h5>
                        <p className="card-date">{this.props.eventInfo.metaData.dateStart}</p>
                        <p className="card-text">{this.props.eventInfo.summary}</p>
                        <div className="row d-flex">
                            <div className=" d-flex">
                                <button className="btn btn-primary"
                                    onClick={this.openModal}     // <-- capturing array data during mapping
                                >
                                    Edit Event
                                </button>
                            </div>
                            <div className=" d-flex justify-content-end">
                                <button className="btn btn-info"
                                    data-eventid={this.props.eventInfo.id}
                                    onClick={this.onViewMoreButtonClicked}>
                                    View More
                                </button>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


class EventsMain extends React.Component
{

    state = {
        mappedEvents: [],
        modal: {
            showModal: false
        },
        eventInfo: {
            metaData: {
                "dateStart": "",
                "dateEnd": "",
                "location": {
                    "latitude": 0,
                    "longitude": 0,
                    "zipCode": "",
                    "address": ""
                }
            },
            "id": "",
            "name": "",
            "headline": "",
            "description": "",
            "summary": "",
            "slug": "",
            "statusId": "Active"
        }
    };

    componentDidMount()
    {
        getAllEvents(0, 3)
            .then(this.onGetAllEventsSuccess)
            .catch(this.onGetAllEventsFail);
    };

    componentDidUpdate = () =>
    {
        _logger("componentDidUpdate")
    }



    mapThisEvent = (oneEvent) =>
    {
        _logger("mapThisEvent start");
        _logger(oneEvent);



        return (
            <Card {...this.props} key={`EventId:${oneEvent.id}`} eventInfo={oneEvent} />
        )

    }

    onGetAllEventsSuccess = (response) =>
    {
        _logger("onGetAllEventsSuccess:", response);

        let eventsArray = response.data.item.pagedItems;


        this.setState(() =>
        {
            let eventInfo = { ...this.state.eventInfo };
            eventInfo = eventsArray[0];

            return {
                mappedEvents: eventsArray.map(this.mapThisEvent),
                eventInfo
            };
        })

    };

    onGetAllEventsFail = (response) =>
    {
        _logger("onGetAllEventsFail:", response);
    };

    openModal = () =>
    {
        this.setState(() =>
        {
            let modal = { ...this.state.modal };
            modal.showModal = true;
            return { modal };

        })
        _logger("openModal:", this.state.modal);
    };

    closeModal = () =>
    {
        this.setState(() =>
        {
            let modal = { ...this.state.modal };
            modal.showModal = false;
            return { modal: modal };

        })

    };

    onChangeFunction = (e) =>
    {

        let inputName = e.currentTarget.name;
        let inputValue = e.currentTarget.value;


        this.setState(() =>
        {
            let eventInfo = { ...this.state.eventInfo };

            if (inputName === "dateStart" || inputName === "dateEnd")
            {
                eventInfo.metaData[inputName] = inputValue;
            }
            if (inputName === "latitude"
                || inputName === "longitude"
                || inputName === "address"
                || inputName === "zipCode")
            {
                eventInfo.metaData.location[inputName] = inputValue;
            }
            eventInfo[inputName] = inputValue;
            return { eventInfo };

        })
    };

    onCreateNewEventSuccess = (response) =>
    {
        _logger("onCreateNewEventSuccess:", response);
    };

    onCreateNewEventFail = (response) =>
    {
        _logger("onCreateNewEventFail:", response);
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
                <div className="row sabio" id="main">

                    <div className="col-8" id="current-event-container">
                        <div className="container-above-map">
                            <CurrentEvent {...this.props} {...this.state.eventInfo} selectedEvent={this.props.location.state} />
                        </div>
                        <div id="map">
                        </div>
                    </div>


                    <div className="col-4" id="event-container" style={{ backgroundColor: "lightblue" }} >
                        <button type="button" className="btn btn-primary btn-add"
                            onClick={this.openModal}> + Add Event</button>
                        <div>
                            <button type="button" className=" btn btn-primary btn-view">
                                View Events On Map</button>
                        </div>
                        <div >
                            {this.state.mappedEvents}  {/* < --------   NEED TO SPECIFY WHERE THE MAPPED EVENTS SHOW UP! -------- */}
                        </div>
                    </div>

                </div>
                <div className="row">
                    <Modal {...this.props}
                        isOpen={this.state.modal.showModal}
                        onRequestClose={this.closeModal}
                        // style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <h2 >Create New Event</h2>
                        <div className="float-right">
                            <button onClick={this.closeModal}>&times;</button>
                        </div>
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
                        <button type="button" className="btn btn-outline-info" onClick={this.onCreateEventButtonClicked}>Create Event</button>
                    </Modal>
                </div>
            </>
        )
    }
}


Modal.setAppElement(document.getElementById('main'));

export { EventsMain, CurrentEvent };

