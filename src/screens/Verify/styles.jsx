import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  content: {
    padding: 25,
    flexDirection: "column",
    alignItems: "center",
    // justifyContent: "center",
    flex: 1,
    marginTop: "30%",
  },
  height: {
    backgroundColor: "#fff",
    flex: 1,
  },

  text: {
    // font-family: 'DM Sans',
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    color: "#0E1116",
    marginBottom: 24,
    width: "70%",
    textAlign: "center",
    lineHeight: 20,
  },
  textNumber: { fontWeight: "600" },

  resendText: {
    // font-family: 'DM Sans';
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    letterSpacing: 0.01,
    color: "#9CA3AF",
    marginTop: 14,
    lineHeight: 22,
  },
  textInputButton: {
    color: "#0E1116",
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    textAlign: "center",
  },
});

export default styles;
