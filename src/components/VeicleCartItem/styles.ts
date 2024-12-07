
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "gray"
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 2,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "700",
    color: "black"
  },
  itemPrice: {
    fontSize: 14,
    color: "green",
    fontWeight: "700",
  },
  itemQuantity: {
    fontSize: 16,
    color: "black"
  },
  itemTotalPrice: {
    fontSize: 12,
    color: "black",
    fontWeight: "700",
  },
  itemRemoveButton: {
    marginLeft: "auto",
    backgroundColor: "red",
    padding: 8,
    borderRadius: 4,
    width: 32,
    height: 32,
  },
  itemRemoveIcon: {
    color: "black",
  },
  itemDetails: {
    gap: 2,
  },
  itemQuantityView: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  itemQuantityButton: {
    padding: 4,
  },
  itemQuantityIcon: {
    color: "blue"
  },
});
