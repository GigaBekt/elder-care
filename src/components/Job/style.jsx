import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  box: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
  },
  body: {
    marginVertical: 16,
  },
  bodyText: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 13,
    lineHeight: 18,
    color: "#4B5563",
  },
  nameText: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 16,
    color: "#111827",
    marginLeft: 12,
  },
  type: {
    paddingVertical: 6,
    paddingHorizontal: 8,
    backgroundColor: "#E5E7EB",
    borderRadius: 50,
  },
  typeText: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 16,
    color: "#111827",
  },
  footer: {
    flexDirection: "row",
  },
  singleBox: {
    flexDirection: "row",
    marginRight: 24,
    alignItems: "center",
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
  paraText: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 14,
    color: "#6B7280",
  },
});
export default style;
