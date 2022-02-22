import React, { Component } from "react";

import Flat from "./Flat";
import FlatList from "./FlatList";
import GoogleMap from "./GoogleMap";
import Marker from "./Marker";
import flats from "../Data/flats";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <FlatList flats={flats} />
        <div className="map-container">
          <GoogleMap />
        </div>
      </div>
    );
  }
}

export default App;
