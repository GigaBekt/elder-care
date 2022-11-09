// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Screens
import Auth from "./src/screens/Auth";
import Verify from "./src/screens/Verify";
import SignUp from "./src/screens/SignUp";
import Location from "./src/screens/SignUp/CareJob/Location";
import CareTypes from "./src/screens/SignUp/CareJob/CareTypes";
import Experiance from "./src/screens/SignUp/CareJob/Experiance";
import Details from "./src/screens/SignUp/CareJob/Details";
import Upload from "./src/screens/SignUp/CareJob/Upload";
import Home from "./src/screens/Home";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Experiance" component={Experiance} />

          <Stack.Screen name="Caretypes" component={CareTypes} />

          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Auth} />
          <Stack.Screen name="Verify" component={Verify} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Carejob location" component={Location} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Upload" component={Upload} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
