import React, { useState, useRef } from "react";
import {
  View,
  KeyboardAvoidingView,
  TouchableHighlight,
  Text,
  StatusBar,
  ScrollView,
} from "react-native";

// Components
import PhoneInput from "react-native-phone-number-input";

// CSS
import style from "./Style";

const Auth = ({ navigation }) => {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const phoneInput = useRef(null);

  return (
    <View style={{ flex: 1, backgroundColor: "#F9FAFB" }}>
      {/* <StatusBar barStyle="light-content" /> */}

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

        <TouchableHighlight
          onPress={() => navigation.navigate("Verify")}
          style={style.btn}
        >
          <Text style={style.btnText}>Continue</Text>
        </TouchableHighlight>
      </ScrollView>
    </View>
  );
};

export default Auth;
