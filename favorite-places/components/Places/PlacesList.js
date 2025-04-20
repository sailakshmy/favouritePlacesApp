import React from "react";
import { FlatList, View } from "react-native";

const PlacesList = ({ places }) => {
  return <FlatList data={places} keyExtractor={(place) => place.id} renderItem={}/>;
};

export default PlacesList;
