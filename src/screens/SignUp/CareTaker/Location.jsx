import { useState, useEffect } from "react";
import { ArrowRight, MapPin } from "phosphor-react-native";
import {
  SafeAreaView,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import useDebounce from "../../../Debounce";
// Componenets
import Header from "../../../components/Header";

// CSS
import styles from "../styles";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Suggestions from "./Suggestions";
import Next from "../Components/Next";

const Location = ({ navigation }) => {
  const [open, setOpen] = useState(false);
  const [term, setTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const GOOGLE_PACES_API_BASE_URL =
    "https://maps.googleapis.com/maps/api/place";

  const saveZipCode = async (value) => {
    try {
      await AsyncStorage.setItem("zipcode", value);
      console.log(value, "zipcode");
    } catch (e) {
      console.log(e, "zipcode");
      // save error
    }
  };
  const saveAddress = async (value) => {
    try {
      await AsyncStorage.setItem("location", value);
      console.log(value, "location");
    } catch (e) {
      console.log(e, "location");
    }
  };
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
        zipCode !== undefined && saveZipCode(zipCode.long_name);
        saveAddress(result.data.result.formatted_address);
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

  const debouncedValue = useDebounce(term, 500);

  useEffect(() => {
    getLocations();
  }, [debouncedValue]);

  const [keyboardStatus, setKeyboardStatus] = useState(undefined);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus("Keyboard Shown");
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus("Keyboard Hidden");
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
              <Text style={[styles.headingText, { paddingHorizontal: 0 }]}>
                Where are you looking for care?
              </Text>

              <View style={styles.textInput}>
                <TextInput
                  value={term}
                  onChangeText={(text) => onChange(text)}
                  style={{ width: "90%" }}
                  placeholder="Enter Address"
                />
                <MapPin />
              </View>

              <Suggestions
                open={open}
                suggestions={suggestions}
                renderItem={renderItem}
              />
            </View>
          </View>
        </View>

        <Next
          bgColor={term.length > 0}
          navigate={
            term.length > 0
              ? () => navigation.navigate("Details Taker")
              : (e) => e.preventDefault()
          }
        />
        {/* <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View
          // style={
          //   keyboardStatus === "Keyboard Shown"
          //     ? { paddingHorizontal: 0 }
          //     : { paddingHorizontal: 13 }
          // }
          >
            <TouchableOpacity
              onPress={
                term.length > 0
                  ? () => navigation.navigate("Details Taker")
                  : (e) => e.preventDefault()
              }
              style={[
                styles.nextPage,
                { width: "100%" },
                term.length && { backgroundColor: "#1249CB" },
              ]}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <Text style={styles.nextPageText}>Continue</Text>
                <ArrowRight size={24} color="#fff" />
              </View>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView> */}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
export default Location;
