import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// Componenets
import Header from "../../../components/Header";
import { Camera } from "phosphor-react-native";

// Components
import Next from "../Components/Next";

// CSS
import styles from "../styles";

const Upload = ({ navigation }) => {
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
          <View style={styles.uploadPhoto}>
            <Camera weight="light" size={44} />
          </View>
          <Text style={styles.addPhotoText}>Tap to add a photo</Text>
          <Text style={styles.skipText}>Skip for now</Text>
        </View>
      </View>

      <Next
        active={5}
        navigate={() => navigation.navigate("Home", { modal: true })}
      />
    </SafeAreaView>
  );
};
export default Upload;
