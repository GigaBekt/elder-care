import { Modal, Text, TouchableHighlight, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SendProposal = ({ item, show, close }) => {
  return (
    <Modal
      animationType="slide"
      presentationStyle="pageSheet"
      visible={show}
      onRequestClose={close}
    >
      <View>
        <TouchableHighlight underlayColor="none" onPress={close}>
          <Text>close</Text>
        </TouchableHighlight>
        <Text>{item?.id}</Text>
      </View>
    </Modal>
  );
};

export default SendProposal;
