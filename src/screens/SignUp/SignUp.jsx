import { useState } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// Componenet
import Header from "../../components/Header";
// CSS
import styles from "./styles";
import { Handshake, Heart, RightArrow } from "./Assets/Assets";

const SignUp = ({ navigation }) => {
  const [activeDiv, setActive] = useState("");

  const active = (props) => {
    setActive(props);
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#F9FAFB",
        flex: 1,
        justifyContent: "space-between",
      }}
    >
      <View>
        <View style={{ paddingVertical: 24, paddingHorizontal: 13 }}>
          <Header navigation={navigation} name="Sign Up" />
        </View>
        <View style={styles.content}>
          <TouchableHighlight
            underlayColor="none"
            onPress={() => active("caregiver")}
          >
            <View
              style={[
                styles.singleBox,
                activeDiv === "caregiver" ? styles.active : "",
              ]}
            >
              {Heart()}
              <View
                style={{
                  marginLeft: 16,
                }}
              >
                <Text style={styles.textHeader}>I need a caregiver</Text>
                <Text style={styles.text}>
                  Start your free search for care in your area.
                </Text>
              </View>
            </View>
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor="none"
            onPress={() => active("carejob")}
          >
            <View
              style={[
                styles.singleBox,
                activeDiv === "carejob" ? styles.active : "",
              ]}
            >
              {Handshake()}
              <View
                style={{
                  marginLeft: 16,
                }}
              >
                <Text style={styles.textHeader}>I want a care job</Text>
                <Text style={styles.text}>
                  Create a profile and search for jobs.
                </Text>
              </View>
            </View>
          </TouchableHighlight>
        </View>
      </View>

      <TouchableHighlight
        underlayColor="none"
        onPress={() => navigation.navigate("Carejob location")}
        style={{ paddingHorizontal: 13 }}
      >
        <View style={styles.btn}>
          <Text style={styles.btn_text}>Continue</Text>
          {RightArrow()}
        </View>
      </TouchableHighlight>
    </SafeAreaView>
  );
};
export default SignUp;
