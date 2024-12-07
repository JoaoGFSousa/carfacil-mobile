import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import { VehicleModel } from "../Services/vehicle.service";
import { getItem, setItem } from "../Services/cache.service";

interface VehicleCartModel extends VehicleModel {
    amount: number;
    
}

interface CartContextData {
    cart: VehicleCartModel[];
    totalCart: number;
    addVehicle: (product: VehicleModel) => void;
    removeVehicle: (productId: number) => void;
    clearCart: () => void;
    addQuantity: (productId: number) => void;
    subQuantity: (productId: number) => void;
}

export const CartContext = createContext<CartContextData>({} as CartContextData);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<VehicleCartModel[]>([]);

    useEffect(() => {
        (async () => {
            const cachedCart = await getItem("cart", []);
            setCart(cachedCart);
        })();
    }, []);

    useEffect(() => {
        setItem("cart", cart);
    }, [cart])

    const addQuantity = (vehicleId: number) => {
        const vehicleIndex = cart.findIndex((item) => item.id === vehicleId);
        if (vehicleIndex === -1) return;
        const newCart = [...cart];
        newCart[vehicleIndex].amount++;

        setCart(newCart);
    };

    const subQuantity = (vehicleId: number) => {
        const vehicleIndex = cart.findIndex((item) => item.id === vehicleId);
        if (vehicleIndex == -1) return;
        const newCart = [...cart];
        newCart[vehicleIndex].amount--;
        if (newCart[vehicleIndex].amount === 0) {
            newCart.splice(vehicleIndex, 1);
        }

        setCart(newCart);
    };

    const addVehicle = (vehicle: VehicleModel) => {
        const vehicleIndex = cart.findIndex((item) => item.id === vehicle.id);
        if (vehicleIndex === -1) {
            setCart([...cart, { ...vehicle, amount: 1 }]);
            return;
        }
        const newCart = cart.map((item) =>
            item.id === vehicle.id ? { ...item, amount: item.amount + 1 } : item
        );
        setCart(newCart);
    };
    const removeVehicle = (vehicleId: number) => {
        const newCart = cart.filter((item) => item.id !== vehicleId);
        setCart(newCart);
    };

    const clearCart = () => {
        setCart([]);
    };

    const totalCart = useMemo(() => {
        return cart.reduce((acc, item) => acc + item.price * item.amount, 0);
    }, [cart]);

    return (
        <CartContext.Provider
            value={{ cart, totalCart, addVehicle, removeVehicle, clearCart, subQuantity, addQuantity }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);

