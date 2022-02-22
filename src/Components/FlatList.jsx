import React from "react";
import Flat from "./Flat";

const FlatList = (props) => {
  return (
    <div className="flat-list">
      {props.flats.map((flat) => (
        <Flat
          name={flat.name}
          imageUrl={flat.imageUrl}
          price={flat.price}
          priceCurrency={flat.priceCurrency}
          key={flat.id}
        />
      ))}
    </div>
  );
};

export default FlatList;
