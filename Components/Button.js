import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Button({ onPress, width, height, text }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { width, height }]}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgrey",
    borderRadius: 50,
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});
