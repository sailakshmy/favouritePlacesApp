import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const PlaceItem = ({ place, onSelect }) => {
  const { title, imageUri, address, location } = place;
  return (
    <Pressable onPress={onSelect}>
      <Image source={{ uri: imageUri }} />
      <View>
        <Text>{title}</Text>
        <Text>{address}</Text>
      </View>
    </Pressable>
  );
};

export default PlaceItem;

const styles = StyleSheet.create({});
