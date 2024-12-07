import { VehicleCard } from "@/src/components/VehicleCards/VehicleCards"
import { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { getVehicles, VehicleModel } from "@/src/Services/vehicle.service";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";


export const HomeScreen = ({ }: NativeStackScreenProps<any>) => {
    const [isLoading, setIsLoading] = useState(true);
    const [vehicles, setVehicles] = useState<VehicleModel[]>([]);
    const fetchVehicles = async () => {
        setIsLoading(true);
        try {
            const vehicles = await getVehicles();
            setVehicles(vehicles);
        } catch (e) {
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchVehicles();
    }, []);

    return (
        <LinearGradient
            style={styles.container}
            colors={["rgba(98,113,150,1)", "rgba(137,145,165,1)"]}>
            <View style={styles.container}>
                {isLoading && <ActivityIndicator size="large" />}
                {!isLoading && (
                    <FlatList
                        style={{ padding: 15}}
                        contentContainerStyle={{ gap: 15 }}
                        data={vehicles}
                        keyExtractor={(item) => String(item.id)}
                        renderItem={({ item }) => <VehicleCard vehicle={item} />}
                    />
                )}
            </View>
        </LinearGradient>
    )
}