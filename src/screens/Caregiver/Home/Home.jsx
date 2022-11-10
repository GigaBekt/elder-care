import { useEffect, useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
  return (
    <>
      <Hobbies show={modal} close={setModal} />

      <View style={{ flex: 1, backgroundColor: "#F9FAFB" }}>
        <Header />
        <View style={{ paddingHorizontal: 13, paddingVertical: 24 }}>
          <Job />
        </View>
      </View>
    </>
  );
};
export default Home;
