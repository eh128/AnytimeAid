import { StyleSheet, Text, View } from "react-native";

const PageTitle = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 90,
    justifyContent: "flex-start",
    width: "85%",
  },
  text: {
    fontWeight: "bold",
    fontSize: 24,
  },
});

export default PageTitle;
