import { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableHighlight,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Checkbox from "expo-checkbox";

// Componenets
import Header from "../../../components/Header";
import Next from "../Components/Next";
// CSS
import styles from "../styles";

const Details = ({ navigation }) => {
  const [experiance, setExperiance] = useState([
    {
      id: 1,
      name: "Alzheimer dementia",
      checked: false,
    },
    {
      id: 2,
      name: "Hospice / end of life care",
      checked: false,
    },
  ]);

  const [certifications, setCertifications] = useState([
    {
      id: 1,
      name: "Home health Aide or Equivalent",
      checked: false,
    },
    {
      id: 2,
      name: "Cerified Nursing Assistent",
      checked: false,
    },
    {
      id: 3,
      name: "Registered Nurse",
      checked: false,
    },
    {
      id: 4,
      name: "CPR Training",
      checked: false,
    },
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
  const renderExperiance = ({ item }) => {
    return (
      <TouchableHighlight
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

  const renderCertifications = ({ item }) => {
    return (
      <TouchableHighlight
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

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#f9fafb",
        flex: 1,
        justifyContent: "space-between",
      }}
    >
      <View style={{ paddingHorizontal: 13 }}>
        <View style={{ paddingVertical: 24 }}>
          <Header navigation={navigation} name="Sign Up" />
        </View>
        <Text style={styles.headingText}>
          Share a few more details about yourself
        </Text>

        <View style={{ marginVertical: 24 }}>
          <View style={{ marginBottom: 16 }}>
            <TextInput
              style={styles.textInputExperiance}
              placeholder="Your name"
            />
          </View>
          <View>
            <TextInput
              style={styles.textInputExperiance}
              placeholder="Your lastname"
            />
          </View>
        </View>

        <Text style={[styles.mainHeading, { marginBottom: 24 }]}>
          Experiances
        </Text>

        <View>
          <Text style={styles.listHeading}>I have experience with:</Text>
          <View style={{ marginVertical: 15 }}>
            <FlatList
              data={experiance}
              renderItem={renderExperiance}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>

        <View>
          <Text style={styles.listHeading}>I have experience with:</Text>
          <View style={{ marginVertical: 15 }}>
            <FlatList
              data={certifications}
              renderItem={renderCertifications}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </View>

      <Next active={4} navigate={() => navigation.navigate("Upload")} />
    </SafeAreaView>
  );
};
export default Details;
