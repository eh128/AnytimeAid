import React, { useState, useEffect, useRef } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Constants from "expo-constants";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { MaterialIcons } from "@expo/vector-icons";
import Button from "../../Components/CameraButton";
import NavBar from "../../Components/NavBar";

export default function CameraPage({ navigation }) {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const cameraRef = useRef(null);
  let [imageURI, setImageURI] = useState(null);

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
  
        let photo = await cameraRef.current.takePictureAsync({base64:true});
        console.log(photo.base64);
        //console.log(photo);
        setImage(photo.uri);
        var photoURI = "data:image/jpg;base64,"+ photo.base64
        setImageURI(photoURI);

    }
  };

  const savePicture = async () => {
    if (image) {
      let savePicture = "";
      try {
        console.log(imageURI);
        alert('Picture processed!');
        setImage(null);
        console.log('saved successfully');
        await fetch("http://127.0.0.1:5000/instructions", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(imageURI),
        }).then((response) => response.json()).then((json) => {
          savePicture = json.savePicture
          console.log("logged");
      });
      } catch (error) {
        console.log(error);
      }
    }
   
  };

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {!image ? (
        <Camera style={styles.camera} type={type} ref={cameraRef}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}
          >
            <Button
              title=""
              icon="retweet"
              onPress={() => {
                setType(
                  type === CameraType.back ? CameraType.front : CameraType.back
                );
              }}
            />
          </View>
        </Camera>
      ) : (
        <Image source={{ uri: image }} style={styles.camera} />
      )}

      <View style={styles.controls}>
        {image ? (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 30,
            }}
          >
            <Button
              title="Re-take"
              onPress={() => setImage(null)}
              icon="retweet"
            />
            <Button
              title="Press to process"
              onPress={savePicture}
              icon="check"
            />
          </View>
        ) : (
          <Button onPress={takePicture} icon="camera" />
        )}
      </View>
      <NavBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#FFF",
    padding: 2,
    alignItems: "center",
  },
  controls: {
    flex: 0.5,
  },
  button: {
    height: 40,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#E9730F",
    marginLeft: 10,
  },
  camera: {
    flex: 1,
    borderRadius: 20,
    width: 370,
    height: 300,
  },
  topControls: {
    flex: 1,
  },
});

