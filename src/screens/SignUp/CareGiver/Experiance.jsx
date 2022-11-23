import { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableHighlight } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SkeletonContent from "react-native-skeleton-content";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Componenets
import Header from "../../../components/Header";
import Next from "../Components/NextDot";

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

  const save = async () => {
    try {
      await AsyncStorage.setItem("care_experiences", activeDiv);
      navigation.navigate("Details");
    } catch (e) {
      console.log(e, "catch  experiance location ");
    }
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#f9fafb",
        flex: 1,
        justifyContent: "space-between",
      }}
    >
      <View>
        <View style={{ paddingVertical: 24, paddingHorizontal: 13 }}>
          <Header navigation={navigation} name="Sign Up" />
        </View>
        <Text style={[styles.headingText, { paddingHorizontal: 13 }]}>
          How much paid senior caregiving experience do you have?
        </Text>

        {loader ? (
          <SkeletonContent
            containerStyle={{ flex: 1, width: "100%", marginTop: 24 }}
            duration={1500}
            layout={[
              { width: "100%", height: 55, marginBottom: 14 },
              { width: "100%", height: 55, marginBottom: 14 },
              { width: "100%", height: 55, marginBottom: 14 },
              { width: "100%", height: 55, marginBottom: 14 },
            ]}
          >
            <Text style={styles.normalText}>Your content</Text>
            <Text style={styles.bigText}>Other content</Text>
          </SkeletonContent>
        ) : (
          <FlatList
            data={experiance}
            renderItem={experiances}
            keyExtractor={(item) => item.id}
            style={{ paddingTop: 24 }}
          />
        )}
      </View>

      <Next active={3} bgColor={activeDiv} navigate={() => save()} />
    </SafeAreaView>
  );
};
export default Experiance;
