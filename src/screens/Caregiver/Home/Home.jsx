import { useEffect, useMemo, useState } from "react";
import { View, useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";

// API
import Tasks from "../../../Api/tasks";

// Components
import Hobbies from "../../../components/Hobbies";
import Header from "../../../components/Header/HomeHeader";
import MostRecent from "./components/MostRecent";
import Urgent from "./components/Urgent";
import Active from "./components/Active";
import AddReview from "../../../components/AddReview/AddReview";
import SendProposal from "../../../components/SendProposal";
import Loader from "./Loader";

const Home = ({ navigation, route }) => {
  const tasks = new Tasks();
  const abortController = new AbortController();
  const [loader, setLoader] = useState(true);
  const [isOpen, setOpen] = useState(false);
  const [id, setId] = useState("");
  const openModal = (id) => {
    setId(id);
    setOpen(true);
  };
  const MostRecentPage = () =>
    loader ? (
      <Loader />
    ) : (
      <MostRecent mostRecent={data} openModal={openModal} />
    );
  const UrgentPage = () =>
    loader ? <Loader /> : <Urgent urgent={data} openModal={openModal} />;
  const ActivePage = () => (
    <Active
      activeJobs={activeJobs}
      setReview={setReview}
      setOpenReview={setOpenReview}
    />
  );

  const renderScene = ({ route }) => {
    switch (route.key) {
      case "recent":
        return <MostRecentPage />;
      case "urgent":
        return <UrgentPage />;
      case "active":
        return <ActivePage />;
      default:
        return null;
    }
  };

  const [review, setReview] = useState({});
  const [openReview, setOpenReview] = useState(false);
  const [modal, setModal] = useState(false);
  const [data, setData] = useState([]);
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

  const getTasks = (type) => {
    setLoader(true);
    tasks
      .getTasks(type, "1|0SgYZTMEPZoxWgmxnCQPVWagRaXl4rA38w25ZwXH")
      .then((res) => {
        console.log("running fatch,");
        if (res.status === 200) {
          setData(res.data.data);
        }
      })
      .catch((err) => console.log(err?.response))
      .finally(() => setLoader(false));
  };

  useEffect(() => {
    if (index === 0) {
      getTasks("recent");
    } else if (index === 1) {
      getTasks("urgent");
    } else if (index === 2) {
      console.log("canceld");
    }
    return () => abortController.abort();
  }, [index]);

  return (
    <>
      <SendProposal item={id} show={isOpen} close={() => setOpen(false)} />

      <Hobbies show={modal} close={setModal} />
      <AddReview
        item={review}
        show={openReview}
        close={() => setOpenReview(false)}
      />

      <View style={{ flex: 1, backgroundColor: "#F9FAFB", paddingTop: 50 }}>
        <Header idx={index} setIndex={setIndex} count={1} />
        {index === 0 && MostRecentPage()}
        {index === 1 && UrgentPage()}
        {index === 2 && ActivePage()}

        {/* <TabView
          // lazy
          swipeEnabled={false}
          onTabPress={(props) => console.log(props)}
          renderTabBar={(props) => (
            <Header props={props} setIndex={setIndex} count={1} />
          )}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          getAccessibilityLabel={({ route }) => {
            route.accessibilityLabel;
            console.log(route, "toure");
          }}
        /> */}
      </View>
    </>
  );
};
export default Home;
