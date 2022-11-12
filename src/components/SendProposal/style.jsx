import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  line: {
    width: "100%",
    height: 6,
    backgroundColor: "#F3F4F6",
    marginVertical: 24,
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D1D5DB",
  },

  input: {
    paddingVertical: 16.5,
    paddingHorizontal: 14,
    width: "90%",
  },
  reciveText: {
    color: "#111827",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 19,
    marginTop: 12,
  },
  estimateText: {
    color: "#6B7280",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 16,
    marginTop: 4,
  },
  textarea: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    paddingVertical: 16,
    paddingHorizontal: 14,
    paddingTop: 16,
    height: 140,
  },
  heading: {
    color: "#111827",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 19,
    marginTop: 24,
    marginBottom: 12,
  },
  btn: {
    backgroundColor: "#9CA3AF",
    borderRadius: 50,
    paddingVertical: 14,
    marginHorizontal: 13,
  },
  btnText: {
    textAlign: "center",
    color: "#fff",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 16,
  },
});

export default style;
