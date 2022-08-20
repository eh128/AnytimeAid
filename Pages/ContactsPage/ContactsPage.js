import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import NavBar from "../../Components/NavBar";
import Button from "../../Components/Button";
import PageTitle from "../../Components/Contacts/PageTitle";
import Accordion from "react-native-collapsible/Accordion";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntIcon from "react-native-vector-icons/AntDesign";

const sectionHeader = (section, _, isActive) => {
  return (
    <View style={[contactStyles.header]}>
      <View style={contactStyles.left}>
        {isActive ? (
          <Icon name="downcircle" size={30} />
        ) : (
          <Icon name="rightcircle" size={30} />
        )}
        <Text style={contactStyles.name}>{section.name}</Text>
      </View>
      <View style={contactStyles.right}>
        <AntIcon name="edit" size={30} />
        <FontAwesome name="trash-o" size={30} />
      </View>
    </View>
  );
};
const sectionContent = (section) => {
  return (
    <View style={contactStyles.content}>
      <Text style={[contactStyles.label]}>Phone Number</Text>
      <Text style={contactStyles.text}>{section.phoneNumber}</Text>
      <Text style={[contactStyles.label, { marginTop: 5 }]}>Address</Text>
      <Text style={contactStyles.text}>{section.address}</Text>
    </View>
  );
};
const data = [
  {
    name: "Tom",
    phoneNumber: "+1 (222) 333-4444",
    address: "8893 smt street, Toronto ON",
  },
  {
    name: "James",
    phoneNumber: "+12223334444",
    address: "8893 smt street, Toronto ON",
  },
  {
    name: "Kate",
    phoneNumber: "+12223334444",
    address: "8893 smt street, Toronto ON",
  },
];

export default function ContactsPage({ navigation }) {
  const [expanded, setExpanded] = useState([]);
  const [verified, setVerified] = useState(true);
  useEffect(() => {
    if (!verified)
      Alert.alert(
        "Verification Required",
        "Please verify your phone number to access your contacts list.",
        [
          {
            text: "Back",
            onPress: () => navigation.navigate("CameraPage"),
            style: "cancel",
          },
          { text: "Verify", onPress: () => navigation.navigate("PhoneNumber") },
        ]
      );
  });

  return (
    <View style={styles.container}>
      <PageTitle text="Emergency Contacts" />
      <View
        style={{
          width: "83%",
          marginTop: 25,
          height: "55%",
        }}
      >
        <Accordion
          sections={data}
          activeSections={expanded}
          renderHeader={sectionHeader}
          renderContent={sectionContent}
          onChange={(activeSections) => setExpanded(activeSections)}
          underlayColor={"lightgrey"}
          expandMultiple={true}
          sectionContainerStyle={{
            marginBottom: 20,
            backgroundColor: "pink",
            borderRadius: 10,
          }}
          renderAsFlatList={true}
        />
      </View>
      <View style={styles.buttons}>
        <Button
          onPress={() => console.log("pressed!!!!!!")}
          width={120}
          height={55}
          text="Call 911"
          fontSize={20}
        />
        <Button
          onPress={() => navigation.navigate("NewContact")}
          width={180}
          height={55}
          text="New Contact"
        />
      </View>
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
  buttons: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
  },
});
const contactStyles = StyleSheet.create({
  header: {
    height: 60,
    flexDirection: "row",
    borderRadius: 10,
    paddingLeft: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  right: {
    width: "30%",
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 15,
  },
  text: {
    alignSelf: "flex-end",
    fontSize: 18,
  },
  label: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
