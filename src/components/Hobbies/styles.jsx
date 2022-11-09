import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingHorizontal: 22,
  },

  modalView: {
    backgroundColor: "#fff",
    paddingVertical: 17,
    paddingHorizontal: 12,
    width: "100%",
    height: "65%",
    borderRadius: 12,
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },

  mainHeding: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 21,
    color: "#031647",
    textAlign: "center",
    marginTop: 33,
  },
  paraText: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 13,
    lineHeight: 18,
    color: "#4B5563",
    textAlign: "center",
  },
  nextPage: {
    backgroundColor: "#1249CB",
    alignItems: "center",
    justifyContent: "center",
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
  singleHobbie: {
    backgroundColor: "#F9FAFB",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    textAlign: "center",
    marginRight: 6,
    marginBottom: 8,
  },
  activeBox: {
    backgroundColor: "#E5E7EB",
    borderColor: "#D1D5DB",
  },
});

export default styles;
