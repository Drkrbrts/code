import React from "react";
import debug from "sabio-debug";
import Modal from 'react-modal';
import ModalContent from "./ModalContent";
import { getAllEvents, postFiles } from "../../services/eventService";
import CurrentEvent from "./CurrentEvent";
import Card from "./Card";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const _logger = debug.extend("EventsMain");



class EventsMain extends React.Component
{

    state = {
        mappedEvents: [],
        modal: {
            showModal: false
        },
        eventInfo: {
            metaData: {
                dateStart: "",
                dateEnd: "",
                location: {
                    latitude: 0,
                    longitude: 0,
                    zipCode: "",
                    address: ""
                }
            },
            id: "",
            name: "",
            headline: "",
            description: "",
            summary: "",
            slug: "",
            statusId: ""
        },
        centerMap: false,
        pageIndex: 0,
        pageSize: 4,
        form: {
            files: [
                // "https://cdn.pixabay.com/photo/2019/10/24/19/50/sloth-4575121_960_720.png",
                "https://cdn.pixabay.com/photo/2018/07/14/17/46/raccoon-3538081_960_720.jpg"
            ]
        }
    };

    notify = (toastMessage) =>
    {
        toast.info(toastMessage);
    }

    componentDidMount()
    {
        getAllEvents(this.state.pageIndex, this.state.pageSize)
            .then(this.onGetAllEventsSuccess)
            .catch(this.onGetAllEventsFail);
    };

    mapThisEvent = (oneEvent) =>
    {
        _logger("mapThisEvent start");
        _logger(oneEvent);

        return (
            <Card {...this.props} key={`EventId:${oneEvent.id}`} eventInfo={oneEvent} shouldUpdateEvent={true} />
        )

    };

    onGetAllEventsSuccess = (response) =>
    {
        _logger("onGetAllEventsSuccess:", response);

        // let localMessage = "Get all events success!";
        // this.notify(localMessage)

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

        let localMessage = "Failed to get all events";
        this.notify(localMessage)
    };

    openModal = () =>
    {
        this.setState(() =>
        {
            let modal = { ...this.state.modal };

            modal.showModal = true;
            return { modal };

        })
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

    onViewEventsOnMapButtonClicked = () =>
    {
        if (this.state.centerMap === true)
        {
            _logger("centerMap true", this.state.centerMap);
            this.setState(() =>
            {
                let eventInfo = { ...this.state.eventInfo };
                let centerMap = { ...this.state.centerMap };
                eventInfo = this.props.location.state;
                centerMap = false;

                return { centerMap, eventInfo }
            }
            )           // viewEventsonMapbutton now toggles centerMap in state.

        }

        if (this.state.centerMap === false)
        {
            _logger("centerMap false:", this.state.centerMap);
            this.setState(() =>
            {
                let centerMap = { ...this.state.centerMap };
                centerMap = true;
                return { centerMap }
            })
        }
    };

    onAddFilesButtonClicked = () =>
    {
        let files = this.state.form.files;
        _logger(files);
        postFiles(files)
            .then(this.onPostFilesSuccess)
            .catch(this.onPostFilesFail)
    };

    onPostFilesSuccess = (response) =>
    {
        _logger(response);
    };

    onPostFilesFail = (response) =>
    {
        _logger(response);
    }

    render()
    {
        return (
            <>
                <div className="row sabio m-3 " id="main" >
                    <ToastContainer />
                    <div className="col-8" id="current-event-container">
                        <div>
                            <CurrentEvent {...this.props} centerMap={this.state.centerMap} />
                        </div>
                    </div>


                    <div className="col-4" id="event-container"  >
                        <div className="d-flex justify-content-around mt-5 mb-5">
                            <button type="button" className="btn btn-outline-success"
                                onClick={this.openModal}> + Add Event</button>
                            <button type="button" className=" btn btn-outline-success"
                                onClick={this.onViewEventsOnMapButtonClicked}>
                                {this.state.centerMap && `Toggle View Events On Map: Currently true`}
                                {!this.state.centerMap && `Toggle View Events On Map: Currently false`}
                            </button>
                            <button type="button" className="btn btn-outline-info"
                                onClick={this.onAddFilesButtonClicked}> + Add Files</button>
                        </div>
                        <div className="mappedEventsContainer border border-primary">
                            {this.state.mappedEvents}  {/* < --------   NEED TO SPECIFY WHERE THE MAPPED EVENTS SHOW UP! -------- */}
                        </div>
                    </div>

                </div>
                <div className="row">
                    <Modal {...this.props}
                        isOpen={this.state.modal.showModal}
                        onRequestClose={this.closeModal}
                        contentLabel="Example Modal"
                    >
                        <div className="float-right">
                            <button onClick={this.closeModal}>&times;</button>
                        </div>
                        <ModalContent {...this.props} />
                    </Modal>
                </div>
            </>
        )
    }
}


Modal.setAppElement(document.getElementById('main'));

export { EventsMain, CurrentEvent };

