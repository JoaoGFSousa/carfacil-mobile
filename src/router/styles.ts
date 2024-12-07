import { StyleSheet } from "react-native";
import { theme } from "../themes/root";

export const styles = StyleSheet.create({
  header: {
    backgroundColor: theme.colors.head.primary,
  },
  loginButton: {
    alignItems: "center",
    padding: 4,
    marginRight: 4,
  },
  logo: {
    width: 63,
    height: 63,
    padding: 4,
    marginLeft: 4,
  },
});
