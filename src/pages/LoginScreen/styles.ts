import { theme } from "@/src/themes/root";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  containerAll: {
    elevation: 10,
    backgroundColor: theme.colors.body.quintenary,
    padding: 10,
    width: 350,
  },
  textHead: {},
  form: {},
  button: {
    color: "blue",
  },
});
