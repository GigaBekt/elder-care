import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  content: {
    flexDirection: "column",
    paddingHorizontal: 13,
  },
  singleBox: {
    backgroundColor: "#FFFFFF",
    borderRadius: 6,
    paddingVertical: 18,
    paddingHorizontal: 12,
    flexDirection: "row",
    marginBottom: 14,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  active: {
    borderWidth: 2,
    borderColor: "#1249CB",
    paddingHorizontal: 10,
    paddingVertical: 16,

    // border: 2px solid #1249CB;
  },
  textHeader: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 19,
  },
  text: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 16,
  },
  btn: {
    backgroundColor: "#1249CB",
    borderRadius: 50,
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 14,
    justifyContent: "center",
  },
  btn_text: {
    color: "#fff",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 19,
    marginRight: 12,
  },
  textInput: {
    justifyContent: "space-between",
    borderRadius: 8,
    borderColor: "#D1D5DB",
    borderWidth: 1,
    flexDirection: "row",
    paddingVertical: 16,
    paddingHorizontal: 14,
    marginTop: 16,
  },
  insideContent: {
    paddingHorizontal: 13,
  },
  headingText: {
    color: "#031647",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 21,
  },
  box: {
    marginBottom: 24,
  },
  spanText: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 13,
    lineHeight: 18,
    marginTop: 2,
    color: "#4B5563",
  },
  countText: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 22,
    lineHeight: 26,
    color: "#111827",
  },
  counter: {
    borderRightColor: "#E5E7EB",
    borderRightWidth: 1,
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderLeftWidth: 1,
    borderLeftColor: "#E5E7EB",
  },
  nextPage: {
    backgroundColor: "#9CA3AF",
    alignItems: "center",
    justifyContent: "center",
    width: "70%",
    paddingVertical: 15,
    borderRadius: 50,
  },
  nextPageText: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 19,
    color: "#fff",
    marginRight: 10,
  },
  dotsWithBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dotBox: {
    flexDirection: "row",
    width: "25%",
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: "#E5E7EB",
    borderRadius: 50,
    marginRight: 4,
  },
  textInputBox: {},
  textInputExperiance: {
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: "#D1D5DB",
  },

  checkboxText: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 16,
    color: "#4B5563",
  },
  listHeading: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 16,
    color: "#111827",
  },
  mainHeading: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 18,
    color: "#031647",
    // marginTop: 50,
  },
  uploadPhoto: {
    width: 120,
    height: 120,
    borderWidth: 2,
    borderColor: "#9CA3AF",
    borderStyle: "dashed",
    borderRadius: 8,
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    alignItems: "center",
  },
  photoBox: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
  },
  addPhotoText: {
    marginTop: 10,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 23,
    color: "#031647",
  },
  skipText: {
    marginTop: 20,
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 23,
    color: "#1249CB",
  },
});

export default styles;
