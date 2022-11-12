// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

// Screens
import Auth from "./src/screens/Auth";
import Verify from "./src/screens/Verify";
import SignUp from "./src/screens/SignUp";
import Location from "./src/screens/SignUp/CareJob/Location";
import CareTypes from "./src/screens/SignUp/CareJob/CareTypes";
import Experiance from "./src/screens/SignUp/CareJob/Experiance";
import Details from "./src/screens/SignUp/CareJob/Details";
import Upload from "./src/screens/SignUp/CareJob/Upload";
import Caregiver from "./src/screens/Caregiver/HomeScreen";
import SendProposal from "./src/components/SendProposal";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* <Stack.Group screenOptions={{ presentation: "modal" }}>
            <Stack.Screen name="Login" component={Auth} />
          </Stack.Group> */}

          <Stack.Screen
            name="HomeScreen"
            component={Caregiver}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Login" component={Auth} />
          <Stack.Screen name="Caretypes" component={CareTypes} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Experiance" component={Experiance} />
          <Stack.Screen name="Verify" component={Verify} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Carejob location" component={Location} />
          <Stack.Screen name="Upload" component={Upload} />
          <Stack.Screen component={SendProposal} name="SendProposal" />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
