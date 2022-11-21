import { ArrowRight } from "phosphor-react-native";
import { View, Text, TouchableOpacity } from "react-native";

// CSS
import styles from "../styles";
const Next = ({ navigate, bgColor }) => {
  return (
    <View style={{ paddingHorizontal: 13, paddingTop: 10 }}>
      <TouchableOpacity
        onPress={navigate}
        style={[
          styles.nextPage,
          { width: "100%" },
          bgColor && { backgroundColor: "#1249CB" },
        ]}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Text style={styles.nextPageText}>Continue</Text>
          <ArrowRight size={24} color="#fff" />
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Next;
