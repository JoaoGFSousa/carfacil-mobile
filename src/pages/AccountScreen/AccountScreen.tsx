import { useCart } from "@/src/contexts/CartContext"
import { FlatList, View, Text, TouchableOpacity } from "react-native"
import { styles } from "./styles"
import { VehicleCartItem } from "@/src/components/VeicleCartItem/VehicleCartItem"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useAuth } from "@/src/contexts/AuthContext";


export const AccountScreen = () => {
    const { cart } = useCart()
    const { logout } = useAuth()
    return (
        <>
            <View>
                <Text style={styles.text} >Seus Pedidos</Text>
            </View>
            <FlatList
                data={cart}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => <VehicleCartItem item={item}
                />}
            />
            <TouchableOpacity
                onPress={logout}
                style={styles.logout}>
                <FontAwesome5 name="door-open" size={24} color="black" />
                <Text style={styles.text2}>Sair</Text>
            </TouchableOpacity>
        </>


    )
}