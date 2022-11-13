import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  singleBox: {
    flexDirection: "row",
    paddingVertical: 18,
    paddingHorizontal: 12,
    alignItems: "center",
  },
  balanceBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 6,
    backgroundColor: "#fff",
    marginVertical: 16,
    shadowColor: "#000",
    //
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 1.22,
    elevation: 1,
  },
  text: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 16,
    marginLeft: 15,
  },
  heading: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 24,
    lineHeight: 28,
    color: "#031647",
    paddingHorizontal: 13,
  },
  total: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 19,
    color: "#111827",
  },
  profileText: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 16,
    color: "#374151",
  },
  singleBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "#E5E7EB",
    borderBottomWidth: 1,
    paddingVertical: 16,
  },
  nav: {
    backgroundColor: "#fff",
    paddingVertical: 18,
    paddingHorizontal: 12,
    paddingBottom: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 1.22,
    elevation: 1,
  },
  headText: {
    color: "#111827",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 19,
  },
});
export default style;
