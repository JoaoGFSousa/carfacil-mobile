import { theme } from "@/src/themes/root";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  formControl: {},
  label: {
    color: theme.colors.head.quintenary,
  },
  requiredLabel: {
    color: "red",
  },
  error: {
    color: "red",
  },
});
