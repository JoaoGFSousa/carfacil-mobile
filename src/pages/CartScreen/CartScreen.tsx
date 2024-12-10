
import { useCart } from "@/src/contexts/CartContext"
import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native"
import { FlatList } from "react-native"
import { styles } from "./style"
import Toast from "react-native-toast-message"
import { openBrowserAsync } from "expo-web-browser"
import { useState } from "react"
import { checkout, order } from "@/src/Services/checkout.service"
import { VehicleCartItem } from "@/src/components/VeicleCartItem/VehicleCartItem"
import { Buttons } from "@/src/components/Buttons/Buttons"

export const CartScreen = () => {
    const { cart, totalCart, clearCart } = useCart()
    const [isLoading, setIsLoading] = useState(false);
    const handleCheckout = async () => {
        setIsLoading(true);
        try {
            const orderId = await order(cart);
            const url = await checkout(orderId);
            clearCart();
            Toast.show({
                type: "success",
                text1: "Compra finalizada",
                text2: "Aguardando a realização do pagamento",
            })
            await openBrowserAsync(url);
        } catch (error: any) {
            console.log(error.response)
            Toast.show({
                type: "error",
                text1: " Erro ao finalizar compra",
                text2: "Tente novamente mais tarde",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={cart}
                style={styles.cartList}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => <VehicleCartItem item={item}
                    showButtons
                />}
            />
            {isLoading && (<ActivityIndicator size="large" color={"blue"} />
            )}
            <View style={styles.footer}>
                <Text style={styles.totalPrice} >
                    {(totalCart / 100).toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    })}
                </Text>
                {!isLoading && (
                    <Buttons
                        clearCart={clearCart}
                        handleCheckout={handleCheckout}
                    />
                )}
            </View>
        </View>
    )
}