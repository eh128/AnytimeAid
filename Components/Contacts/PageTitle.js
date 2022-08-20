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
    marginTop: 70,
    justifyContent: "flex-start",
    width: "85%",
  },
  text: {
    fontSize: 28,
  },
});

export default PageTitle;
