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

  root: { flex: 1, padding: 20 },
  title: { textAlign: "center", fontSize: 30 },
  // codeFieldRoot: { marginTop: 20 },
  cell: {
    width: 62,
    height: 48,

    textAlign: "center",
    marginHorizontal: 4,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",

    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  textCell: {
    color: "#111827",

    fontSize: 20,
    lineHeight: 22,
  },
  focusCell: {
    // border: 1px solid ;
    borderWidth: 1,
    borderColor: "#9CA3AF",
  },
});

export default styles;
