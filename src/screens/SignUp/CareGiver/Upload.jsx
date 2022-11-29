import { useEffect, useState } from "react";
import { View, Text, TouchableHighlight, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";
// Componenets
import Header from "../../../components/Header";
import { Camera } from "phosphor-react-native";

// Components
import Next from "../Components/NextDot";

// CSS
import styles from "../styles";

// API
import Auth from "../../../Api/auth";

const Upload = ({ navigation }) => {
  const auth = new Auth();
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri);
    } else {
      alert("You did not select any image.");
    }
  };

  const saveToken = async (value) => {
    try {
      await AsyncStorage.setItem("token", value);
    } catch (e) {
      console.log(e, "save token");
    }
  };

  const saveInformation = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("information", jsonValue);
    } catch (e) {
      console.log(e, "save info");
    }
  };

  const getITems = async () => {
    try {
      const data = new FormData();
      const phone_number = await AsyncStorage.getItem("phone_number");
      const user_type_id = await AsyncStorage.getItem("user_type_id");
      const first_name = await AsyncStorage.getItem("first_name");
      const last_name = await AsyncStorage.getItem("last_name");
      const radius = await AsyncStorage.getItem("radius");
      const care_working_experiences = await AsyncStorage.getItem(
        "care_experiences"
      );
      const zipcode = await AsyncStorage.getItem("zipcode");
      const location = await AsyncStorage.getItem("location");

      const get_care_services = await AsyncStorage.getItem("care_services");
      const care_services = JSON.parse(get_care_services);

      const experiance = await AsyncStorage.getItem("experiance");
      const newExperiance = JSON.parse(experiance);
      const coppyExperiance = newExperiance.filter((filter) => filter.checked);

      const care_certifications = await AsyncStorage.getItem("certifications");
      const newCer = JSON.parse(care_certifications);
      const coppyCer = newCer.filter((filter) => filter.checked);

      const addInfo = await AsyncStorage.getItem("addInfo");
      const newAddInfo = JSON.parse(addInfo);

      const get_lat_long = await AsyncStorage.getItem("latLong");
      const LatLong = JSON.parse(get_lat_long);

      newAddInfo.forEach((elem) =>
        data.append(`profile[${elem.name}]`, elem.checked ? 1 : 0)
      );

      coppyCer.forEach((elem, index) =>
        data.append(`care_certifications[${index}]`, elem.id)
      );

      care_services.forEach((elem, index) =>
        data.append(`care_services[${index}]`, elem)
      );

      coppyExperiance.forEach((elem, index) =>
        data.append(`care_experiences[${index}]`, elem.id)
      );

      data.append("phone_number", phone_number);
      data.append("user_type_id", user_type_id);
      data.append("location[zip]", zipcode);
      data.append("location[address]", location);
      data.append("location[travel_radius]", radius);
      data.append("profile[first_name]", first_name);
      data.append("profile[last_name]", last_name);
      data.append("profile[working_experience_id]", care_working_experiences);
      data.append("profile[image]", {
        type: `image.${selectedImage.split(".").slice(-1)}`,
        name: "image.jpg",
        uri: selectedImage,
      });
      data.append("location[longitude]", LatLong.lng);
      data.append("location[latitude]", LatLong.lat);

      auth
        .regisCareGiver(data)
        .then((res) => {
          if (res.status <= 300) {
            saveToken(res.data.data.access_token);
            saveInformation(res.data.data);
            navigation.navigate("HomeScreen", { modal: true });
          }

          console.log(res.data.data);
        })
        .catch((err) => console.log(err?.response));
    } catch (e) {
      console.log(e, "catch");
    }
  };

  const save = () => {
    getITems();
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
        <Text style={[styles.headingText, { paddingHorizontal: 0 }]}>
          Upload photo
        </Text>
        <Text style={styles.text}>
          You are 8x more likely to get hired with a photo!
        </Text>

        <View style={styles.photoBox}>
          <View
            style={[styles.uploadPhoto, selectedImage && { borderWidth: 0 }]}
          >
            {selectedImage ? (
              <Image
                source={{ uri: selectedImage }}
                style={{ width: "100%", height: "100%", borderRadius: 8 }}
              />
            ) : (
              <Camera weight="light" size={44} />
            )}
          </View>
          <TouchableHighlight
            underlayColor="none"
            onPress={() => pickImageAsync()}
          >
            <Text style={styles.addPhotoText}>Tap to add a photo</Text>
          </TouchableHighlight>

          <Text style={styles.skipText}>Skip for now</Text>
        </View>
      </View>
      <Next active={5} bgColor={selectedImage} navigate={() => save()} />
    </SafeAreaView>
  );
};
export default Upload;
