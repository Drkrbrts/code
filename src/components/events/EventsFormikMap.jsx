import React, { Component } from "react";
import {
  GoogleMap,
  LoadScript,
  Autocomplete,
  Marker,
} from "@react-google-maps/api";

class EventsFormikMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mapContainer: {
        height: "400px",
        width: "646px",
      },
      libraries: ["places"],
    };

    this.autocomplete = null;
  }

  onLoad = (autocomplete) => {
    this.autocomplete = autocomplete;
  };

  onPlaceChanged = () => {
    if (this.autocomplete !== null) {
      let address = this.autocomplete.getPlace();
      // console.log("address", address);
      let location = this.getAddressObj(address.address_components);
      location.latitude = address.geometry.location.lat();
      location.longitude = address.geometry.location.lng();
      const formData = this.props.currentValues;

      formData.address = `${location.street_number} ${location.route} ${location.locality}, ${location.administrative_area_level_1}`;
      formData.zipCode = location.postal_code;
      formData.latitude = location.latitude;
      formData.longitude = location.longitude;
      this.props.onAddressRequested(formData);
      //   this.setState((prevState) => {
      //     let center = { ...prevState.center };
      //     center.latitude = location.latitude;
      //     center.longitude = location.longitude;
      //   });
    } else {
      console.log("Autocomplete is not loaded yet!");
    }
  };

  getAddressObj = (components) => {
    let address = {};
    Object.keys(components).forEach((key) => {
      address[components[key].types[0]] = components[key].long_name;
    });
    return address;
  };

  render() {
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyAEYsuvVruB7AEiONGT70I5TdGddLKlQdc"
        libraries={this.state.libraries}
      >
        <GoogleMap
          mapContainerStyle={this.state.mapContainer}
          zoom={this.props.center.zoom}
          center={this.props.center}
        >
          <Autocomplete
            onLoad={this.onLoad}
            onPlaceChanged={this.onPlaceChanged}
          >
            <input
              type="text"
              placeholder="Enter Event Address Here"
              className="form-control"
              style={{
                boxSizing: `border-box`,
                width: `270px`,
                height: `48px`,
                padding: `0 12px`,
                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                fontSize: `14px`,
                outline: `none`,
                textOverflow: `ellipses`,
                position: "absolute",
                left: "67%",
                top: "2%",
                marginLeft: "-120px",
              }}
            />
          </Autocomplete>
          {this.props.center.hasLocation && (
            <Marker key="marker_1" position={this.props.center} />
          )}
        </GoogleMap>
      </LoadScript>
    );
  }
}
export default EventsFormikMap;
