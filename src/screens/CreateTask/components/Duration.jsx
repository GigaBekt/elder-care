import { useEffect, useState } from "react";
import { Minus, Plus } from "phosphor-react-native";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
// Componenets
import Header from "../../../components/Header";
import styles from "../styles";
import Next from "./Next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DateTimePickerModal from "react-native-modal-datetime-picker";
const Location = ({ navigation }) => {
  const [count, setCount] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hours, setHours] = useState(0);
  const [min, setMin] = useState(0);
  const [fullDate, setFullDate] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const month = date.toLocaleString("en-US", { month: "long" });
    const editMinute = date.getMinutes().toString().padStart(2, 0);
    const newDate = `${date.getDate()} ${month}, ${date.getHours()}:${editMinute}`;
    setFullDate(newDate);
    hideDatePicker();
    saveDate(date.toISOString());
  };

  const saveDate = async (value) => {
    try {
      await AsyncStorage.setItem("datetime", value);
    } catch (e) {
      // save error
    }
  };

  const saveDuration = async (props) => {
    console.log(props);
    try {
      await AsyncStorage.setItem("duration", props);
      console.log("runing in ");
      navigation.navigate("createTask third");
    } catch (e) {
      // save error
    }
  };

  const counter = (type) => {
    if (type === "add") {
      if (count !== 300) {
        setCount((prevState) => prevState + 30);
        if (minute === 0) {
          setMinute(30);
        } else setMinute(0);
      }
      return;
    } else {
      if (count !== 0) {
        setCount((prevState) => prevState - 30);
        if (minute === 0) {
          setMinute(30);
        } else setMinute(0);
      }
    }
  };

  const save = () => {
    saveDuration(count.toString());
  };

  useEffect(() => {
    const hours = count / 60;
    const editHoruse = hours.toString()[0];
    hours <= 5 ? setHours(() => editHoruse) : console.log("stop");
    const minuteToString = minute.toString();
    const min =
      minuteToString.length === 1
        ? minuteToString.padStart(2, 0)
        : minuteToString;
    setMin(min);
  }, [count]);
  return (
    <SafeAreaView
      style={{
        flexDirection: "column",
        justifyContent: "space-between",
        flex: 1,
        backgroundColor: "#f9fafb",
      }}
    >
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        inline
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        locale="en"
      />
      <View>
        <View style={{ paddingVertical: 24, paddingHorizontal: 13 }}>
          <Header navigation={navigation} name="Sign Up" />
        </View>
        <View style={styles.insideContent}>
          <View style={[styles.box]}>
            <Text style={[styles.headingText, { paddingHorizontal: 0 }]}>
              When you want this job to be done?
            </Text>

            <TouchableOpacity
              onPress={() => showDatePicker()}
              style={[styles.textInput]}
            >
              {fullDate.length > 0 ? (
                <Text style={[styles.selectDate, { color: "#111827" }]}>
                  {fullDate}
                </Text>
              ) : (
                <Text style={styles.selectDate}>Select Date</Text>
              )}
            </TouchableOpacity>
          </View>

          <Text style={[styles.headingText, { paddingHorizontal: 0 }]}>
            Job Duration
          </Text>
          <Text style={[styles.spanText, { paddingHorizontal: 0 }]}>
            Set approximate duration of the job
          </Text>

          <View style={[styles.box, { backgroundColor: "#fff" }]}>
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
              <TouchableOpacity
                underlayColor="none"
                onPress={() => counter("minus")}
                style={styles.counter}
              >
                <Minus size={32} />
              </TouchableOpacity>
              <Text style={styles.countText}>
                {hours}:{min} hour(s)
              </Text>

              <TouchableOpacity
                underlayColor="none"
                onPress={() => counter("add")}
                style={[styles.counter]}
              >
                <Plus size={32} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <Next
        active={2}
        bgColor={count > 0 && fullDate}
        navigate={() => save()}
      />
    </SafeAreaView>
  );
};
export default Location;
