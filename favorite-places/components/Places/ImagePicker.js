import React from "react";
import { Button, View } from "react-native";
import { launchCameraAsync } from "expo-image-picker";

const ImagePicker = () => {
  const takeImage = async () => {
    const image = await launchCameraAsync({
      aspect: [16, 9],
      allowsEditing: true,
      quality: 0.5,
    });
    console.log("image", image);
  };
  return (
    <View>
      <View></View>
      <Button title="Take image" onPress={takeImage} />
    </View>
  );
};

export default ImagePicker;
