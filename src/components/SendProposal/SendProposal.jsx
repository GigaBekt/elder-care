import {
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import ModalHeader from "../../components/Header/ModalHeader";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
// Components
import Input from "./Components/Input";
import Details from "./Components/Details";

// CSS
import style from "./style";
import Textarea from "./Components/Textarea";

const SendProposal = ({ item, show, close }) => {
  const [coverLetter, setCoverLetter] = useState("");
  const [price, setPrice] = useState("");
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (show) {
      if (price.length > 0) {
        setActive(true);
      }
    } else setActive(false);
    return () => setActive(false);
  }, [price]);

  return (
    <Modal
      animationType="slide"
      presentationStyle="pageSheet"
      visible={show}
      onRequestClose={close}
    >
      <SafeAreaView style={{ flex: 1, justifyContent: "space-between" }}>
        <ScrollView>
          <View style={{ paddingHorizontal: 13, paddingVertical: 24 }}>
            <ModalHeader name="Send Proposal" close={close} />
            <Text style={style.heading}>Task Details</Text>
            <Details />
          </View>
          <View style={style.line} />
          <View style={{ paddingHorizontal: 13 }}>
            <Input price={price} setPrice={setPrice} />
            <Textarea
              coverLetter={coverLetter}
              setCoverLetter={setCoverLetter}
            />
          </View>
        </ScrollView>
        <TouchableHighlight
          style={[style.btn, active && { backgroundColor: "#031647" }]}
        >
          <Text style={style.btnText}>Submit</Text>
        </TouchableHighlight>
      </SafeAreaView>
    </Modal>
  );
};

export default SendProposal;
