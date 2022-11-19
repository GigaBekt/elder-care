import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableHighlight,
  Image,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";

// Componenets
import Header from "../../../components/Header";
import Next from "../Components/Next";
// CSS
import styles from "../styles";
import { Camera } from "phosphor-react-native";
import Auth from "../../../Api/auth";

const Details = ({ navigation }) => {
  const auth = new Auth();
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [image, setImage] = useState(null);

  const saveInformation = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("information", jsonValue);
    } catch (e) {
      // saving error
      console.log(e, "save info");
    }
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);
    if (result.cancelled) {
      console.log("cancelled image slection");
    } else if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const next = async () => {
    try {
      const phone = await AsyncStorage.getItem("phone_number");
      // const user_type_id = await AsyncStorage.getItem("user_type_id");
      const zipcode = await AsyncStorage.getItem("zipcode");
      const location = await AsyncStorage.getItem("location");
      if (
        phone !== null &&
        // user_type_id !== null &&
        location !== null &&
        zipcode !== null
      ) {
        const data = new FormData();
        data.append("phone_number", phone);

        data.append("user_type_id", "8f2238fc-b199-43e8-bf64-2fec5483ed7d");
        data.append("profile[first_name]", name);
        data.append("profile[last_name]", lastname);
        image &&
          data.append("profile[image]", {
            // uri: image,
            type: `image.${image.split(".").slice(-1)}`,
            name: "image.jpg",
            uri: Platform.OS === "ios" ? image.replace("file://", "") : image,
          });
        data.append("location[zip]", zipcode);
        data.append("location[address]", location);

        auth
          .regisCareTaker(data)
          .then((res) => {
            console.log(res.data);
            saveInformation(res.data.data);
            navigation.navigate("HomeScreenTaker");
          })
          .catch((err) => console.log(err?.response));

        // value previously stored
      }
    } catch (e) {
      console.log(e, "catch");
      // error reading value
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
        <Text style={styles.headingText}>
          Share a few more details about yourself
        </Text>

        <View style={{ marginVertical: 24 }}>
          <View style={[styles.photoBox, { marginBottom: 20 }]}>
            <View style={[styles.uploadPhoto, image && { borderWidth: 0 }]}>
              {image ? (
                <Image
                  source={{ uri: image }}
                  style={{ width: "100%", height: "100%", borderRadius: 8 }}
                />
              ) : (
                <Camera weight="light" size={44} />
              )}
            </View>
            <TouchableHighlight
              underlayColor="none"
              onPress={() => pickImage()}
            >
              <Text style={styles.addPhotoText}>Tap to add a photo</Text>
            </TouchableHighlight>
          </View>
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

      <Next navigate={next} bgColor={name.length > 0 && lastname.length > 0} />
    </SafeAreaView>
  );
};
export default Details;
