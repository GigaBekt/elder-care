import { useState } from "react";
import { MapPin, Minus, Plus } from "phosphor-react-native";
import {
  SafeAreaView,
  View,
  TextInput,
  Text,
  TouchableHighlight,
} from "react-native";

// Componenets
import Header from "../../../components/Header";
import styles from "../styles";
import Next from "../Components/Next";

const Location = ({ navigation }) => {
  const [count, setCount] = useState(0);

  const counter = (type) => {
    if (type === "add") {
      setCount((prevState) => prevState + 5);
    } else {
      if (count !== 0) {
        setCount((prevState) => prevState - 5);
      }
    }
  };

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
          <View style={styles.box}>
            <Text style={styles.headingText}>Where are you located?</Text>
            <View style={styles.textInput}>
              <TextInput style={{ width: "90%" }} placeholder="Enter Address" />
              <MapPin />
            </View>
          </View>
          <View style={styles.box}>
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
