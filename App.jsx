import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

// Screens
import Auth from "./src/screens/Auth";
import Verify from "./src/screens/Verify";
import SignUp from "./src/screens/SignUp";

import Location from "./src/screens/SignUp/CareGiver/Location";
import CareTypes from "./src/screens/SignUp/CareGiver/CareTypes";
import Experiance from "./src/screens/SignUp/CareGiver/Experiance";
import Details from "./src/screens/SignUp/CareGiver/Details";
import Upload from "./src/screens/SignUp/CareGiver/Upload";

import Caregiver from "./src/screens/Caregiver/HomeScreen";
import CareTaker from "./src/screens/Caretaker/HomeScreen";

import SendProposal from "./src/components/SendProposal";

import LocationTaker from "./src/screens/SignUp/CareTaker/Location";
import DetailsTaker from "./src/screens/SignUp/CareTaker/Details";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      {/* <StatusBar barStyle="dark-content" backgroundColor="#fff" /> */}

      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* <Stack.Group screenOptions={{ presentation: "modal" }}>
            <Stack.Screen name="Login" component={Auth} />
          </Stack.Group> */}
          <Stack.Screen
            name="HomeScreenTaker"
            component={CareTaker}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HomeScreen"
            component={Caregiver}
            options={{ headerShown: false }}
          />

          <Stack.Screen name="Login" component={Auth} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="CareGiver location" component={Location} />
          <Stack.Screen name="CareTaker location" component={LocationTaker} />

          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Details Taker" component={DetailsTaker} />

          <Stack.Screen name="Upload" component={Upload} />
          <Stack.Screen name="Caretypes" component={CareTypes} />
          <Stack.Screen name="Experiance" component={Experiance} />
          <Stack.Screen name="Verify" component={Verify} />
          <Stack.Screen component={SendProposal} name="SendProposal" />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
