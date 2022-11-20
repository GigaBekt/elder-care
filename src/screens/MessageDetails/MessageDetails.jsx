import { PaperPlaneTilt } from "phosphor-react-native";
import {
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header/Header";
// Css
import styles from "./style";
// Componenet
const MessageDetails = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#F9FAFB",
        justifyContent: "space-between",
      }}
    >
      <View>
        <View style={{ paddingTop: 23, paddingHorizontal: 13 }}>
          <Header navigation={navigation} name="user name" />
        </View>

        <ScrollView style={styles.mainBox}>
          <View style={styles.singleBox}>
            {/* <Image
            style={{ width: 32, height: 32, resizeMode: "cover" }}
            source={require("../../Assets/avatar.png")}
          /> */}
            <View style={styles.imageBox}>
              <Text style={[styles.date, { color: "#1249CB", marginLeft: 0 }]}>
                GB
              </Text>
            </View>
            <View style={styles.infoBox}>
              <View style={styles.infoText}>
                <Text style={styles.name}>Carolyn Gomes</Text>
                <Text style={styles.date}>4:13 PM</Text>
              </View>
              <Text style={styles.message}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Text>
            </View>
          </View>
          <View style={styles.singleBox}>
            <Image
              style={{ width: 32, height: 32, resizeMode: "cover" }}
              source={require("../../Assets/avatar.png")}
            />

            <View style={styles.infoBox}>
              <View style={styles.infoText}>
                <Text style={styles.name}>Carolyn Gomes</Text>
                <Text style={styles.date}>4:13 PM</Text>
              </View>
              <Text style={styles.message}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Text>
            </View>
          </View>
          <View style={styles.singleBox}>
            <View style={styles.imageBox}>
              <Text style={[styles.date, { color: "#1249CB", marginLeft: 0 }]}>
                GB
              </Text>
            </View>
            <View style={styles.infoBox}>
              <View style={styles.infoText}>
                <Text style={styles.name}>Carolyn Gomes</Text>
                <Text style={styles.date}>4:13 PM</Text>
              </View>
              <Text style={styles.message}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>

      <KeyboardAvoidingView style={{ backgroundColor: "red" }}>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            placeholderTextColor="#6B7280"
            placeholder="Write a message..."
          />
          <PaperPlaneTilt />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default MessageDetails;
