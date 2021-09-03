import React from "react";
import debug from "sabio-debug";
import MapContainer from "./map";

const _logger = debug.extend("CurrentEvent");

class CurrentEvent extends React.Component
{


    state = {
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
            statusId: "",
            zoom: 14
        }
    }


    componentDidUpdate()
    {
        _logger(this.props);

        let date = new Date(this.state.eventInfo.metaData.dateStart);
        let dateGetDate = date.getDate();
        _logger(dateGetDate)

        let currentEventInfo = this.state.eventInfo;

        let eventInfoPassedFromCard = this.props.location.state;

        let defaultValue = "";

        if (eventInfoPassedFromCard)
        {

            if ((eventInfoPassedFromCard && currentEventInfo.name === defaultValue)
                || currentEventInfo.name !== eventInfoPassedFromCard.payload.name)
            {
                this.setState(() =>
                {
                    let eventInfo = { ...currentEventInfo };
                    eventInfo = eventInfoPassedFromCard.payload;

                    eventInfo.zoom = 14;
                    eventInfo.centerMap = false;

                    return { eventInfo }
                })
            };
        };

        if (this.props.centerMap === true
            && currentEventInfo.metaData.location.latitude !== 33.0380189
        )
        {
            this.setState(() =>
            {
                let eventInfo = { ...currentEventInfo }
                eventInfo.zoom = 12;
                eventInfo.centerMap = true;
                eventInfo.metaData.location.latitude = 33.0380189;
                eventInfo.metaData.location.longitude = -117.2708355;
                return { eventInfo }
            })
        };

        if (this.props.centerMap === false
            && currentEventInfo.metaData.location.latitude === 33.0380189)
        {
            let eventInfo = { ...currentEventInfo };
            eventInfo = eventInfoPassedFromCard.payload;


            eventInfo.zoom = 14;
            return { eventInfo }
        }


    };

    render()
    {


        return (
            <>
                <div className="card border-info mb-3 m-3" style={{ height: "800px" }} >
                    <div className="card-header text-center">
                        <h2>{this.state.eventInfo.name}</h2>
                    </div>
                    <div className="card-body m-3">
                        <h5 className="card-title">{this.state.eventInfo.summary}</h5>
                        <p className="card-text">{this.state.eventInfo.description}</p>
                        <div className="card-location row" >
                            <div style={{ marginTop: "100px", marginLeft: "100px" }}>
                                <p>
                                    <strong>Location:</strong><br />
                                    {this.state.eventInfo.metaData.location.address}<br />
                                    Encinitas, CA {this.state.eventInfo.metaData.location.zipCode}<br />
                                    {this.state.eventInfo.metaData.dateStart}<br />

                                </p>
                            </div>
                            <div className="map-container" style={{ marginTop: "-200px" }}>
                                <MapContainer
                                    eventInfo={this.state.eventInfo}
                                    centerMap={this.props.centerMap}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </>
        )
    }
}

export default CurrentEvent;