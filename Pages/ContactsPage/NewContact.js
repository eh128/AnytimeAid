import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import ImageBack from "../../Components/Image";
import PageTitle from "../../Components/Contacts/PageTitle";
import NavBar from "../../Components/NavBar";
import Button from "../../Components/Button";
import { pink } from "../../Colors";
import call from "react-native-phone-call";

const args = {
  number: "911",
  prompt: false,
  skipCanOpen: true,
};

const NewContact = ({ navigation }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  // const submitContacts = () => {
  //   fetch("https://anytime-aid.herokuapp.com/emergency-contacts-create", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       name: name,
  //       "phone number": phoneNumber,
  //       address: address,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((json) => {
  //       navigation.navigate("ContactsPage");
  //       return json.success;
  //     });
  // };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.container, { backgroundColor: pink }]}>
        <PageTitle text={"New Emergency Contact"} />
        <View
          style={{ width: "100%", alignItems: "center", marginVertical: 50 }}
        >
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              placeholder="eg. John Smith"
              style={styles.input}
              value={name}
              onChangeText={(text) => setName(text)}
              autoCorrect={false}
            />
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              placeholder="eg. (238) 183-9973"
              style={styles.input}
              value={phoneNumber}
              onChangeText={(text) => setPhoneNumber(text)}
              autoCorrect={false}
              keyboardType={"number-pad"}
            />
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Address</Text>
            <TextInput
              value={address}
              onChangeText={(text) => setAddress(text)}
              placeholder="eg. 4492 Main Street, Toronto, Ontario"
              style={[styles.input, styles.address]}
              multiline={true}
            />
          </View>
        </View>
        <View style={{ marginTop: -40 }}>
          <Button
            width={300}
            height={60}
            text="Create New Contact"
            onPress={() => navigation.navigate("ContactsPage")}
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
            color="#F4F4F4"
            fontSize={20}
          />
          <Button
            onPress={() => navigation.navigate("ContactsPage")}
            width={180}
            height={55}
            color="#F4F4F4"
            fontColor={"black"}
            fontWeight=""
            text="See Contacts"
          />
        </View>
        <NavBar navigation={navigation} />
      </View>
    </TouchableWithoutFeedback>
  );
};

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
    marginTop: 120,
  },
  fieldContainer: {
    width: "85%",
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    padding: 5,
    paddingVertical: 2,
  },
  input: {
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 10,
    fontSize: 18,
  },
  address: {
    height: 80,
  },
});

export default NewContact;
