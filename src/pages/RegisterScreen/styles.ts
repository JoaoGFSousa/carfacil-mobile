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
  form: {
    gap: 4,
  },
  text: {
    color: theme.colors.head.quintenary,
  },
  textCad: {
    fontWeight: "700",
    fontSize: 15,
  },
  divider: {
    flexDirection: "row",
    gap: 6,
    justifyContent: "space-between",
  },
  textHead: {
    fontSize: 15,
    fontWeight: "700",
  },
});
