import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Componenets
import Header from "../../../components/Header";

// CSS
import styles from "../styles";

const Details = ({ navigation }) => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");

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
              value={name}
              onChangeText={(text) => setName(text)}
            />
          </View>
          <View>
            <TextInput
              style={styles.textInputExperiance}
              placeholder="Your lastname"
              value={lastname}
              onChangeText={(text) => setLastname(text)}
            />
          </View>
        </View>

        <Text>
          By clicking “Submit”, you are agree yo our Terms of Use and Privacy
          Policy
        </Text>
      </ScrollView>

      <TouchableHighlight
        underlayColor="#1249CB"
        onPress={navigate}
        style={[styles.nextPage, bgColor && { backgroundColor: "#1249CB" }]}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Text style={styles.nextPageText}>Next</Text>
          <ArrowRight size={24} color="#fff" />
        </View>
      </TouchableHighlight>
    </SafeAreaView>
  );
};
export default Details;
