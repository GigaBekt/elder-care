import { useState } from "react";
import { View, Text, TouchableHighlight, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
// Componenets
import Header from "../../../components/Header";
import { Camera } from "phosphor-react-native";

// Components
import Next from "../Components/Next";

// CSS
import styles from "../styles";

const Upload = ({ navigation }) => {
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
  const save = () => {
    // const data = new FormData();
    // data.append("phone_number", "+995598337729");
    // data.append("user_type_id", "eb4fe646-b515-47fd-8643-fd8081563455");
    // data.append("care_services[0]", "4d97d88e-2bca-4421-865a-a70b6bc4d25e");
    // data.append("care_services[1]", "d389b7b7-55a1-49a4-91be-8e0a2d209587");
    // data.append("care_experiences[0]", "a747566e-300e-40b2-91bc-b49afe203534");
    // data.append(
    //   "care_certifications[0]",
    //   "e5dbf709-709e-4ccd-94ef-7d0e0cb44c50"
    // );
    // data.append("profile[first_name]", "Otto");
    // data.append("profile[last_name]", "Mamestsarashvili");
    // data.append(
    //   "profile[working_experience_id]",
    //   "649b7510-e6b0-4f1c-b707-0bc705dfb03f"
    // );
    // data.append(
    //   "profile[image]",
    //   fs.createReadStream("/Users/mrtunii/Downloads/AGX_v3.png")
    // );
    // data.append("profile[non_smoker]", "0");
    // data.append("profile[has_car]", "1");
    // data.append("profile[college_degree]", "1");
    // data.append("profile[comfortable_with_pets]", "0");
    // data.append("location[zip]", "1234");
    // data.append("location[address]", "Some address");
    // data.append("location[travel_radius]", "50");
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
        <Text style={styles.headingText}>Upload photo</Text>
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

      <Next
        active={5}
        navigate={() => navigation.navigate("HomeScreen", { modal: true })}
      />
    </SafeAreaView>
  );
};
export default Upload;
