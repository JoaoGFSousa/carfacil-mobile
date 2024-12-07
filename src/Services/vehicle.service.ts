import { api } from "./api";

export interface VehicleModel {
  id: number;
  user_id: number;
  category: string;
  ano: number;
  nome: string;
  marca: string;
  cor: string;
  cilindradas: number;
  combustivel: string;
  image: string;
  img: string;
  price: number;
  description: string;
  preco: number;
}

export const getVehicles = async (): Promise<VehicleModel[]> => {
  const response = await api.get("/vehicles");
  return response.data;
};
