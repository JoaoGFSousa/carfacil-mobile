import { theme } from "@/src/themes/root";
import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    textAlign: "center",
    color: theme.colors.head.primary,
  },
  logout: {
    width: 100,
    flexDirection: "row",
    marginLeft: "auto",
  },
  text2: {
    alignSelf: "center",
    alignContent: "center",
  },
});
