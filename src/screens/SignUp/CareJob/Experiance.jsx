import { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableHighlight,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import SkeletonPlaceholder from "react-native-skeleton-placeholder";
// Componenets
import Header from "../../../components/Header";
import Next from "../Components/Next";

// CSS
import styles from "../styles";
// API
import AdditionalInfo from "../../../Api/AdditionalInfo";
const Experiance = ({ navigation }) => {
  const additionalInfo = new AdditionalInfo();
  const abortController = new AbortController();

  const [loader, setLoader] = useState(true);
  const [experiance, setExperiance] = useState([]);
  const [activeDiv, setActive] = useState("");

  const getExperiances = () => {
    additionalInfo
      .workingExperiance()
      .then((res) => {
        if (res.status === 200) {
          const { data } = res.data;
          setExperiance(data);
        }
      })
      .catch((err) => {
        console.log(err?.response);
      })
      .finally(() => setLoader(false));
  };

  useEffect(() => {
    getExperiances();
    return () => {
      abortController.abort();
      setLoader(true);
    };
  }, []);
  const experiances = ({ item }) => (
    <TouchableHighlight underlayColor="none" onPress={() => setActive(item.id)}>
      <View
        style={[styles.singleBox, activeDiv === item.id ? styles.active : ""]}
      >
        <View>
          <Text style={styles.textHeader}>{item.name}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#f9fafb",
        flex: 1,
        justifyContent: "space-between",
      }}
    >
      <View style={{ paddingHorizontal: 13 }}>
        <View style={{ paddingVertical: 24 }}>
          <Header navigation={navigation} name="Sign Up" />
        </View>
        <Text style={styles.headingText}>
          How much paid senior caregiving experience do you have?
        </Text>

        {!loader ? (
          <Text>loading...</Text>
        ) : (
          // <SkeletonPlaceholder borderRadius={4}>
          //   <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
          //     <SkeletonPlaceholder.Item
          //       width={60}
          //       height={60}
          //       borderRadius={50}
          //     />
          //     <SkeletonPlaceholder.Item marginLeft={20}>
          //       <SkeletonPlaceholder.Item width={120} height={20} />
          //       <SkeletonPlaceholder.Item
          //         marginTop={6}
          //         width={80}
          //         height={20}
          //       />
          //     </SkeletonPlaceholder.Item>
          //   </SkeletonPlaceholder.Item>
          // </SkeletonPlaceholder>
          <FlatList
            data={experiance}
            renderItem={experiances}
            keyExtractor={(item) => item.id}
            style={{ marginTop: 24 }}
          />
        )}
      </View>

      <Next active={3} navigate={() => navigation.navigate("Details")} />
    </SafeAreaView>
  );
};
export default Experiance;
