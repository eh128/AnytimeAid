import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import AntIcon from "react-native-vector-icons/AntDesign";

export default function Contacts({ name, phoneNumber, address, isExpanded }) {
  return (
    <TouchableOpacity style={[styles.container]}>
      <Text style={styles.text}>hiasdfasdfasd</Text>
      <Icon name="trash-o" size={30} />
      <AntIcon name="edit" size={30} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgrey",
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});
