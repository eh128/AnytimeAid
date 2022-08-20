import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import CameraPage from "./Pages/CameraPage/CameraPage";
import ContactsPage from "./Pages/ContactsPage/ContactsPage";
import MapPage from "./Pages/MapPage/MapPage";

export default function App() {
  return (
    <View style={styles.container}>
      <CameraPage />
      <Text>router flux... plz help... gn</Text>
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
});
