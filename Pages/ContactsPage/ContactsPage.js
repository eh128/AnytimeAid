import { StyleSheet, Text, View } from "react-native";
import NavBar from "../../Components/NavBar";
import Button from "../../Components/Button";
import PageTitle from "../../Components/Contacts/PageTitle";
import Contacts from "../../Components/Contacts/Contacts";

export default function ContactsPage({ navigation }) {
  return (
    <View style={styles.container}>
      <PageTitle text="Emergency Contacts" />
      <Contacts />
      <Button
        onPress={() => console.log("pressed!!!!!!")}
        width={150}
        height={60}
        text="Call 911"
      />
      <NavBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
