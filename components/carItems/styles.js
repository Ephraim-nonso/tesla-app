import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: Dimensions.get("screen").height,
  },
  titles: {
    marginTop: "30%",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "700",
  },
  subtitle: {
    fontSize: 16,
    color: "#5c5e62",
  },
  subtitleCTA: {
    textDecorationLine: "underline",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },

  btnContainer: {
    width: "100%",
    position: "absolute",
    top: 500,
  },
});
