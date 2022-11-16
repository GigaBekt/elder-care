import { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  TextInput,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SkeletonContent from "react-native-skeleton-content";

// Componenets
import Header from "../../../components/Header";
import Next from "../Components/Next";
import Checkbox from "expo-checkbox";

// CSS
import styles from "../styles";
import AdditionalInfo from "../../../Api/AdditionalInfo";

const Details = ({ navigation }) => {
  const additionalInfo = new AdditionalInfo();
  const abortController = new AbortController();
  const [experiance, setExperiance] = useState([]);
  const [loader, setLoader] = useState(true);

  const [certifications, setCertifications] = useState([]);

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
      setLoader(true);
    };
  }, []);

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

        <Text>
          By clicking “Submit”, you are agree yo our Terms of Use and Privacy
          Policy
        </Text>
      </ScrollView>

      <Next
        active={4}
        navigate={() => navigation.navigate("HomeScreenTaker")}
      />
    </SafeAreaView>
  );
};
export default Details;
