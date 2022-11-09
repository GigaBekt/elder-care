import { useEffect, useState } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Componeneys
import Hobbies from "../../components/Hobbies";

const Home = ({ navigation, route }) => {
  const [modal, setModal] = useState(true);

  useEffect(() => {
    route?.params?.modal ? setModal(true) : setModal(false);
    return () => setModal(false);
  }, []);
  return (
    <>
      <Hobbies show={modal} close={setModal} />
      <SafeAreaView>
        <Text>Home</Text>
      </SafeAreaView>
    </>
  );
};
export default Home;
