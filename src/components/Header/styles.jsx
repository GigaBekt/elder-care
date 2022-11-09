import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  goBack: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 50,
    borderColor: "#000",
    borderWidth: 1,
    padding: 5,
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileHeader: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 16,
    color: "#000",
    textTransform: "capitalize",
  },

  modalHeader: {
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  modalText: {
    // width: "90%",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 16,
    color: "#031647",
    textAlign: "right",
    justifyContent: "flex-end",
    width: "58%",
    alignItems: "flex-end",
  },
  btn: {
    width: "42%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});
export default styles;
