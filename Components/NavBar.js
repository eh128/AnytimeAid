import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function NavBar({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("ContactsPage")}
        style={[styles.navButton, { borderRightWidth: 2, width: "32%" }]}
      >
        <Icon name="contacts" size={30} />
        <Text style={styles.navText}>Contacts</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("CameraPage")}
        style={[styles.navButton, { width: "36%" }]}
      >
        <Icon name="camerao" size={30} />
        <Text style={styles.navText}>Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("MapPage")}
        style={[styles.navButton, { borderLeftWidth: 2, width: "32%" }]}
      >
        <Ionicons name="location-outline" size={30} />
        <Text style={styles.navText}>Map</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 40,
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    borderWidth: 2,
    borderRadius: 20,
  },
  navButton: {
    paddingVertical: 20,
    alignItems: "center",
  },
  navText: {
    fontSize: 18,
  },
});
