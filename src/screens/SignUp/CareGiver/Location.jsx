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
import AsyncStorage from "@react-native-async-storage/async-storage";

import useDebounce from "../../../Debounce";
// Componenets
import Header from "../../../components/Header";
import styles from "../styles";
import Next from "../Components/NextDot";

import axios from "axios";

const Location = ({ navigation }) => {
  const [count, setCount] = useState(0);
  const [term, setTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [open, setOpen] = useState(false);
  const debouncedValue = useDebounce(term, 500);

  const counter = (type) => {
    if (type === "add") {
      setCount((prevState) => prevState + 5);
    } else {
      if (count !== 0) {
        setCount((prevState) => prevState - 5);
      }
    }
  };

  const GOOGLE_PACES_API_BASE_URL =
    "https://maps.googleapis.com/maps/api/place";
  const getLocations = () => {
    axios
      .post(
        `${GOOGLE_PACES_API_BASE_URL}/autocomplete/json?key=AIzaSyDybpu6XDK1m_pdDmIMM86bEwtiQ8CrUok&input=${term}&language=en`
      )
      .then((res) => {
        setSuggestions(res.data.predictions);
      })
      .catch((err) => {
        console.log(err?.response);
      });
  };
  const onPredictionTapped = async (placeId) => {
    const apiUrl = `${GOOGLE_PACES_API_BASE_URL}/details/json?key=AIzaSyDybpu6XDK1m_pdDmIMM86bEwtiQ8CrUok&language=en&place_id=${placeId}`;
    try {
      const result = await axios.request({
        method: "post",
        url: apiUrl,
      });
      if (result) {
        setOpen(false);
        setTerm(result.data.result.formatted_address);
        const zipCode = result.data.result.address_components.find(
          (item) => item.types[0] === "postal_code"
        );
        const latLong = result.data.result.geometry.location;
        saveLocation(
          zipCode?.long_name || "",
          result.data.result.formatted_address,
          latLong
        );
      }
    } catch (e) {
      console.log(e);
    }
  };

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

  const saveLocation = async (zipcode, location, latLong) => {
    console.log(zipcode, location, latLong, "save location fnc");
    try {
      await AsyncStorage.setItem("zipcode", zipcode);
      await AsyncStorage.setItem("location", location);
      const jsonLatLong = JSON.stringify(latLong);
      await AsyncStorage.setItem("latLong", jsonLatLong);
    } catch (e) {
      console.log(e, "catch  save location ");
    }
  };
  const saveCount = async () => {
    try {
      await AsyncStorage.setItem("radius", count.toString());
    } catch (e) {
      console.log(e, "catch  save radius ");
    }
  };
  const save = () => {
    saveCount();
    navigation.navigate("Caretypes");
  };

  useEffect(() => {
    getLocations();
  }, [debouncedValue]);

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

            {suggestions.length > 0 && open && (
              <FlatList
                data={suggestions}
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

      <Next
        active={1}
        bgColor={count > 0 && term.length > 0}
        navigate={() => save()}
      />
    </SafeAreaView>
  );
};
export default Location;
