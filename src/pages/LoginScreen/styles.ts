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
  logButton: {
    backgroundColor: theme.colors.body.tertiary,
    width: 100,
    margin: "auto",
    padding: 4,
    borderRadius: 5,
  },
  text: {
    alignSelf: "center",
  },
  gap: {
    marginTop: 5,
  },
});
