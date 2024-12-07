import { VehicleModel } from "@/src/Services/vehicle.service";
import { FC } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image"
import { styles } from "./style";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useCart } from "@/src/contexts/CartContext";
import Toast from "react-native-toast-message";
import { useAuth } from "@/src/contexts/AuthContext";

interface VehicleCardsProps {
    vehicle: VehicleModel
}

export const VehicleCard: FC<VehicleCardsProps> = ({ vehicle }) => {
    const { addVehicle } = useCart();
    const { isLogged } = useAuth();
    return (
        <View style={styles.containerAll} >
            <View style={styles.container}>
                <Image
                    style={styles.vehicleImg}
                    source={`${vehicle.img}`} contentFit="cover"
                />
                <Text style={styles.category}>{vehicle.category}</Text>
                <Text style={styles.nome}>{vehicle.nome}</Text>
                <Text style={styles.ano}>{vehicle.ano}</Text>
                <Text style={styles.marca}>{vehicle.marca}</Text>
                <Text style={styles.cor}>{vehicle.cor}</Text>
                <Text style={styles.cilindradas}>{vehicle.cilindradas}</Text>
                <Text style={styles.combustivel}>{vehicle.combustivel}</Text>
                <Text style={styles.description}>{vehicle.description}</Text>
                <Text style={styles.preco}>{(vehicle.preco / 100).toLocaleString("pt-br", {
                    currency: "BRL",
                    style: "currency",
                })}</Text>
            </View>
            <TouchableOpacity
                style={styles.cartButton}
                onPress={() => {
                    if (!isLogged) {
                        Toast.show({
                            type: "error",
                            text1: "Você não estã logado",
                            text2: "Faça login primeiro",
                        })
                        return;
                    }
                    Toast.show({
                        type: "success",
                        text1: "Carro Adicionado ao carrinho",
                        text2: "Aguardando a realização do pagamento",
                    })
                    addVehicle(vehicle)
                }}>
                <View style={styles.button}>
                    <FontAwesome name="shopping-cart" size={24} color="black" />
                    <Text style={styles.cart}>Adicionar ao carrinho</Text>
                </View>
            </TouchableOpacity>
        </View>
    )

}