import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState, useEffect } from "react";
import {
  ChatCircleText,
  MagnifyingGlass,
  NotePencil,
} from "phosphor-react-native";

import Proposals from "./Proposals";
import Messages from "./Messages";
import Profile from "./Profile";
import Home from "./Home";

const Tab = createBottomTabNavigator();

const HomeScreen = ({ route }) => {
  const renderIcon = (route, fouces) => {
    let iconName;
    if (route.name === "Home") {
      iconName = focused ? (
        <MagnifyingGlass color="#1249CB" size={24} />
      ) : (
        <MagnifyingGlass color="#6B7280" size={24} />
      );
    } else if (route.name === "Proposals") {
      iconName = focused ? (
        <NotePencil color="#1249CB" size={24} />
      ) : (
        <NotePencil color="#6B7280" size={24} />
      );
    } else if (route.name === "Messages") {
      iconName = focused ? (
        <ChatCircleText color="#1249CB" size={24} />
      ) : (
        <ChatCircleText color="#6B7280" size={24} />
      );
    } else if (route.name === "Profile") {
      iconName = focused ? (
        <ChatCircleText color="#1249CB" size={24} />
      ) : (
        <ChatCircleText color="#6B7280" size={24} />
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
          return renderIcon(route, focused);
        },
        tabBarActiveTintColor: "#1249CB",
        tabBarInactiveTintColor: "#6B7280",
      })}
    >
      <Tab.Screen name="Home">
        {(props) => <Home {...props} openModal={visible} />}
      </Tab.Screen>
      <Tab.Screen name="Proposals" component={Proposals} />
      <Tab.Screen name="Messages" component={Messages} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
