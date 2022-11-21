import { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Componenets
import Header from "../../../components/Header";
import Next from "./Next";
import { MapPin, Minus, Plus } from "phosphor-react-native";
import useDebounce from "../../../Debounce";
import Textarea from "../../../components/Textarea/Textarea";

// CSS
import styles from "../styles";
import axios from "axios";
// API
import Tasks from "../../../Api/tasks";

const Details = ({ navigation }) => {
  const tasks = new Tasks();
  const [details, setDetails] = useState("");
  const [term, setTerm] = useState("");
  const [list, setList] = useState([]);
  const [zipCode, setZipCode] = useState("");

  const GOOGLE_PACES_API_BASE_URL =
    "https://maps.googleapis.com/maps/api/place";
  const getLocations = () => {
    axios
      .post(
        `${GOOGLE_PACES_API_BASE_URL}/autocomplete/json?key=AIzaSyDybpu6XDK1m_pdDmIMM86bEwtiQ8CrUok&input=${term}&language=en`
      )
      .then((res) => {
        setList(res.data.predictions);
      })
      .catch((err) => {
        console.log(err?.response);
      });
  };

  const onPredictionTapped = async (placeId) => {
    const apiUrl = `${GOOGLE_PACES_API_BASE_URL}/details/json?key=AIzaSyDybpu6XDK1m_pdDmIMM86bEwtiQ8CrUok&language=en&place_id=${placeId}`;
    try {
      const results = await axios.request({
        method: "post",
        url: apiUrl,
      });
      if (results) {
        setTerm(results.data.result.formatted_address);
        setOpen(false);
        const zipCode = results.data.result.address_components.find(
          (item) => item.types[0] === "postal_code"
        );
        setZipCode(zipCode !== undefined && zipCode);
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

  const debouncedValue = useDebounce(term, 500);

  useEffect(() => {
    getLocations();
  }, [debouncedValue]);

  const createTask = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      const dateTime = await AsyncStorage.getItem("datetime");
      const duration = await AsyncStorage.getItem("duration");
      const careServiceId = await AsyncStorage.getItem("care_service_id");
      const location = {
        zip: zipCode.long_name,
        address: term,
      };

      // console.log(dateTime, parseInt(duration), careServiceId, location, token);

      if (dateTime && careServiceId && duration !== null) {
        tasks
          .createTask(
            dateTime,
            parseInt(duration),
            careServiceId,
            location,
            details,
            token
          )
          .then((res) => {
            console.log(res);
            if (res.status === 200 || res.status === 201) {
              navigation.push("HomeScreenTaker");
            }
          })
          .catch((err) => {
            console.log(err?.response);
          });
      }
    } catch (e) {
      console.log(e, "catch create job");
      // error reading value
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
      <ScrollView style={{ paddingHorizontal: 13 }}>
        <View style={{ paddingVertical: 24 }}>
          <Header navigation={navigation} name="Sign Up" />
        </View>
        <Text style={[styles.headingText, { paddingHorizontal: 0 }]}>
          Give us more details
        </Text>

        <View style={{ marginTop: 24 }}>
          <Textarea
            placeholder="Details..."
            value={details}
            setText={setDetails}
          />
        </View>

        <View style={{ marginTop: 8 }}>
          <View style={styles.singleBoxList}>
            <View style={styles.circle} />
            <Text style={styles.listText}>First example of message</Text>
          </View>

          <View style={styles.singleBoxList}>
            <View style={styles.circle} />
            <Text style={styles.listText}>Second example goes here</Text>
          </View>

          <View style={styles.singleBoxList}>
            <View style={styles.circle} />
            <Text style={styles.listText}>
              Third message example can go here
            </Text>
          </View>
        </View>
        <Text
          style={[styles.headingText, { paddingHorizontal: 0, marginTop: 24 }]}
        >
          Care Location
        </Text>
        <Text style={styles.paraText}>Set location of the job</Text>

        <View style={styles.textInput}>
          <TextInput
            value={term}
            onChangeText={(text) => onChange(text)}
            style={{ width: "90%" }}
            placeholder="Enter Address"
          />
          <MapPin />
        </View>

        {list.length > 0 &&
          open &&
          list.map((item, index) => (
            <TouchableOpacity
              key={index}
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
          ))}
      </ScrollView>

      <Next
        active={3}
        bgColor={details.length > 0 && term.length > 0}
        navigate={() => createTask()}
      />
    </SafeAreaView>
  );
};
export default Details;
