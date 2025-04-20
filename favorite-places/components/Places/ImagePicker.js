import React from "react";
import { Alert, Button, View } from "react-native";
import {
  launchCameraAsync,
  PermissionStatus,
  useCameraPermissions,
} from "expo-image-picker";

const ImagePicker = () => {
  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();

  const verifyPermission = async () => {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }
    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient permissions!!!",
        "You need to grant Camera permissions to use this app."
      );
      return false;
    }
    return true;
  };

  const takeImage = async () => {
    const hasPermission = await verifyPermission();
    if (!hasPermission) {
      return;
    }
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
