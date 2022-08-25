import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  TouchableHighlight,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import NavBar from "../../Components/NavBar";
import Button from "../../Components/Button";
import PageTitle from "../../Components/Contacts/PageTitle";
import Accordion from "react-native-collapsible/Accordion";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntIcon from "react-native-vector-icons/AntDesign";
import { pink } from "../../Colors";
import ImageBack from "../../Components/Image";
import call from "react-native-phone-call";

const args = {
  number: "911",
  prompt: false,
  skipCanOpen: true,
};

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
        <AntIcon name="edit" size={30} onPress={() => console.log("edit")} />
        <FontAwesome
          name="trash-o"
          size={30}
          onPress={() => console.log("delete")}
        />
      </View>
    </View>
  );
};
const sectionContent = (section) => {
  return (
    <View style={contactStyles.content}>
      <Text style={[contactStyles.label]}>Phone Number</Text>
      <TouchableHighlight
        onPress={() => {
          call({
            number: section.phoneNumber,
            prompt: false,
            skipCanOpen: true,
          }).catch((error) => console.log(error));
        }}
        style={{ width: 140, alignSelf: "flex-end" }}
        underlayColor={pink}
      >
        <Text style={contactStyles.text}>
          {"(" +
            section.phoneNumber.slice(0, 3) +
            ") " +
            section.phoneNumber.slice(3, 6) +
            "-" +
            section.phoneNumber.slice(6, 10)}
        </Text>
      </TouchableHighlight>
      <Text style={[contactStyles.label, { marginTop: 5 }]}>Address</Text>
      <Text style={contactStyles.text}>{section.address}</Text>
    </View>
  );
};

const getContacts = fetch(
  "https://anytime-aid.herokuapp.com/emergency-contacts-fetch-user-info",
  {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "phone number": "+12222222222",
    }),
  }
)
  .then((response) => response.json())
  .then((json) => {
    setContacts(json.user_info);
    console.log(json.user_info);
    return;
  });

const data = [
  {
    name: "Steven Wang",
    phoneNumber: "7805569823",
    address: "8893 Main Street, Toronto Ontario",
  },
  {
    name: "James Luck",
    phoneNumber: "2365589982",
    address: "60 East 20th Avenue, Edmonton Alberta",
  },
  {
    name: "Kate Smith",
    phoneNumber: "4569823621",
    address: "8893 Lane Street, Waterloo Ontario",
  },
];

export default function ContactsPage({ navigation }) {
  const [expanded, setExpanded] = useState([]);
  const [verified, setVerified] = useState(false);
  const [contacts, setContacts] = useState([]);
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
          {
            text: "Verify",
            onPress: () => {
              setVerified(true);
              navigation.navigate("PhoneNumber");
            },
          },
        ]
      );
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: pink }]}>
      <PageTitle text="Emergency Contacts" />
      <View
        style={{
          width: "83%",
          marginTop: 35,
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
          onPress={() => call(args).catch(console.log("error"))}
          width={120}
          height={55}
          text="Call 911"
          fontColor={"black"}
          fontWeight=""
          color={"#F4F4F4"}
          fontSize={20}
        />
        <Button
          onPress={() => navigation.navigate("NewContact")}
          width={180}
          height={55}
          fontColor={"black"}
          color={"#F4F4F4"}
          fontWeight=""
          text="New Contact"
        />
      </View>
      <NavBar navigation={navigation} />
      <ImageBack />
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
