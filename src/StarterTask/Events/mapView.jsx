import React from "react";
import GoogleMapReact from "google-map-react";
import Geocode from "react-geocode";

class MapView extends React.Component {
  latLngArray = [];
  descriptionArray = [];
  constructor(props) {
    super(props);
    this.state = {
      coordinates: "",
      isOpen: false,
      locations: this.props.location.state.locationsArray,
    };
  }
  static defaultProps = {
    center: {
      lat: 32.296119,
      lng: -81.212177,
    },
    zoom: 12,
  };
  componentDidMount() {
    const locationArray = this.props.location.state.locationsArray.map(
      (event) =>
        event.metaData.location.address + " " + event.metaData.location.zipCode
    );
    this.descriptionArray = this.props.location.state.locationsArray.map(
      (event) => event.name
    );
    locationArray.map(this.convertToLatLng);
    setTimeout(() => {
      this.markerArryCreate();
    }, 1000);
  }
  convertToLatLng = (address) => {
    Geocode.setApiKey("AIzaSyDJ4HLPFqOWsovsm0dGiE0nz2iIy_y9AjI");
    Geocode.fromAddress(address).then(this.grablatLng);
  };
  grablatLng = (response) => {
    const llCoords = response.results[0].geometry.location;
    this.latLngArray.push([llCoords]);
  };
  markerArryCreate = () => {
    for (let i = 0; i < this.latLngArray.length; i++) {
      const indexArry = this.latLngArray[i];
      for (let j = 0; j < this.descriptionArray.length; j++) {
        const descripStr = this.descriptionArray[j];
        if (i === j) {
          indexArry.push(descripStr);
        }
      }
    }
  };
  renderMarkers = (map, maps) => {
    const infoWindow = new maps.InfoWindow();
    this.latLngArray.forEach(([position, title], i) => {
      const marker = new maps.Marker({
        position,
        map,
        title: `${i + 1}. ${title}`,
        label: `${i + 1}`,
        optimized: false,
      });
      marker.addListener("click", () => {
        infoWindow.close();
        infoWindow.setContent(marker.getTitle());
        infoWindow.open(marker.getMap(), marker);
      });
    });
  };
  render() {
    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDJ4HLPFqOWsovsm0dGiE0nz2iIy_y9AjI" }}
          defaultCenter={this.props.center}
          defaultZoom={10}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) =>
            setTimeout(() => {
              this.renderMarkers(map, maps);
            }, 2000)
          }
        ></GoogleMapReact>
      </div>
    );
  }
}

export default MapView;
