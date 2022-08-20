import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function NavBar({ navigation }) {
  return (
    <View style={styles.container}>
      <Text
        style={styles.navButton}
        onPress={() => navigation.navigate("ContactsPage")}
      >
        Contacts
      </Text>
      <Text
        style={styles.navButton}
        onPress={() => navigation.navigate("CameraPage")}
      >
        Camera
      </Text>
      <Text
        style={styles.navButton}
        onPress={() => navigation.navigate("MapPage")}
      >
        Map
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 90,
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-between",
    backgroundColor: "red",
  },
  navButton: {
    fontSize: 18,
  },
});
