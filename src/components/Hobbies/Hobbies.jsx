import { Modal, Text, TouchableHighlight, View } from "react-native";
import { useState, useEffect } from "react";

// Components
import ModalHeader from "../Header/ModalHeader";
import { ArrowRight, Basketball } from "phosphor-react-native";
import Icons from "./Icons";
// API
import AdditionalInfo from "../../Api/AdditionalInfo";

// CSS
import styles from "./styles";

const Hobbies = ({ show, close }) => {
  const renderIcons = (props) => <Icons props={props} />;
  const additionalInfo = new AdditionalInfo();
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
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

  const getHobbies = () => {
    additionalInfo
      .hobbies()
      .then((res) => {
        if (res.status === 200) {
          setData(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err?.response);
      })
      .finally(() => setLoader(false));
  };

  useEffect(() => {
    show && getHobbies();
    return () => setLoader(true);
  }, []);

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
            <ModalHeader close={() => close(false)} name="Hobbies" />
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
              {!loader &&
                data.map((item) => (
                  <TouchableHighlight
                    key={item.id}
                    underlayColor="none"
                    onPress={() => selectHobbie(item)}
                  >
                    <View
                      style={[
                        styles.singleHobbie,
                        selected.includes(item.id) ? styles.activeBox : "",
                        { alignItems: "center", flexDirection: "row" },
                      ]}
                    >
                      <Text style={{ marginRight: 4 }}>
                        {renderIcons(item)}
                      </Text>
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
