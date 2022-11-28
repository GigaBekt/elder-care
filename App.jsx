import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import React, { useState, useEffect, useRef } from "react";
import { Platform } from "react-native";
// Screens
import Auth from "./src/screens/Auth";
import Verify from "./src/screens/Verify";
import SignUp from "./src/screens/SignUp";

// CareGiver
import Caregiver from "./src/screens/Caregiver/HomeScreen";
import Location from "./src/screens/SignUp/CareGiver/Location";
import CareTypes from "./src/screens/SignUp/CareGiver/CareTypes";
import Experiance from "./src/screens/SignUp/CareGiver/Experiance";
import Details from "./src/screens/SignUp/CareGiver/Details";
import Upload from "./src/screens/SignUp/CareGiver/Upload";
import SendProposal from "./src/components/SendProposal";

// CareTaker
import CareTaker from "./src/screens/Caretaker/HomeScreen";
import LocationTaker from "./src/screens/SignUp/CareTaker/Location";
import DetailsTaker from "./src/screens/SignUp/CareTaker/Details";

// Create Task
import CareTypeTask from "./src/screens/CreateTask/components/CareTypes";
import TaskDuration from "./src/screens/CreateTask/components/Duration";
import TaskDetails from "./src/screens/CreateTask/components/Details";
import MessageDetails from "./src/screens/MessageDetails/MessageDetails";
import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});
// Navigation.getCurrentScreen()

const App = () => {
  // const [route, setRoute] = useState(false);
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  const [authorized, setAuthorized] = useState(false);
  const [info, setInfo] = useState({});
  const getInfo = async () => {
    const information = await AsyncStorage.getItem("information");
    if (information) {
      setAuthorized(true);
      setInfo(JSON.parse(information));
    } else setAuthorized(false);
  };
  useEffect(() => {
    getInfo();
  }, []);

  // const navigationRef = useNavigationContainerRef();
  // const route = navigationRef?.getCurrentRoute();

  // useEffect(() => {
  //   route && console.log(route, "route");
  // }, [route]);

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
        console.log(notification, "notification");
      });

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response, "response");
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);
  return (
    <SafeAreaProvider>
      <StatusBar style={"dark"} />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {authorized ? (
            info?.type?.id === "eb4fe646-b515-47fd-8643-fd8081563455" ? (
              <Stack.Screen
                name="HomeScreenFirst"
                component={Caregiver}
                options={{ headerShown: false }}
              />
            ) : (
              <Stack.Screen
                name="HomeScreenTakerFirst"
                component={CareTaker}
                options={{ headerShown: false }}
              />
            )
          ) : (
            <Stack.Screen name="LoginComp" component={Auth} />
          )}

          <Stack.Screen name="Login" component={Auth} />
          <Stack.Screen name="Caretypes" component={CareTypes} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Upload" component={Upload} />
          <Stack.Screen name="CareGiver location" component={Location} />
          <Stack.Screen name="Experiance" component={Experiance} />
          <Stack.Screen
            name="HomeScreenTaker"
            component={CareTaker}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Verify" component={Verify} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="createTask first" component={CareTypeTask} />
          <Stack.Screen name="createTask second" component={TaskDuration} />
          <Stack.Screen name="createTask third" component={TaskDetails} />
          <Stack.Screen
            name="HomeScreen"
            component={Caregiver}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="CareTaker location" component={LocationTaker} />
          <Stack.Screen name="Details Taker" component={DetailsTaker} />
          <Stack.Screen name="message details" component={MessageDetails} />
          <Stack.Screen name="SendProposal" component={SendProposal} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

// npd2tcm4VMT1fab-kqc

async function sendPushNotification(expoPushToken) {
  const message = {
    to: expoPushToken,
    sound: "default",
    title: "Original Title",
    body: "And here is the body!",
    data: { someData: "goes here" },
  };

  await fetch("https://exp.host/--/api/v2/push/send", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Accept-encoding": "gzip, deflate",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    console.log("Must use physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  return token;
}

export default App;
