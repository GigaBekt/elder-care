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
