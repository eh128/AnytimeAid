import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import NavBar from "../../Components/NavBar";
import React, { useState, useEffect } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import * as Location from "expo-location";

export default function MapPage({ navigation }) {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        navigation.navigate("CameraPage");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      let where = (await Location.reverseGeocodeAsync(location.coords))[0];
      console.log(where);
      setAddress(
        where["name"] +
          ", " +
          where["city"] +
          ", " +
          where["region"] +
          ", " +
          where["country"]
      );
    })();
  }, []);

  if (!location) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" />

        <NavBar navigation={navigation} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          }}
        />
      </MapView>
      {address ? (
        <View style={styles.addressContainer}>
          <Text style={styles.header}>Your Location</Text>
          <Text style={styles.text}>{address}</Text>
        </View>
      ) : (
        ""
      )}

      <NavBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  addressContainer: {
    position: "absolute",
    bottom: 160,
    backgroundColor: "pink",
    width: "70%",
    height: "16%",
    borderRadius: 15,
    alignItems: "center",
    padding: 20,
  },
  header: {
    fontWeight: "bold",
    fontSize: 22,
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    width: "80%",
    marginTop: 20,
  },
});
