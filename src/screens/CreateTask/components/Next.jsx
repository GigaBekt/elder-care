import { ArrowRight } from "phosphor-react-native";
import { View, Text, TouchableHighlight } from "react-native";

// CSS
import styles from "../styles";
const Next = ({ navigate, active, bgColor }) => {
  const dots = [{ id: 1 }, { id: 2 }, { id: 3 }];

  return (
    <View style={{ paddingTop: 10, paddingHorizontal: 13 }}>
      <View style={styles.dotsWithBtn}>
        <View style={styles.dotBox}>
          {dots.map((dot) => (
            <View
              key={dot.id}
              style={[
                styles.dot,
                active === dot.id ? { backgroundColor: "#1249CB" } : "",
              ]}
            />
          ))}
        </View>
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
      </View>
    </View>
  );
};
export default Next;
