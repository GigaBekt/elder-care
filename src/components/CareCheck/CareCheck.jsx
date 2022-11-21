import { Modal, Text, TouchableHighlight, View } from "react-native";
import ModalHeader from "../Header/ModalHeader";

// CSS
import styles from "./style";

const CareCheck = ({ show, close }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={show}
      onRequestClose={() => {
        close(false);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View>
            <ModalHeader close={() => close(false)} name="Care Check" />
            <Text style={[styles.mainHeding, { textAlign: "left" }]}>
              Every caregiver completes a CareCheck
            </Text>
            <Text
              style={[styles.paraText, { textAlign: "left", marginTop: 8 }]}
            >
              A background check is run on every caregiver when they join us.
            </Text>

            <Text style={[styles.mainHeding, { textAlign: "left" }]}>
              CareCheck includes
            </Text>
            <View style={{ marginTop: 2 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <Text>✅</Text>
                <Text style={styles.listText}>
                  Social Security number trace
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <Text>✅</Text>
                <Text style={styles.listText}>
                  Nation sex offender public website search
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <Text>✅</Text>
                <Text style={styles.listText}>
                  Multi-jurisdictionla criminal database search
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <Text>✅</Text>
                <Text style={styles.listText}>
                  Federal and countv criminal recors search
                </Text>
              </View>
            </View>
          </View>

          <TouchableHighlight
            underlayColor="#1249CB"
            // onPress={navigate}
            style={styles.nextPage}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={styles.nextPageText}>Gotcha</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
};
export default CareCheck;
