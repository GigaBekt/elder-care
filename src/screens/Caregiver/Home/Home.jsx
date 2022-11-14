import { useEffect, useState } from "react";
import { View, useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";

// Components
import Hobbies from "../../../components/Hobbies";
import Header from "../../../components/Header/HomeHeader";
import MostRecent from "./components/MostRecent";
import Urgent from "./components/Urgent";
import Active from "./components/Active";

const Home = ({ navigation, route }) => {
  const MostRecentPage = () => <MostRecent mostRecent={mostRecent} />;
  const UrgentPage = () => <Urgent urgent={mostRecent} />;
  const ActivePage = () => <Active activeJobs={activeJobs} />;

  const renderScene = SceneMap({
    recent: MostRecentPage,
    urgent: UrgentPage,
    active: ActivePage,
  });

  const [modal, setModal] = useState(false);
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

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "recent", title: "Most Recent" },
    { key: "urgent", title: "urgent" },
    { key: "active", title: "active" },
  ]);
  const layout = useWindowDimensions();

  useEffect(() => {
    route?.params?.modal && setModal(true);
    return () => setModal(false);
  }, []);

  return (
    <>
      <Hobbies show={modal} close={setModal} />
      <View style={{ flex: 1, backgroundColor: "#F9FAFB", paddingTop: 50 }}>
        <TabView
          lazy
          renderTabBar={(props) => (
            <Header props={props} setIndex={setIndex} count={1} />
          )}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
        />
      </View>
    </>
  );
};
export default Home;
