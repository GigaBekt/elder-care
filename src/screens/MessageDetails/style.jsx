import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    paddingVertical: 24,
  },
  userName: {
    lineHeight: 16,
    fontSize: 14,
    fontWeight: "400",
    fontStyle: "normal",
    color: "#031647",
    textAlign: "center",
    textTransform: "capitalize",
  },
  singleBox: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 28,
  },
  infoBox: {
    marginLeft: 12,
  },
  mainBox: {
    paddingHorizontal: 13,
  },
  infoText: {
    flexDirection: "row",
  },
  date: {
    lineHeight: 16,
    fontSize: 14,
    fontWeight: "400",
    fontStyle: "normal",
    color: "#6B7280",
    marginLeft: 8,
  },
  name: {
    lineHeight: 16,
    fontSize: 14,
    fontWeight: "500",
    fontStyle: "normal",
    color: "#111827",
  },
  message: {
    lineHeight: 18,
    fontSize: 14,
    fontWeight: "400",
    fontStyle: "normal",
    color: "#4B5563",
    marginTop: 6,
  },
  imageBox: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 59,
    height: 32,
    width: 32,
    backgroundColor: `rgba(18, 73, 203, 0.12);`,
  },
  inputBox: {
    backgroundColor: "#fff",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },
  input: {
    width: "85%",
    height: "100%",
  },
});
export default styles;
