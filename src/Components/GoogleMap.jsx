import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: -23.59386,
        lng: -46.607877,
      },
      zoom: 13,
    };
  }

  // const AnyReactComponent = ({ text }) => <div>{text}</div>;

  render() {
    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={this.state.center}
          defaultZoom={this.state.zoom}
        >
          {/* <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" /> */}
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
