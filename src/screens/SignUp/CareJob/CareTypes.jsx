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
  const [selected, setSelected] = useState([]);
  const types = [
    {
      id: 1,
      name: "Household tasks",
      description: "Errands, housekeeping and meal prep.",
      icon: <ForkKnife color="#1249CB" size={32} />,
    },
    {
      id: 2,
      name: "Personal care",
      description: "Bathing, dressing and feeding",
      icon: <Bathtub color="#1249CB" size={32} />,
    },

    {
      id: 4,
      name: "Companionship",
      description: "Sharing hobbies and lending an ear",
      icon: <Heart color="#1249CB" size={32} />,
    },
    {
      id: 5,
      name: "Transportation",
      description: "Trips to appointments and errands.",
      icon: <Car color="#1249CB" size={32} />,
    },
    {
      id: 6,
      name: "Mobility assistance",
      description: "Lift, transfers, physical activity, etc.",
      icon: <MapPinLine color="#1249CB" size={32} />,
    },
  ];
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
  const typesList = ({ item }) => (
    <TouchableHighlight underlayColor="none" onPress={() => selectType(item)}>
      <View
        style={[
          styles.singleBox,
          selected.includes(item.id) ? styles.active : "",
        ]}
      >
        <View>{item.icon}</View>
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

  const getServices = () => {
    additionalInfo
      .getServices()
      .then((res) => {
        if (res.status === 200) {
          const { data } = res.data;
        }
      })
      .catch((err) => {
        console.log(err?.response);
      });
  };

  useEffect(() => {
    getServices();
    return () => abortController.abort();
  }, []);
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
        <Text style={styles.headingText}>Where are you located?</Text>
        <Text style={styles.spanText}>You can select multiple</Text>

        <FlatList
          data={types}
          renderItem={typesList}
          keyExtractor={(item) => item.id}
          style={{ marginTop: 24 }}
        />
      </View>

      <Next active={2} navigate={() => navigation.navigate("Experiance")} />
    </SafeAreaView>
  );
};
export default CareTypes;
