import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  KeyboardAvoidingView,
  SafeAreaView,
} from "react-native";

import SmoothPinCodeInput from "react-native-smooth-pincode-input";

// import * as Haptics from "expo-haptics";

// Componenets
import Header from "../../components/Header";

// API
import Auth from "../../Api/auth";

// CSS
import styles from "./styles";

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
    setNumber(route?.params.number);
  }, []);

  const verify = () => {
    console.log(number, password);
    auth
      .verify(number, password)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          navigation.navigate("SignUp");
        }
      })
      .catch((err) => {
        // Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
        console.log(err?.response.data);
      });
  };

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
        <SmoothPinCodeInput
          cellStyle={{
            borderWidth: 1,
            borderRadius: 8,
            borderColor: "#CFD4D9",
            backgroundColor: "#FFFFFF",
          }}
          cellSpacing={20}
          cellSize={50}
          codeLength={5}
          value={password}
          onTextChange={(password) => {
            setPassword(password);
            setFull(false);
          }}
          autoFocus={true}
          returnKeyType="done"
          onFulfill={() => setFull(true)}
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
          style={
            full
              ? { backgroundColor: "#FFDC00" }
              : { backgroundColor: "#D1D5DB" }
          }
        >
          <TouchableHighlight
            style={{ paddingVertical: 14 }}
            underlayColor="none"
            onPress={() => verify()}
          >
            <Text style={styles.textInputButton}>Verify</Text>
          </TouchableHighlight>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Verify;
