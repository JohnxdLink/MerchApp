import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  wholeContainer: {
    flex: 1,
  },

  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  contentContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  textHeader: {
    fontSize: 36,
    paddingTop: 14,
    fontWeight: "bold",
  },

  textBody: {
    width: 300,
    fontStyle: "italic",
    paddingBottom: 40,
    textAlign: "justify",
  },

  nextButton: {
    padding: 15,
    backgroundColor: "#66CBCF",
    width: 300,
    borderRadius: 10,
  },

  nextButtonText: {
    fontSize: 18,
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "bold",
  },

  skipButton: {
    padding: 10,
  },

  imageStyle: {
    width: 250,
    height: 250,
    borderRadius: 10,

    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
  },
});
