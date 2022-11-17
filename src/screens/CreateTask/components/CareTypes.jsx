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

// Componenets
import Header from "../../../components/Header";
import Next from "../Components/Next";
// CSS
import styles from "../styles";

// API
import AdditionalInfo from "../../../Api/AdditionalInfo";

const CareTypes = ({ navigation }) => {
  let abortController = new AbortController();
  const additionalInfo = new AdditionalInfo();

  const [loader, setLoader] = useState(true);
  const [selected, setSelected] = useState([]);
  const [types, setTypes] = useState([]);
  const selectType = (item) => {
    const findItem = selected.indexOf(item.id);
    if (findItem !== -1) {
      const activeList = selected.slice();
      activeList.splice(findItem, 1);
      setSelected(activeList);
    } else {
      setSelected([...selected, item.id]);
    }
  };

  const typesList = ({ item }) => {
    const renderIcon = () => {
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
    return (
      <TouchableHighlight underlayColor="none" onPress={() => selectType(item)}>
        <View
          style={[
            styles.singleBox,
            selected.includes(item.id) ? styles.active : "",
          ]}
        >
          <View>{renderIcon()}</View>
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
        <Text style={styles.headingText}>
          What type of care do you want to provide?
        </Text>
        <Text style={styles.spanText}>You can select multiple</Text>

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
          >
            <Text style={styles.normalText}>Your content</Text>
            <Text style={styles.bigText}>Other content</Text>
          </SkeletonContent>
        ) : (
          <FlatList
            data={types}
            renderItem={typesList}
            keyExtractor={(item) => item.id}
            style={{ paddingTop: 24 }}
          />
        )}
      </View>

      <Next active={2} navigate={() => navigation.navigate("Experiance")} />
    </SafeAreaView>
  );
};
export default CareTypes;
