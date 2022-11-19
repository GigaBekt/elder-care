import {
  Car,
  ForkKnife,
  MapPinLine,
  Bathtub,
  Heart,
} from "phosphor-react-native";
import { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableHighlight } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SkeletonContent from "react-native-skeleton-content";
import AsyncStorage from "@react-native-async-storage/async-storage";
// Componenets
import Header from "../../../components/Header";
import Next from "./Next";
// CSS
import styles from "../styles";

// API
import AdditionalInfo from "../../../Api/AdditionalInfo";

const CareTypes = ({ navigation }) => {
  const abortController = new AbortController();
  const additionalInfo = new AdditionalInfo();

  const [loader, setLoader] = useState(true);
  const [selected, setSelected] = useState("");
  const [types, setTypes] = useState([]);

  const saveId = async (value) => {
    try {
      await AsyncStorage.setItem("care_service_id", value);
    } catch (e) {
      // save error
    }
  };

  const renderIcon = (item) => {
    if (item.icon == "Car") {
      return <Car weight="duotone" color="#1249CB" size={32} />;
    } else if (item.icon == "ForkKnife") {
      return <ForkKnife weight="duotone" color="#1249CB" size={32} />;
    } else if (item.icon == "Heart") {
      return <Heart weight="duotone" color="#1249CB" size={32} />;
    } else if (item.icon == "MapPinLine") {
      return <MapPinLine weight="duotone" color="#1249CB" size={32} />;
    } else if (item.icon == "Bathtub") {
      return <Bathtub weight="duotone" color="#1249CB" size={32} />;
    }
  };
  const typesList = ({ item }) => {
    return (
      <TouchableHighlight
        underlayColor="none"
        onPress={() => {
          setSelected(item.id);
          saveId(item.id);
        }}
      >
        <View
          style={[styles.singleBox, selected === item.id ? styles.active : ""]}
        >
          <View>{renderIcon(item)}</View>
          <View
            style={{
              marginLeft: 16,
            }}
          >
            <Text style={styles.textHeader}>{item.name}</Text>
            <Text style={styles.text}>{item.description}.</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  const getServices = () => {
    additionalInfo
      .getServices()
      .then((res) => {
        if (res.status === 200) {
          const { data } = res.data;
          setTypes(data);
        }
      })
      .catch((err) => {
        console.log(err?.response);
      })
      .finally(() => setLoader(false));
  };

  useEffect(() => {
    getServices();
    return () => {
      abortController.abort();
      setLoader(true);
    };
  }, []);

  const save = () => {
    navigation.navigate("createTask second");
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
          <Header navigation={navigation} name="Create Job" />
        </View>
        <Text style={styles.headingText}>
          What kind of help are you looking for?
        </Text>

        {loader ? (
          <SkeletonContent
            containerStyle={{ flex: 1, width: "100%", marginTop: 24 }}
            duration={1500}
            layout={[
              { width: "100%", height: 75, marginBottom: 14 },
              { width: "100%", height: 75, marginBottom: 14 },
              { width: "100%", height: 75, marginBottom: 14 },
              { width: "100%", height: 75, marginBottom: 14 },
              { width: "100%", height: 75, marginBottom: 14 },
            ]}
          />
        ) : (
          <FlatList
            data={types}
            renderItem={typesList}
            keyExtractor={(item) => item.id}
            style={{ paddingTop: 24 }}
          />
        )}
      </View>

      <Next active={1} bgColor={selected} navigate={() => save()} />
    </SafeAreaView>
  );
};
export default CareTypes;
