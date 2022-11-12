import { View, TextInput } from "react-native";

// CSS
import style from "../style";

const Textarea = ({ coverLetter, setCoverLetter }) => {
  return (
    <View style={{ marginTop: 24 }}>
      <TextInput
        style={style.textarea}
        multiline={true}
        numberOfLines={10}
        onChangeText={(text) => setCoverLetter(text)}
        value={coverLetter}
        placeholder="Cover Letter"
      />
    </View>
  );
};
export default Textarea;
