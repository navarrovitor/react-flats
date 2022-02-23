import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

import FlatList from "./FlatList";
import Marker from "./Marker";
import flats from "../Data/flats";

const GOOGLE_MAPS_API_KEY = "AIzaSyA_YDj1vWCeCWAOqrL1CdjmHssfW4VPQLE";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { flats: [...flats], selectedFlat: flats[0] };

    this.selectFlat = this.selectFlat.bind(this);
    this.mapCenter = this.mapCenter.bind(this);
  }

  mapCenter() {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng,
    };
  }

  selectFlat(index) {
    this.setState({ selectedFlat: flats[index] });
  }

  render() {
    return (
      <div>
        <FlatList
          flats={this.state.flats}
          selectedFlat={this.state.selectedFlat}
          selectFlat={this.selectFlat}
        />
        <div className="map-container">
          <GoogleMapReact
            center={this.mapCenter()}
            defaultZoom={13}
            bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY }}
            yesIWantToUseGoogleMapApiInternals
          >
            <Marker
              lat={this.state.selectedFlat.lat}
              lng={this.state.selectedFlat.lng}
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
