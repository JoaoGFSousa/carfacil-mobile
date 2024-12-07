import { theme } from "@/src/themes/root";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerAll: {
    padding: 5,
    width:360,
    height:480,
    justifyContent:"center",
    margin:"auto",
    backgroundColor:"#ffffff",
    borderRadius: 10,
    elevation: 5,
  },
  container: {
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  vehicleImg: {
    width: 200,
    height: 150,
    borderRadius: 10,
  },
  category: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  nome: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  ano: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: "center",
  },
  marca: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: "center",
  },
  cor: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: "center",
  },
  cilindradas: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: "center",
  },
  combustivel: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: "center",
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    marginBottom: 10,
    textAlign: "center",
  },
  preco: {
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
    textAlign: "center",
  },
  cart: {
    textAlign: "center",
  },
  button: {
    alignItems: "center",
    gap: 4,
    flexDirection: "row",
  },
  cartButton: {
    width: 200,
    backgroundColor: theme.colors.head.secondary,
    borderRadius: 5,
    padding: 8,
    alignItems: "center",
    alignSelf: "center",
  },
});
