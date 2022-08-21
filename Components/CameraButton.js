import * as React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Button({ title, onPress, icon, color }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Entypo name={icon} size={30} color={color ? color : "grey"} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "grey",
    borderRadius: 50,
    paddingLeft:20,
    paddingRight:15,
    marginLeft:3,
    marginRight:3,
    marginTop:3,

  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    color: "grey",
    marginLeft: 5,
  },
});
