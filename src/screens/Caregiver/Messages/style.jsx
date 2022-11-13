import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  messageMainBox: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#E5E7EB",
    borderBottomWidth: 1,
    paddingVertical: 22,
  },
  rightBox: {
    marginLeft: 12,
  },
  name: {
    fontStyle: "normal",
    fontSize: 14,
    lineHeight: 16,
    color: "#111827",
    fontWeight: "500",
  },
  message: {
    fontStyle: "normal",
    fontSize: 14,
    lineHeight: 16,
    color: "#6B7280",
    fontWeight: "400",
    marginTop: 2,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
    alignItems: "center",
  },
  img: {
    width: 44,
    height: 44,
    resizeMode: "cover",
  },
});
export default style;
