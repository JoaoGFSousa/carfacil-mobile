
import { View, Text, Touchable } from "react-native";
import { Image } from "expo-image";
import { useCart } from "@/src/contexts/CartContext";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome6 } from "@expo/vector-icons";
import { VehicleModel } from "@/src/Services/vehicle.service";
import { styles } from "./styles";


export const VehicleCartItem = ({
    item,
}: {
    item: VehicleModel & { amount: number };
}) => {
    const { removeVehicle, addQuantity, subQuantity } = useCart();
    return (
        <View style={styles.itemContainer}>
            <Image 
            style={styles.itemImage} 
            source={`${process.env.EXPO_PUBLIC_BASE_URL}/${item.img}`}
                contentFit="cover"
            />
            <View style={styles.itemDetails} >
                <Text style={styles.itemName}>{item.nome}</Text>
                <Text style={styles.itemPrice}>{(item.price / 100).toLocaleString("pt-Br", {
                    style: "currency",
                    currency: "BRL",
                })}
                </Text>
                <View style={styles.itemQuantityView} >
                    <Text>Dias: </Text>
                    <TouchableOpacity style={styles.itemQuantityButton} onPress={() => subQuantity(item.id)}>
                        <FontAwesome6
                            name="minus"
                            size={12}
                            style={styles.itemQuantityIcon}
                        />
                    </TouchableOpacity>
                    <Text style={styles.itemQuantity}>{item.amount}</Text>
                    <TouchableOpacity style={styles.itemQuantityButton} onPress={() => addQuantity(item.id)}>
                        <FontAwesome6
                            name="plus"
                            size={12}
                            style={styles.itemQuantityIcon}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={styles.itemTotalPrice}>
                    Total:{" "}
                    {((item.price / 100) * item.amount).toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                    })}
                </Text>
            </View>
            <TouchableOpacity style={styles.itemRemoveButton}>
                <FontAwesome6
                    name="trash"
                    size={16}
                    styles={styles.itemRemoveButton}
                    onPress={() => removeVehicle(item.id)}
                />
            </TouchableOpacity>
        </View>
    );
};