import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CameraPage from "./Pages/CameraPage/CameraPage";
import ContactsPage from "./Pages/ContactsPage/ContactsPage";
import MapPage from "./Pages/MapPage/MapPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CameraPage"
          component={CameraPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ContactsPage"
          component={ContactsPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MapPage"
          component={MapPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
