import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { HomeScreen } from "../pages/HomeScreen/HomeScreen";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Image } from "expo-image"
import { CartScreen } from "../pages/CartScreen/CartScreen";
import { useAuth } from "../contexts/AuthContext";


export const Tab = createBottomTabNavigator();

export const TabRouter = ({ navigation }: NativeStackScreenProps<any>) => {
    const { isLogged } = useAuth();
    return (
        <Tab.Navigator screenOptions={{
            headerStyle: styles.header,
            headerLeft: () => {
                return (
                    <Image source={require("../../assets/images/logo.png")} style={styles.logo} />
                )
            },
            headerTitle: ({ children }) => {
                return children == "Home" ? <Text>Carfácil</Text> : <Text>{children}</Text>;
            },
            headerTitleAlign: "center",
        }}>
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarIcon: () => (
                        <FontAwesome name="home" size={24} color="black" />
                    ),
                    title: "Home",
                    headerRight: () => {
                        return <>
                            {isLogged ?
                                <TouchableOpacity onPress={() => {
                                    navigation.navigate("AccountScreen")
                                }}
                                    style={styles.loginButton}
                                >
                                    <FontAwesome5 name="user-check" size={24} color="black" />
                                    <Text>Sua Conta!</Text>
                                </TouchableOpacity> : <TouchableOpacity onPress={() => {
                                    navigation.navigate("LoginScreen")
                                }}
                                    style={styles.loginButton}
                                >
                                    <FontAwesome5 name="user-astronaut" size={24} color="black" />
                                    <Text>LogIn!</Text>
                                </TouchableOpacity>}
                        </>
                    }
                }}
            />
            <Tab.Screen name="Carrinho" component={CartScreen}
                options={{
                    tabBarIcon: () => (
                        <FontAwesome name="shopping-cart" size={24} color="black" />
                    ),
                    title: "Carrinho"
                }}
            />

        </Tab.Navigator >
    )
}