import React from "react";
import debug from "sabio-debug";
import Modal from 'react-modal';
import ModalContent from "./ModalContent";

const _logger = debug.extend("Card");



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
    };

    componentDidMount = () =>
    {
        let eventInfoFromCard = this.props.eventInfo;
        if (eventInfoFromCard.name === "Sun Vista")
        {
            this.props.history.push("/events", {
                payload: eventInfoFromCard,
                type: "ADD_TO_CURRENT_EVENT"
            })
        }
    }

    componentDidUpdate = () =>
    {
        let eventInfoFromCard = this.state.eventInfo
        this.props.history.push("/events", {
            payload: eventInfoFromCard,
            type: "ADD_TO_CURRENT_EVENT"
        })
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
                        <div className="float-right">
                            <button onClick={this.closeModal}>&times;</button>
                        </div>
                        <ModalContent {...this.props} />
                    </Modal>
                    <div className="card-body m-3 border-bottom" >
                        <h5 className="card-title">{this.props.eventInfo.name}</h5>
                        <p className="card-date">{this.props.eventInfo.metaData.dateStart}</p>
                        <p className="card-text">{this.props.eventInfo.summary}</p>
                        <div className=" d-flex justify-content-around">
                            <button className="btn btn-outline-primary"
                                onClick={this.openModal}     // <-- capturing array data during mapping
                            >
                                Edit Event
                            </button>
                            <button className="btn btn-outline-info"
                                data-eventid={this.props.eventInfo.id}
                                onClick={this.onViewMoreButtonClicked}>
                                View More
                            </button>
                        </div>

                        <div>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Card;