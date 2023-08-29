import { StyleSheet } from "react-native";

export const HOME_STYLES = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#419190",
  },
  list: {
    flex: 1,
    padding: 15,
  },
  touch: {
    padding: 20,
    marginBottom: 10,
    backgroundColor: "#344040", // Gradient background color
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
    textShadowColor: "#000",
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 3,
  },
  text2: {
    color: "#b3bdbd", // Light gray text color
    fontStyle: "normal", // Italic typography
    textAlign: "center", // Center-align the text
    marginTop: 5,
  },
});
