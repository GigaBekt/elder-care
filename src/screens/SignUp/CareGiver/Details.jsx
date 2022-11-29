import { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  TextInput,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Componenets
import Header from "../../../components/Header";

import Next from "../Components/NextDot";

import Checkbox from "expo-checkbox";

// CSS
import styles from "../styles";
import AdditionalInfo from "../../../Api/AdditionalInfo";
import Loader from "./Loader";

const Details = ({ navigation }) => {
  const additionalInfo = new AdditionalInfo();
  const abortController = new AbortController();
  const [loader, setLoader] = useState(true);

  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [experiance, setExperiance] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [addInfo, setAddInfo] = useState([
    { id: "Non-smoker", name: "non_smoker" },
    { id: "Have a car", name: "has_car" },
    { id: "Comfortable with pets", name: "comfortable_with_pets" },
    { id: "Have a college degree", name: "college_degree" },
  ]);

  const changeCheck = (prop) => {
    const modified = experiance.map((item) => {
      if (item.id === prop.id) return { ...item, checked: !item.checked };
      return item;
    });
    setExperiance(modified);
  };
  const changeCheckCert = (prop) => {
    const modified = certifications.map((item) => {
      if (item.id === prop.id) return { ...item, checked: !item.checked };
      return item;
    });
    setCertifications(modified);
  };
  const renderExperiance = (item) => {
    return (
      <TouchableHighlight
        key={item.id}
        onPress={() => changeCheck(item)}
        style={{ marginBottom: 11 }}
        underlayColor="none"
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.checkboxText}>{item.name}</Text>
          <Checkbox
            style={{
              borderRadius: 3,
              borderColor: "#9CA3AF",
              borderWidth: 1,
            }}
            value={item.checked}
            onValueChange={() => changeCheck(item)}
            color={item.checked ? "#1249CB" : undefined}
          />
        </View>
      </TouchableHighlight>
    );
  };
  const renderCertifications = (item) => {
    return (
      <TouchableHighlight
        key={item.id}
        onPress={() => changeCheckCert(item)}
        style={{ marginBottom: 11 }}
        underlayColor="none"
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.checkboxText}>{item.name}</Text>
          <Checkbox
            style={{
              borderRadius: 3,
              borderColor: "#9CA3AF",
              borderWidth: 1,
            }}
            value={item.checked}
            onValueChange={() => changeCheckCert(item)}
            color={item.checked ? "#1249CB" : undefined}
          />
        </View>
      </TouchableHighlight>
    );
  };
  const changeCheckInfo = (prop) => {
    const modified = addInfo.map((item) => {
      if (item.id === prop.id) return { ...item, checked: !item.checked };
      return item;
    });
    setAddInfo(modified);
  };
  const renderInfo = (item) => {
    return (
      <TouchableHighlight
        key={item.id}
        onPress={() => changeCheckInfo(item)}
        style={{ marginBottom: 11 }}
        underlayColor="none"
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.checkboxText}>{item.id}</Text>
          <Checkbox
            style={{
              borderRadius: 3,
              borderColor: "#9CA3AF",
              borderWidth: 1,
            }}
            value={item.checked}
            onValueChange={() => changeCheckInfo(item)}
            color={item.checked ? "#1249CB" : undefined}
          />
        </View>
      </TouchableHighlight>
    );
  };
  const getCerfications = () => {
    additionalInfo
      .certifications()
      .then((res) => {
        if (res.status === 200) {
          const { data } = res.data;
          data.map((element) => {
            element.check = false;
          });
          setCertifications(data);
        }
      })
      .catch((err) => {
        console.log(err?.response);
      })
      .finally(() => setLoader(false));
  };
  const getExperiance = () => {
    additionalInfo
      .careExperiance()
      .then((res) => {
        if (res.status === 200) {
          const { data } = res.data;
          data.map((element) => {
            element.check = false;
          });
          setExperiance(data);
        }
      })
      .catch((err) => {
        console.log(err?.response);
      })
      .finally(() => setLoader(false));
  };

  useEffect(() => {
    getCerfications();
    getExperiance();
    return () => {
      abortController.abort();
    };
  }, []);

  const save = async () => {
    try {
      const jsonValue = JSON.stringify(experiance);
      await AsyncStorage.setItem("experiance", jsonValue);

      const jsonCertification = JSON.stringify(certifications);
      await AsyncStorage.setItem("certifications", jsonCertification);

      const JsonAddInfo = JSON.stringify(addInfo);
      await AsyncStorage.setItem("addInfo", JsonAddInfo);

      await AsyncStorage.setItem("first_name", first_name);
      await AsyncStorage.setItem("last_name", last_name);

      navigation.navigate("Upload");
    } catch (e) {
      console.log(e, "catch care types");
      // saving error
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
          Share a few more details about yourself
        </Text>

        <View style={{ marginVertical: 24 }}>
          <View style={{ marginBottom: 16 }}>
            <TextInput
              style={styles.textInputExperiance}
              placeholder="Your name"
              value={first_name}
              onChangeText={(text) => setFirstName(text)}
              placeholderTextColor="#9CA3AF"
            />
          </View>
          <View>
            <TextInput
              style={styles.textInputExperiance}
              placeholder="Your lastname"
              value={last_name}
              onChangeText={(text) => setLastName(text)}
              placeholderTextColor="#9CA3AF"
            />
          </View>
        </View>

        {loader ? (
          <Loader />
        ) : (
          <View>
            <Text style={[styles.mainHeading, { marginBottom: 24 }]}>
              Experiances
            </Text>

            <View>
              <Text style={styles.listHeading}>I have experience with:</Text>
              <View style={{ marginVertical: 15 }}>
                {experiance.map((item) => renderExperiance(item))}
              </View>
            </View>

            <View
              style={{
                paddingBottom: 11,
                borderBottomColor: "#E5E7EB",
                borderBottomWidth: 1,
              }}
            >
              <Text style={styles.listHeading}>
                Certifications and training
              </Text>
              <View style={{ marginVertical: 15 }}>
                {certifications.map((item) => renderCertifications(item))}
              </View>
            </View>
          </View>
        )}

        {loader ? (
          <Loader />
        ) : (
          <View>
            <Text
              style={[styles.mainHeading, { marginBottom: 24, marginTop: 24 }]}
            >
              Additional information
            </Text>

            <View>{addInfo.map((item) => renderInfo(item))}</View>
          </View>
        )}
      </ScrollView>

      <Next
        active={4}
        bgColor={first_name.length > 0 && last_name.length > 0}
        navigate={() => save()}
      />
    </SafeAreaView>
  );
};
export default Details;
