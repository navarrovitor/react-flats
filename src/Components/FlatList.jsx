import React from "react";
import Flat from "./Flat";

const FlatList = (props) => {
  return (
    <div className="flat-list">
      {props.flats.map((flat, index) => (
        <Flat
          flat={flat}
          index={index}
          selectFlat={props.selectFlat}
          selected={flat.name === props.selectedFlat.name}
          key={flat.lat}
        />
      ))}
    </div>
  );
};

export default FlatList;
