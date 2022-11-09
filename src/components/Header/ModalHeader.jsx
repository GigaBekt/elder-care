import { X } from "phosphor-react-native";
import { View, TouchableHighlight, Text } from "react-native";

// CSS
import style from "./styles";
const ModalHeader = ({ name, close }) => {
  return (
    <View style={style.modalHeader}>
      <Text style={style.modalText}>{name}</Text>
      <TouchableHighlight
        style={style.btn}
        underlayColor="none"
        onPress={close}
      >
        <X size={24} />
      </TouchableHighlight>
    </View>
  );
};
export default ModalHeader;
