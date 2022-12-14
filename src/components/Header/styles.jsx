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
    alignItems: "center",
    width: "100%",
  },
  modalText: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 16,
    color: "#111827",
    width: "100%",
    textAlign: "center",
    position: "relative",
  },
  btn: {
    right: 0,
    position: "absolute",
  },
  homeHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerHeading: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 24,
    lineHeight: 28,
    color: "#031647",
  },
  balance: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 15,
    color: "#111827",
  },
  amount: {
    color: "#6B7280",
  },
  tab: {
    flexDirection: "row",
    marginTop: 18,
    marginBottom: 16,
    alignItems: "center",
  },
  singleTab: {
    marginRight: 36,
    position: "relative",
  },
  tabMenuText: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 16,
    color: "#6B7280",
    textTransform: "capitalize",
  },
  activeNav: {
    width: "100%",
    backgroundColor: "#1249CB",
    height: 2,
    position: "absolute",
    bottom: -16,
  },
  headerMainBox: {
    backgroundColor: "#fff",
    paddingHorizontal: 13,

    borderBottomColor: "#E5E7EB",
    borderBottomWidth: 1,
    paddingTop: 50,
  },
  activeMenu: {
    color: "#1249CB",
    fontWeight: "500",
  },
  count: {
    backgroundColor: "#4AA47B",
    borderRadius: 50,
    height: 18,
    width: 18,
    // paddingVertical: 5,
    // paddingHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 6,
  },
  countText: {
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 14,
    color: "#fff",
    textAlign: "center",
  },
});
export default styles;
