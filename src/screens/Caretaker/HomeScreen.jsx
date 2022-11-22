import { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  ChatCircleText,
  MagnifyingGlass,
  UserCircle,
} from "phosphor-react-native";
import Messages from "./Messages";
import Profile from "./Profile";
import Home from "./Home";

const Tab = createBottomTabNavigator();

const HomeScreen = ({ route }) => {
  const renderIcon = (focused, route) => {
    let iconName;
    if (route.name === "Tasks") {
      iconName = focused ? (
        <MagnifyingGlass color="#1249CB" size={24} />
      ) : (
        <MagnifyingGlass color="#6B7280" size={24} />
      );
    } else if (route.name === "Messages") {
      iconName = focused ? (
        <ChatCircleText color="#1249CB" size={24} />
      ) : (
        <ChatCircleText color="#6B7280" size={24} />
      );
    } else if (route.name === "Profile") {
      iconName = focused ? (
        <UserCircle color="#1249CB" size={24} />
      ) : (
        <UserCircle color="#6B7280" size={24} />
      );
    }
    return iconName;
  };
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    route?.params?.modal && setVisible(true);
  }, []);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          return renderIcon(focused, route);
        },
        tabBarActiveTintColor: "#1249CB",
        tabBarInactiveTintColor: "#6B7280",
      })}
    >
      <Tab.Screen name="Tasks">
        {(props) => <Home {...props} openModal={visible} />}
      </Tab.Screen>
      <Tab.Screen name="Messages" component={Messages} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
