import { Image } from "react-native";

export default function ImageBack() {
  return (
    <Image
      source={require("../assets/logo.jpg")}
      style={{
        top: "25%",
        position: "absolute",
        justifyContent: "center",
        alignSelf: "center",
        zIndex: -1,
      }}
    />
  );
}
