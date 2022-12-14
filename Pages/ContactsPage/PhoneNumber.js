import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import NavBar from "../../Components/NavBar";
import PageTitle from "../../Components/Contacts/PageTitle";
import Icon from "react-native-vector-icons/Ionicons";
import Button from "../../Components/Button";
import { pink } from "../../Colors";
import ImageBack from "../../Components/Image";

const numbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const createUser = (phoneNumber, navigation) => {
  fetch("https://anytime-aid.herokuapp.com/user-create", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "phone number": phoneNumber,
    }),
  })
    .then(() => {
      console.log("done");
      navigation.navigate("ContactsPage");
    })
    .catch((err) => console.log(err));
};

export default function PhoneNumber({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState("+1");
  const [displayNumber, setDisplayNumber] = useState("+1");
  // const [code, setCode] = useState("");
  // const [codeDisplay, setCodeDisplay] = useState("");
  // const [firstPage, setFirstPage] = useState(true);
  // useEffect(() => {
  //   if (code.length > 6) setCode(code.substring(0, code.length - 1));
  //   setCodeDisplay(code.slice(0, 3) + " " + code.slice(3, 6));
  //   console.log(code);
  // }, [code]);
  useEffect(() => {
    if (phoneNumber.length <= 1) {
      setPhoneNumber(displayNumber.trim());
      return;
    }
    if (phoneNumber.length > 12) {
      setPhoneNumber(phoneNumber.substring(0, phoneNumber.length - 1));
    }
    setDisplayNumber(
      phoneNumber.slice(0, 2) +
        " " +
        phoneNumber.slice(2, 5) +
        " " +
        phoneNumber.slice(5, 8) +
        " " +
        phoneNumber.slice(8, 12)
    );
  }, [phoneNumber]);

  // return firstPage ? (
  return (
    <View style={[styles.container, { backgroundColor: pink }]}>
      <PageTitle text="Verify Phone Number" />

      <View style={displayStyles.container}>
        <Text style={displayStyles.text}>Enter your phone number</Text>
        <View style={displayStyles.displayContainer}>
          <Text style={displayStyles.phoneNumber}>{displayNumber}</Text>
        </View>
      </View>

      {numbers.map((row, index) => {
        return (
          <View key={index} style={keyStyles.numberPad}>
            {row.map((number) => (
              <TouchableOpacity
                key={number}
                onPress={() => setPhoneNumber(phoneNumber + number.toString())}
                style={keyStyles.numberPadCell}
              >
                <Text style={keyStyles.number}>{number}</Text>
              </TouchableOpacity>
            ))}
          </View>
        );
      })}
      <View style={keyStyles.numberPad}>
        <View style={{ width: 88 }}></View>
        <TouchableOpacity
          style={keyStyles.numberPadCell}
          onPress={() => setPhoneNumber(phoneNumber + "0")}
        >
          <Text style={keyStyles.number}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={keyStyles.numberPadCell}
          onPress={() =>
            setPhoneNumber(phoneNumber.substring(0, phoneNumber.length - 1))
          }
        >
          <Icon name="backspace-outline" size={28} />
        </TouchableOpacity>
      </View>

      <View style={styles.button}>
        <Button
          width={300}
          height={55}
          fontSize={22}
          text={"Verify"}
          onPress={() => {
            createUser(phoneNumber, navigation);
          }}
        />
      </View>
      <ImageBack />
      <NavBar navigation={navigation} />
    </View>
  );
  //  : (
  //   <View style={[styles.container, { backgroundColor: "#FBDDDD" }]}>
  //     <PageTitle text="Verify Phone Number" />

  //     <View style={displayStyles.container}>
  //       <Text style={displayStyles.text}>Enter your verification code</Text>
  //       <View style={displayStyles.displayContainer}>
  //         <Text style={displayStyles.phoneNumber}>{codeDisplay}</Text>
  //       </View>
  //     </View>

  //     {numbers.map((row, index) => {
  //       return (
  //         <View key={index} style={keyStyles.numberPad}>
  //           {row.map((number) => (
  //             <TouchableOpacity
  //               key={number}
  //               onPress={() => setCode(code + number.toString())}
  //               style={keyStyles.numberPadCell}
  //             >
  //               <Text style={keyStyles.number}>{number}</Text>
  //             </TouchableOpacity>
  //           ))}
  //         </View>
  //       );
  //     })}
  //     <View style={keyStyles.numberPad}>
  //       <View style={{ width: 88 }}></View>
  //       <TouchableOpacity
  //         style={keyStyles.numberPadCell}
  //         onPress={() => setCode(code + "0")}
  //       >
  //         <Text style={keyStyles.number}>0</Text>
  //       </TouchableOpacity>
  //       <TouchableOpacity
  //         style={keyStyles.numberPadCell}
  //         onPress={() => setCode(code.substring(0, code.length - 1))}
  //       >
  //         <Icon name="backspace-outline" size={28} />
  //       </TouchableOpacity>
  //     </View>

  //     <View style={styles.button}>
  //       <Button
  //         width={320}
  //         height={55}
  //         fontSize={22}
  //         text={"Verify"}
  //         onPress={() => {
  //           setFirstPage(true);
  //           navigation.navigate("ContactsPage");
  //         }}
  //       />
  //     </View>
  //     <ImageBack />
  //     <NavBar navigation={navigation} />
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  button: {
    marginTop: 30,
  },
});
const displayStyles = StyleSheet.create({
  container: {
    marginVertical: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  displayContainer: {
    padding: 10,
    borderRadius: 10,
    marginTop: 25,
    width: "70%",
    backgroundColor: "white",
  },
  phoneNumber: {
    fontSize: 30,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
  },
});
const keyStyles = StyleSheet.create({
  numberPad: {
    width: "85%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
  },
  numberPadCell: {
    alignSelf: "center",
    paddingVertical: 22,
    paddingHorizontal: 30,
  },
  number: {
    fontSize: 30,
  },
});
