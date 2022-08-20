import { StyleSheet, Text, View } from "react-native";
import NavBar from "../../Components/NavBar";

export default function MapPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Map Page</Text>
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
});
