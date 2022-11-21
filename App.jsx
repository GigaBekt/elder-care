import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
// import { StatusBar } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

const Stack = createNativeStackNavigator();

const App = () => {
  const [authorized, setAuthorized] = React.useState(false);
  const getTasks = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      console.log(token);
      setAuthorized(true);
    } else setAuthorized(false);
  };

  React.useEffect(() => {
    getTasks();
  }, []);
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* <Stack.Group screenOptions={{ presentation: "modal" }}>
            <Stack.Screen name="Login" component={Auth} />
          </Stack.Group> */}

          {authorized ? (
            <Stack.Screen
              name="HomeScreenTaker"
              component={CareTaker}
              options={{ headerShown: false }}
            />
          ) : (
            <Stack.Screen name="Login" component={Auth} />
          )}
          <Stack.Screen name="Login" component={Auth} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="createTask first" component={CareTypeTask} />
          <Stack.Screen name="createTask second" component={TaskDuration} />
          <Stack.Screen name="createTask third" component={TaskDetails} />
          <Stack.Screen
            name="HomeScreen"
            component={Caregiver}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="CareGiver location" component={Location} />
          <Stack.Screen name="CareTaker location" component={LocationTaker} />
          <Stack.Screen name="Details Taker" component={DetailsTaker} />
          <Stack.Screen name="Upload" component={Upload} />
          <Stack.Screen name="Caretypes" component={CareTypes} />
          <Stack.Screen name="Experiance" component={Experiance} />
          <Stack.Screen name="Verify" component={Verify} />
          <Stack.Screen name="message details" component={MessageDetails} />
          <Stack.Screen component={SendProposal} name="SendProposal" />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

// const App = () => {
//   return (
//     <View>
//       <Text>Hello World</Text>
//     </View>
//   );
// };

export default App;
