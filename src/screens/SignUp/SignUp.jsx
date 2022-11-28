import { useState, useEffect } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Componenet
import Header from "../../components/Header";
// CSS
import styles from "./styles";
import { Handshake, Heart, RightArrow } from "./Assets/Assets";
// API
import AdditionalInfo from "../../Api/AdditionalInfo";

const SignUp = ({ navigation }) => {
  const abortController = new AbortController();
  const additionalInfo = new AdditionalInfo();
  const [types, setTypes] = useState([]);
  const [activeId, setActive] = useState("");

  const active = (props) => {
    setActive(props);
  };

  const getTypes = () => {
    additionalInfo
      .getTypes()
      .then((res) => {
        if (res.status === 200) {
          setTypes(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err?.response);
      });
  };

  useEffect(() => {
    getTypes();
    return () => {
      abortController.abort();
    };
  }, []);

  const saveId = async (value) => {
    try {
      await AsyncStorage.setItem("user_type_id", value);
    } catch (e) {
      console.log(e, "user service id");
      // save error
    }
  };

  const next = () => {
    saveId(activeId);
    if (activeId.length > 0) {
      activeId === "eb4fe646-b515-47fd-8643-fd8081563455"
        ? navigation.navigate("CareGiver location")
        : navigation.navigate("CareTaker location");
    }
    return;
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
          {types.map((item) => (
            <TouchableHighlight
              key={item.id}
              underlayColor="none"
              onPress={() => active(item.id)}
            >
              <View
                style={[
                  styles.singleBox,
                  activeId === item.id ? styles.active : "",
                ]}
              >
                {item.id === "eb4fe646-b515-47fd-8643-fd8081563455"
                  ? Heart()
                  : Handshake()}

                <View
                  style={{
                    marginLeft: 16,
                  }}
                >
                  <Text style={styles.textHeader}>
                    {item.id === "eb4fe646-b515-47fd-8643-fd8081563455"
                      ? "I need a caregiver"
                      : "I want a care job"}
                  </Text>
                  <Text style={styles.text}>
                    {item.id === "eb4fe646-b515-47fd-8643-fd8081563455"
                      ? "Start your free search for care in your area."
                      : "Create a profile and search for jobs."}
                  </Text>
                </View>
              </View>
            </TouchableHighlight>
          ))}
        </View>
      </View>

      <TouchableHighlight
        underlayColor="none"
        onPress={() => next()}
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
