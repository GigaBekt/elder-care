import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  KeyboardAvoidingView,
  SafeAreaView,
} from "react-native";

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import AsyncStorage from "@react-native-async-storage/async-storage";

// import * as Haptics from "expo-haptics";

// Componenets
import Header from "../../components/Header";

// API
import Auth from "../../Api/auth";

// CSS
import styles from "./styles";
const CELL_COUNT = 5;
const Verify = ({ navigation, route }) => {
  const auth = new Auth();
  const [password, setPassword] = useState("");
  const [full, setFull] = useState(false);
  const [number, setNumber] = useState("");
  const [counter, setCounter] = useState(20);

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter > 0) {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [counter]);

  useEffect(() => {
    setNumber(route?.params?.number);
  }, []);

  const saveInformation = async (value) => {
    console.log(value, "value");
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("information", jsonValue);
      navigation.navigate("HomeScreenTaker");
    } catch (e) {
      console.log(e, "save info");
    }
  };

  const verify = () => {
    console.log(value);
    auth
      .verify(number, value)
      .then((res) => {
        if (res.status === 200) {
          // console.log(res.data.data);
          if (res.data.data.id) {
            console.log("running");
            saveInformation(res.data.data);
          } else {
            navigation.navigate("SignUp");
          }
        }
      })
      .catch((err) => {
        // Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
        console.log(err?.response.data);
      });
  };
  const reSend = () => {
    auth
      .sendCode(number)
      .then((res) => {
        console.log(res.data.data);
      })
      .catch((err) => console.log(err?.response));
  };

  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <SafeAreaView style={styles.height}>
      <View style={{ paddingVertical: 24, paddingHorizontal: 13 }}>
        <Header navigation={navigation} name="Verification" />
      </View>

      <View style={styles.content}>
        <Text style={styles.text}>
          We sent code on your phone number:{" "}
          <Text style={styles.textNumber}>{number}</Text>
        </Text>

        <CodeField
          isFocused={true}
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <View
              key={index}
              style={[
                styles.cell,
                isFocused && styles.focusCell,
                full && { backgroundColor: "reed" },
              ]}
              onLayout={getCellOnLayoutHandler(index)}
            >
              <Text style={styles.textCell}>
                {symbol || (isFocused ? <Cursor /> : "-")}
              </Text>
            </View>
          )}
        />
        <TouchableHighlight
          underlayColor={"none"}
          onPress={counter == "0" ? () => reSend() : (e) => e.preventDefault()}
        >
          <Text
            style={[
              styles.resendText,
              counter == "0" ? { color: "#60A78D" } : { color: "#9CA3AF" },
            ]}
          >
            Resend code 00:
            {counter.toString().length > 1 ? counter : `0${counter}`}
          </Text>
        </TouchableHighlight>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        enabled
      >
        <View
          style={[
            value.length === 5
              ? { backgroundColor: "#1249CB" }
              : { backgroundColor: "#D1D5DB" },
            { paddingVertical: 14 },
          ]}
        >
          <TouchableHighlight
            style={{ paddingVertical: 14 }}
            underlayColor="none"
            onPress={() => verify()}
          >
            <Text
              style={[
                styles.textInputButton,
                value.length === 5 && { color: "#fff" },
              ]}
            >
              Verify
            </Text>
          </TouchableHighlight>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Verify;
