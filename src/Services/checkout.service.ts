import { api } from "./api";

interface CheckoutRequestProps {
  id: number;
  amount: number;
}

export const checkout = async (id: number | string): Promise<string> => {
  const { data } = await api.post(`/order/${id}/payment`);
  return data.payment_url;
};

export const order = async (cart: CheckoutRequestProps[]): Promise<string> => {
  const body = {
    vehicles: cart.map((item: CheckoutRequestProps) => ({
      vehicleId: item.id,
      amount: item.amount,
    })),
  };
  const { data } = await api.post("/order");
  return data.id;
};
