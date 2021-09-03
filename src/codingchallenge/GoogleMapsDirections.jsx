import React from "react";
import MyMapComponent from "./MyMapComponent";
import MapWithADirectionsRenderer from "./MapWithADirectionsRenderer";

export default class GoogleMapsDirections extends React.Component {
  state = {
    isMarkerShown: false,
  };

  componentDidMount() {
    this.delayedShowMarker();
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 3000);
  };

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          {/* <MyMapComponent
            isMarkerShown={this.state.isMarkerShown}
            onMarkerClick={this.handleMarkerClick}
          /> */}
        </div>

        <div className="row">
          <MapWithADirectionsRenderer destination="1401 S Sacramento Dr, Chicago, IL, United States" />
        </div>
      </div>
    );
  }
}
