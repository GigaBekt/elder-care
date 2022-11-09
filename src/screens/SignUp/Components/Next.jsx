import { ArrowRight } from "phosphor-react-native";
import { View, Text, TouchableHighlight } from "react-native";
// Comp
// CSS
import styles from "../styles";
const Next = ({ navigate, active }) => {
  const dots = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

  return (
    <View style={{ paddingHorizontal: 13 }}>
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
          style={styles.nextPage}
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
