import { useEffect, useState, useCallback } from "react";
import { FlatList, View } from "react-native";

// Components
import Hobbies from "../../../components/Hobbies";
import Job from "../../../components/Job/Job";
import Header from "../../../components/Header/HomeHeader";

const Home = ({ navigation, route }) => {
  const [modal, setModal] = useState(true);
  useEffect(() => {
    route?.params?.modal ? setModal(true) : setModal(false);
    return () => setModal(false);
  }, []);

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

  const renderItem = ({ item }) => {
    return <Job item={item} />;
  };
  return (
    <>
      <Hobbies show={modal} close={setModal} />
      <View style={{ flex: 1, backgroundColor: "#F9FAFB" }}>
        <Header />
        <View style={{ paddingHorizontal: 13, marginTop: 24 }}>
          <FlatList
            data={mostRecent}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            style={{ marginBottom: 150 }}
          />
        </View>
      </View>
    </>
  );
};
export default Home;
