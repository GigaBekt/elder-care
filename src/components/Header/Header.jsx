import { CaretLeft } from "phosphor-react-native";
import { View, Text, TouchableHighlight } from "react-native";

//
import Material from "react-native-vector-icons/MaterialIcons";

//
import styles from "./styles";

const Header = ({ navigation, name }) => {
  return (
    <View style={styles.header}>
      <TouchableHighlight
        underlayColor={"#fff"}
        onPress={() => navigation.goBack()}
        style={[styles.goBack, { zIndex: 99 }]}
      >
        {/* <Material name="chevron-left"  /> */}
        <CaretLeft size={20} />
      </TouchableHighlight>
      <View
        style={{
          zIndex: -1,
          width: "100%",
          position: "absolute",
          alignItems: "center",
        }}
      >
        <Text style={styles.profileHeader}>{name}</Text>
      </View>
    </View>
  );
};
export default Header;
