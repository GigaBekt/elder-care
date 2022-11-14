import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  activeHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  mainActiveBox: {
    width: "92%",
    marginLeft: "4%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,

    elevation: 13,
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  user: { flexDirection: "row", alignItems: "center" },
  image: { width: 44, height: 44, borderRadius: 50 },
  userName: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 16,
    marginLeft: 12,
  },
  type: {
    paddingVertical: 6,
    paddingHorizontal: 8,
    backgroundColor: "#E5E7EB",
    borderRadius: 50,
    textTransform: "capitalize",
  },
  typeText: {
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 14,
    textTransform: "capitalize",
  },
  body: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16,
  },
  singleBox: {
    flexDirection: "row",
    marginRight: 24,
    alignItems: "center",
    marginBottom: 16,
  },
  circle: {
    backgroundColor: `rgba(18, 73, 203, 0.12)`,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    height: 36,
    width: 36,
  },
  dateTime: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 16,
    color: "#111827",
  },
  btn: {
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderRadius: 50,
    borderColor: "#1249CB",
    borderWidth: 1,
  },
  btnText: {
    fontStyle: "normal",
    fontWeight: "500",
    textAlign: "center",
    color: "#1249CB",
    fontSize: 16,
    lineHeight: 19,
  },
  paraText: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 14,
    color: "#6B7280",
  },
});

export default style;
