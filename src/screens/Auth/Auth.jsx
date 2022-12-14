import React, { useState, useRef } from "react";
import {
  View,
  KeyboardAvoidingView,
  TouchableHighlight,
  Text,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Components
import PhoneInput from "react-native-phone-number-input";

// API
import AuthApi from "../../Api/auth";

// CSS
import style from "./Style";

const Auth = ({ navigation }) => {
  const auth = new AuthApi();
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const phoneInput = useRef(null);

  const saveNumber = async () => {
    try {
      await AsyncStorage.setItem("phone_number", formattedValue);
    } catch (e) {
      console.log(e, "error phone number");
    }
  };

  const Next = () => {
    auth
      .sendCode(formattedValue)
      .then((res) => {
        if (res.status === 200) {
          navigation.navigate("Verify", { number: formattedValue });
          saveNumber();
        }
      })
      .catch((err) => {
        console.log(err?.response);
      });
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#F9FAFB" }}>
      <View style={style.head} />
      <ScrollView style={style.content}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          enabled
        >
          <View style={{ marginTop: 20 }}>
            <PhoneInput
              autoFocus={true}
              ref={phoneInput}
              defaultValue={value}
              defaultCode="GE"
              layout="second"
              onChangeText={(text) => {
                setValue(text);
              }}
              onChangeFormattedText={(text) => {
                setFormattedValue(text);
              }}
              containerStyle={{
                backgroundColor: "#F9FAFB",
                borderColor: "#D1D5DB",
                borderWidth: 1,
                borderRadius: 8,
                width: "100%",
              }}
              textContainerStyle={{ color: "red" }}
              textInputStyle={{ color: "#000" }}
              codeTextStyle={{ color: "#000" }}
            />
          </View>
        </KeyboardAvoidingView>

        <TouchableHighlight onPress={() => Next()} style={style.btn}>
          <Text style={style.btnText}>Continue</Text>
        </TouchableHighlight>
      </ScrollView>
    </View>
  );
};

export default Auth;
