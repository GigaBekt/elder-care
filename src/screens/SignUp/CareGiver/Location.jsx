import { useState, useEffect } from "react";
import { MapPin, Minus, Plus } from "phosphor-react-native";
import {
  SafeAreaView,
  View,
  TextInput,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  FlatList,
} from "react-native";

import useDebounce from "../../../Debounce";
// Componenets
import Header from "../../../components/Header";
import styles from "../styles";
import Next from "../Components/Next";
import axios from "axios";

const Location = ({ navigation }) => {
  const [count, setCount] = useState(0);
  const [term, setTerm] = useState("");

  const counter = (type) => {
    if (type === "add") {
      setCount((prevState) => prevState + 5);
    } else {
      if (count !== 0) {
        setCount((prevState) => prevState - 5);
      }
    }
  };

  const [test, setTest] = useState([]);
  const GOOGLE_API_KEY = "AIzaSyDybpu6XDK1m_pdDmIMM86bEwtiQ8CrUok";
  const GOOGLE_PACES_API_BASE_URL =
    "https://maps.googleapis.com/maps/api/place";
  const getLocations = () => {
    axios
      .post(
        `${GOOGLE_PACES_API_BASE_URL}/autocomplete/json?key=AIzaSyDybpu6XDK1m_pdDmIMM86bEwtiQ8CrUok&input=${term}`
      )
      .then((res) => {
        setTest(res.data.predictions);
      })
      .catch((err) => {
        console.log(err?.response);
      });
  };

  const onPredictionTapped = async (placeId, description) => {
    const apiUrl = `${GOOGLE_PACES_API_BASE_URL}/details/json?key=AIzaSyDybpu6XDK1m_pdDmIMM86bEwtiQ8CrUok&language=en&place_id=${placeId}`;
    try {
      const result = await axios.request({
        method: "post",
        url: apiUrl,
      });
      if (result) {
        console.log(result.data.result, "palce id");

        setOpen(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const [open, setOpen] = useState(false);

  const onChange = (props) => {
    setOpen(true);
    setTerm(props);
  };
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={{
          marginTop: 10,
          paddingVertical: 10,
          paddingHorizontal: 10,
          borderWidth: 1,
          borderColor: "#D1D5DB",
          borderRadius: 8,
        }}
        onPress={() => {
          onPredictionTapped(item.place_id, item.description);
        }}
      >
        <Text>{item.description}</Text>
      </TouchableOpacity>
    );
  };

  const debouncedValue = useDebounce(term, 500);

  useEffect(() => {
    getLocations();
  }, [debouncedValue]);

  console.log(test);

  return (
    <SafeAreaView
      style={{
        flexDirection: "column",
        justifyContent: "space-between",
        flex: 1,
        backgroundColor: "#f9fafb",
      }}
    >
      <View>
        <View style={{ paddingVertical: 24, paddingHorizontal: 13 }}>
          <Header navigation={navigation} name="Sign Up" />
        </View>
        <View style={styles.insideContent}>
          <View style={[styles.box]}>
            <Text style={styles.headingText}>Where are you located?</Text>

            <View style={styles.textInput}>
              <TextInput
                value={term}
                onChangeText={(text) => onChange(text)}
                style={{ width: "90%" }}
                placeholder="Enter Address"
              />
              <MapPin />
            </View>

            {test.length > 0 && open && (
              <FlatList
                data={test}
                renderItem={renderItem}
                keyExtractor={(item) => item.place_id}
              />
            )}
          </View>

          <View style={[styles.box, { backgroundColor: "#fff" }]}>
            <Text style={styles.headingText}>
              How far are you willing to travel
            </Text>
            <Text style={styles.spanText}>
              Set approximate duration of the job
            </Text>
            <View
              style={[
                styles.textInput,
                {
                  paddingVertical: 0,
                  paddingHorizontal: 0,
                  alignItems: "center",
                },
              ]}
            >
              <TouchableHighlight
                underlayColor="none"
                onPress={() => counter("minus")}
                style={styles.counter}
              >
                <Minus size={32} />
              </TouchableHighlight>
              <Text style={styles.countText}>{count} miles</Text>

              <TouchableHighlight
                underlayColor="none"
                onPress={() => counter("add")}
                style={[styles.counter]}
              >
                <Plus size={32} />
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </View>

      <Next active={1} navigate={() => navigation.navigate("Caretypes")} />
    </SafeAreaView>
  );
};
export default Location;
