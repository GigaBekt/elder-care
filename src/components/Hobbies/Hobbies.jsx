import { Modal, Text, TouchableHighlight, View } from "react-native";
import { useState } from "react";
// Components
import ModalHeader from "../Header/ModalHeader";
import { ArrowRight } from "phosphor-react-native";

import styles from "./styles";
const Hobbies = ({ show, close }) => {
  const data = [
    { id: 1, name: "🎸 Instruments" },
    { id: 2, name: "🏀 Basketball" },
    { id: 3, name: "🎵 Music" },
    { id: 11, name: "🏂 Snowboarder" },
    { id: 24, name: "👨‍🍳 Baking" },
    { id: 32, name: "🎨 Art" },
    { id: 322, name: "💃 Dance" },
  ];

  const [selected, setSelected] = useState([]);

  const selectHobbie = (item) => {
    const findItem = selected.indexOf(item.id);
    if (findItem !== -1) {
      const activeList = selected.slice();
      activeList.splice(findItem, 1);
      setSelected(activeList);
    } else {
      setSelected([...selected, item.id]);
    }
  };

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
            <ModalHeader name="Hobbies" />
            <Text style={styles.mainHeding}>Hobbies and Interests</Text>
            <Text style={styles.paraText}>
              Choose your hobbies and interests
            </Text>
            <View
              style={{
                flexWrap: "wrap",
                flexDirection: "row",
                marginTop: 24,
              }}
            >
              {data.map((item) => (
                <TouchableHighlight
                  key={item.id}
                  underlayColor="none"
                  onPress={() => selectHobbie(item)}
                >
                  <View
                    style={[
                      styles.singleHobbie,
                      selected.includes(item.id) ? styles.activeBox : "",
                    ]}
                  >
                    <Text>{item.name}</Text>
                  </View>
                </TouchableHighlight>
              ))}
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
              <Text style={styles.nextPageText}>Submit</Text>
              <ArrowRight size={24} color="#fff" />
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
};

export default Hobbies;
