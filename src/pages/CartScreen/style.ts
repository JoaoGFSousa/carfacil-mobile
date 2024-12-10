import { checkout } from "@/src/Services/checkout.service";
import { theme } from "@/src/themes/root";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  cartList: {
    flexGrow: 1,
    maxHeight: "88%",
  },
  footer: {
    paddingHorizontal: 8,
    borderTopWidth: 1,
    borderTopColor: "black",
  },
  totalPrice: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 8,
  },
});
