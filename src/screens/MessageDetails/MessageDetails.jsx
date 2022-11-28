import { PaperPlaneTilt } from "phosphor-react-native";
import { useState } from "react";
import { Camera, CameraType } from "expo-camera";
import {
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  FlatList,
  TouchableOpacity,
  // SafeAreaView,
} from "react-native";
import Header from "../../components/Header/Header";
// Css
import styles from "./style";
import { SafeAreaView } from "react-native-safe-area-context";
// Componenet
const MessageDetails = ({ navigation }) => {
  const [msgs, setMsgs] = useState([
    {
      id: 1,
      first_name: "giga",
      last_name: "bektashashvili",
      msg: "Lorem Ipsum is simply dummy text of the printing and typesettingindustry.",
      image: null,
      date: "4:13 AM",
    },
    {
      id: 2,
      first_name: "Tato",
      last_name: "bektashashvili",
      msg: "Lorem Ipsum is simply dummy text of the printing and typesettingindustry,Lorem Ipsum is simply dummy text of the printing and typesettingindustry,Lorem Ipsum is simply dummy text of the printing and typesettingindustry.",
      image: require("../../Assets/avatar.png"),
      date: "4:13 AM",
    },
    {
      id: Math.floor(Math.random() * 100),
      first_name: "Tato",
      last_name: "bektashashvili",
      msg: "Lorem Ipsum is simply dummy text of the printing and typesettingindustry,Lorem Ipsum is simply dummy text of the printing and typesettingindustry,Lorem Ipsum is simply dummy text of the printing and typesettingindustry.",
      image: require("../../Assets/avatar.png"),
      date: "4:13 AM",
    },
    {
      id: Math.floor(Math.random() * 100),

      first_name: "Tato",
      last_name: "bektashashvili",
      msg: "Lorem Ipsum is simply dummy text of the printing and typesettingindustry,Lorem Ipsum is simply dummy text of the printing and typesettingindustry,Lorem Ipsum is simply dummy text of the printing and typesettingindustry.",
      image: require("../../Assets/avatar.png"),
      date: "4:13 AM",
    },
    {
      id: Math.floor(Math.random() * 100),

      first_name: "Tato",
      last_name: "bektashashvili",
      msg: "Lorem Ipsum is simply dummy text of the printing and typesettingindustry,Lorem Ipsum is simply dummy text of the printing and typesettingindustry,Lorem Ipsum is simply dummy text of the printing and typesettingindustry.",
      image: require("../../Assets/avatar.png"),
      date: "4:13 AM",
    },
    {
      id: Math.floor(Math.random() * 100),

      first_name: "Tato",
      last_name: "bektashashvili",
      msg: "Lorem Ipsum is simply dummy text of the printing and typesettingindustry,Lorem Ipsum is simply dummy text of the printing and typesettingindustry,Lorem Ipsum is simply dummy text of the printing and typesettingindustry.",
      image: require("../../Assets/avatar.png"),
      date: "4:13 AM",
    },
    {
      id: Math.floor(Math.random() * 100),

      first_name: "Tato",
      last_name: "bektashashvili",
      msg: "Lorem Ipsum is simply dummy text of the printing and typesettingindustry,Lorem Ipsum is simply dummy text of the printing and typesettingindustry,Lorem Ipsum is simply dummy text of the printing and typesettingindustry.",
      image: require("../../Assets/avatar.png"),
      date: "4:13 AM",
    },
    {
      id: Math.floor(Math.random() * 100),

      first_name: "Tato",
      last_name: "bektashashvili",
      msg: "Lorem Ipsum is simply dummy text of the printing and typesettingindustry,Lorem Ipsum is simply dummy text of the printing and typesettingindustry,Lorem Ipsum is simply dummy text of the printing and typesettingindustry.",
      image: require("../../Assets/avatar.png"),
      date: "4:13 AM",
    },
    {
      id: Math.floor(Math.random() * 100),

      first_name: "Tato",
      last_name: "bektashashvili",
      msg: "Lorem Ipsum is simply dummy text of the printing and typesettingindustry,Lorem Ipsum is simply dummy text of the printing and typesettingindustry,Lorem Ipsum is simply dummy text of the printing and typesettingindustry.",
      image: require("../../Assets/avatar.png"),
      date: "4:13 AM",
    },
    {
      id: Math.floor(Math.random() * 100),

      first_name: "Tato",
      last_name: "bektashashvili",
      msg: "Lorem Ipsum is simply dummy text of the printing and typesettingindustry,Lorem Ipsum is simply dummy text of the printing and typesettingindustry,Lorem Ipsum is simply dummy text of the printing and typesettingindustry.",
      image: require("../../Assets/avatar.png"),
      date: "4:13 AM",
    },
  ]);

  const sendMessage = (props) => {};
  const renderItem = ({ item }) => (
    <View style={styles.singleBox}>
      {item.image !== null ? (
        <Image
          style={{ width: 32, height: 32, resizeMode: "cover" }}
          source={require("../../Assets/avatar.png")}
        />
      ) : (
        <View style={styles.imageBox}>
          <Text
            style={[
              styles.date,
              {
                color: "#1249CB",
                marginLeft: 0,
                textTransform: "capitalize",
              },
            ]}
          >
            {item.first_name.slice(0, 1)}
            {item.last_name.slice(0, 1)}
          </Text>
        </View>
      )}
      <View style={styles.infoBox}>
        <View style={styles.infoText}>
          <Text style={[styles.name, { textTransform: "capitalize" }]}>
            {item.first_name} {item.last_name}
          </Text>
          <Text style={styles.date}>4:13 PM</Text>
        </View>
        <View style={{ width: "98.2%" }}>
          <Text style={styles.message}>{item.msg}</Text>
        </View>
      </View>
    </View>
  );
  return (
    <SafeAreaView
      style={{
        // backgroundColor: "red",
        // justifyContent: "space-between",
        flex: 1,
      }}
    >
      <View style={{ flex: 1 }}>
        <View>
          <View style={{ paddingVertical: 12, paddingHorizontal: 13 }}>
            <Header navigation={navigation} name="user name" />
          </View>

          <View style={[styles.mainBox, { marginBottom: 124 }]}>
            <FlatList
              renderItem={renderItem}
              keyExtractor={({ id }) => id}
              data={msgs}
            />
          </View>
        </View>

        <KeyboardAvoidingView
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
          }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={[styles.inputBox]}>
            <TextInput
              spellCheck={false}
              style={styles.input}
              placeholderTextColor="#6B7280"
              placeholder="Write a message..."
            />
            <PaperPlaneTilt />
          </View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};
export default MessageDetails;
