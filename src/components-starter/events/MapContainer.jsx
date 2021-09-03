import React from "react";
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends React.Component
{

    render()
    {
        const style = {
            width: '40%',
            height: '30%',
            margin: "40px",
            marginLeft: "500px"
        }

        return (
            <Map google={this.props.google}
                style={style}
                center={{
                    lat: this.props.eventInfo.metaData.location.latitude,
                    lng: this.props.eventInfo.metaData.location.longitude
                }}
                initialCenter={
                    {
                        lat: 33.0380189,
                        lng: -117.24121490299146
                    }
                }
                zoom={this.props.eventInfo.zoom}
                centerMap={this.props.eventInfo.centerMap}>
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
                <Marker
                    title={'Oakcrest'}
                    name={'Oakcrest'}
                    position={{ lat: 33.04489117341402, lng: -117.26483248785841 }} />

            </Map>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyAI1cmT7TdeTOgZKwpQF7tBiZa9k2Phu8M")
})(MapContainer)