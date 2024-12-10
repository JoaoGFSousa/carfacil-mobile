import { TouchableOpacity, View, Text } from "react-native"
import { styles } from "./styles"
import { FC } from "react";

interface ButtonsProps {
    clearCart: () => void;
    handleCheckout: () => Promise<void>
}


export const Buttons: FC<ButtonsProps> = ({ clearCart, handleCheckout }) => {
    return (
        <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={styles.clear}
                onPress={() => clearCart()}>
                <Text style={styles.text1} >Limpar carrinho!</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.checkout}
                onPress={handleCheckout}>
                <Text style={styles.text2}>Checkout!</Text>
            </TouchableOpacity>
        </View>
    )
}