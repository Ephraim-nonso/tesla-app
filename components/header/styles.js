import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "absolute",
    top: 30,
    zIndex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  logo: { width: 100, height: 40 },
  menu: {
    width: 25,
    height: 25,
  },
});
