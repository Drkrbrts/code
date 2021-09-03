import React from "react";
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import debug from "sabio-debug";

const _logger = debug.extend("EventsMain");

class MapContainer extends React.Component
{

    state = {
        location: {
            lat: 0,
            lng: 0
        }
    }

    componentDidMount()
    {
        // this.setState(() =>
        // {
        //     _logger("called setState:", this.state)
        //     let location = { ...this.state.location }
        //     location.lat = this.props.currentLat;
        //     location.lng = this.props.currentLng;
        //     return { location }
        // })
    }

    componentDidUpdate()
    {
        _logger("componentDidUpdate:", this.state);
    }

    render()
    {
        const style = {
            width: '40%',
            height: '40%',
            margin: "40px",
            marginLeft: "500px"
        }

        return (
            <Map google={this.props.google}
                style={style}
                center={{
                    lat: this.props.currentLat,
                    lng: this.props.currentLng
                }}
                initialCenter={
                    {
                        lat: 33.0478763,
                        lng: -117.2762055
                    }
                }
                zoom={14}>
                <Marker
                    title={'Sun Vista'}
                    name={'Sun Vista'}
                    position={{ lat: 33.0606648075948, lng: -117.24121490299146 }} />
                <Marker
                    title={'Orpheus'}
                    name={'Orpheus'}
                    position={{ lat: 33.05796480604924, lng: -117.29532237517124 }} />
                <Marker
                    title={'Manchester'}
                    name={'Manchester'}
                    position={{ lat: 33.02899584404634, lng: -117.2428666817597 }} />

            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyAI1cmT7TdeTOgZKwpQF7tBiZa9k2Phu8M")
})(MapContainer)