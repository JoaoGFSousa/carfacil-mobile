import { theme } from "@/src/themes/root";
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    marginBottom: 8,
    justifyContent: "space-around",
  },
  clear: {
    backgroundColor: theme.colors.head.primary,
    width: 150,
    padding: 4,
    alignContent: "center",
    borderRadius: 5,
  },
  checkout: {
    backgroundColor: theme.colors.head.primary,
    width: 150,
    padding: 4,
    borderRadius: 5,
  },
  text1: {
    color: "red",
    textAlign: "center",
  },
  text2: {
    color: "black",
    textAlign: "center",
  },
});
