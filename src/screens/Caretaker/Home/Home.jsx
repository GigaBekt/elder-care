import { useEffect, useState } from "react";
import { View, Text, useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";

// Components
import Hobbies from "../../../components/Hobbies";
import Header from "../../../components/Header/HomeHeader";
import MostRecent from "./components/MostRecent";
import Urgent from "./components/Urgent";
import Active from "./components/Active";
import AddReview from "../../../components/AddReview/AddReview";

const Home = ({ navigation, route }) => {
  const mostRecent = [
    {
      id: 1,
      firstName: "Bruce",
      lastName: "Wayne",
      type: "personal care",
      date: "26 January, 12:38 PM",
      hours: 1,
      description:
        "Personal care tasks may not be performed at this level. Level II – Home Management Personal Home Aide Services at this level are intended to provide support to individuals ",
    },
    {
      id: 2,
      firstName: "Barry",
      lastName: "Allen",
      type: "personal care",
      date: "26 January, 12:38 PM",
      hours: 2,
      description:
        "Personal care tasks may not be performed at this level. Level II – Home Management Personal Home Aide Services at this level are intended to provide support to individuals ",
    },
    {
      id: 3,
      firstName: "Oliver",
      lastName: "Queen",
      type: "personal care",
      date: "26 January, 12:38 PM",
      hours: 3,
      description:
        "Personal care tasks may not be performed at this level. Level II – Home Management Personal Home Aide Services at this level are intended to provide support to individuals ",
    },
    {
      id: 21,
      firstName: "Thoams",
      lastName: "Wayne",
      type: "personal care",
      date: "26 January, 12:38 PM",
      hours: 42,
      description:
        "Personal care tasks may not be performed at this level. Level II – Home Management Personal Home Aide Services at this level are intended to provide support to individuals ",
    },
    {
      id: 31,
      firstName: "Martha",
      lastName: "Kane",
      type: "personal care",
      date: "26 January, 12:38 PM",
      hours: 1,
      description:
        "Personal care tasks may not be performed at this level. Level II – Home Management Personal Home Aide Services at this level are intended to provide support to individuals ",
    },
  ];
  const activeJobs = [
    {
      id: 1,
      firstName: "Bruce",
      lastName: "Wayne",
      type: "personal care",
      date: "26 January, 12:38 PM",
      hours: 1,
      description:
        "Personal care tasks may not be performed at this level. Level II – Home Management Personal Home Aide Services at this level are intended to provide support to individuals ",
      status: "started",
    },
    {
      id: 2,
      firstName: "Peter",
      lastName: "Parker",
      type: "personal care",
      date: "26 January, 12:38 PM",
      hours: 1,
      description:
        "Personal care tasks may not be performed at this level. Level II – Home Management Personal Home Aide Services at this level are intended to provide support to individuals ",
    },
    {
      id: 3,
      firstName: "I am",
      lastName: "Ironman",
      type: "personal care",
      date: "26 January, 12:38 PM",
      hours: 1,
      description:
        "Personal care tasks may not be performed at this level. Level II – Home Management Personal Home Aide Services at this level are intended to provide support to individuals ",
    },
  ];

  useEffect(() => {
    route?.params?.modal && setModal(true);
    return () => setModal(false);
  }, []);

  return (
    <>
      <View style={{ flex: 1, backgroundColor: "#F9FAFB", paddingTop: 50 }}>
        <Text>test</Text>
      </View>
    </>
  );
};
export default Home;
