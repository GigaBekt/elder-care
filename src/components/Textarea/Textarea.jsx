import { TextInput, View, StyleSheet } from "react-native";

const Textarea = ({ setText, value, placeholder }) => {
  return (
    <View style={style.textarea}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={(text) => setText(text)}
        multiline={true}
        style={{ minHeight: 140 }}
        place
      />
    </View>
  );
};

const style = StyleSheet.create({
  textarea: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
});
export default Textarea;
