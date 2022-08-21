import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Button({
  onPress,
  width,
  height,
  text,
  fontSize,
  fontColor = "white",
  color = "#FD6767",
  fontWeight = "bold",
}) {
  console.log(color);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { width, height, backgroundColor: color }]}
    >
      <Text
        style={{
          fontSize: fontSize ? fontSize : 18,
          color: fontColor,
          fontWeight,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
});
