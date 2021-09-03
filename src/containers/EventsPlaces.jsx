import React, { Component } from "react";
import {
  GoogleMap,
  LoadScript,
  Autocomplete,
  Marker,
} from "@react-google-maps/api";

class AutoComplete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      center: {
        lat: 38.685,
        lng: -100.234,
      },
      mapContainer: {
        height: "600px",
        width: "1000px",
      },
      libraries: ["places"],
      zoom: 15,
    };

    this.autocomplete = null;
    this.onLoad = this.onLoad.bind(this);
    this.onPlaceChanged = this.onPlaceChanged.bind(this);
  }

  componentDidMount() {
    // console.log("componentDidMount firing");
    if ("geolocation" in navigator) {
      console.log("Available");
      navigator.geolocation.getCurrentPosition((position) => {
        // console.log("Latitude is :", position.coords.latitude);
        // console.log("Longitude is :", position.coords.longitude);
        // this.setState((prevState) => {
        //   let userLocation = { ...prevState.userLocation };
        //   userLocation.latitude = position.coords.latitude;
        //   userLocation.longitude = position.coords.longitude;
        //   return { ...prevState, userLocation };
        // });
        this.setState((prevState) => {
          let center = { ...prevState.center };
          center.lat = position.coords.latitude;
          center.lng = position.coords.longitude;
          return { ...prevState, center };
        });
      });
    }
  }

  onLoad(autocomplete) {
    // console.log("autocomplete", autocomplete);
    this.autocomplete = autocomplete;
  }

  // onPlaceChanged() {
  //   if (this.autocomplete !== null) {
  //     let address = this.autocomplete.getPlace();
  //     console.log("autocomplete", this.autocomplete);
  //     console.log("address", address);
  //     let location = this.getAddressObj(address.address_components);
  //     console.log("location", location);
  //     location.latitude = address.geometry.location.lat();
  //     location.longitude = address.geometry.location.lng();
  //     // this.props.handleChange(location);
  //   } else {
  //     console.log("Autocomplete is not loaded yet!");
  //   }
  // }

  onPlaceChanged() {
    if (this.autocomplete !== null) {
      let address = this.autocomplete.getPlace();
      console.log("address", address);
      let formattedAddress = address.formatted_address;
      let lat = address.geometry.location.lat();
      let lng = address.geometry.location.lng();

      console.log("formatted address", formattedAddress);
      this.setState((prevState) => {
        let center = { ...prevState.center };
        center.lat = lat;
        center.lng = lng;
        return { ...prevState, center };
      });
    } else {
      console.log("Autocomplete is not loaded yet!");
    }
  }

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
          id="searchbox-example"
          mapContainerStyle={this.state.mapContainer}
          zoom={this.state.zoom}
          center={this.state.center}
        >
          <Autocomplete
            onLoad={this.onLoad}
            onPlaceChanged={this.onPlaceChanged}
          >
            <input
              type="text"
              placeholder="Search Addresses"
              className="form-control"
              style={{
                boxSizing: `border-box`,
                width: `450px`,
                height: `48px`,
                padding: `0 12px`,
                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                fontSize: `14px`,
                outline: `none`,
                textOverflow: `ellipses`,
                position: "absolute",
                left: "60%",
                marginLeft: "-120px",
              }}
            />
          </Autocomplete>
          <Marker key="marker_1" position={this.state.center} />
        </GoogleMap>
      </LoadScript>
    );
  }
}

export default AutoComplete;
