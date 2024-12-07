import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabRouter } from "./tab-router";
import { RegisterScreen } from "../pages/RegisterScreen/RegisterScreen";
import { styles } from "./styles";
import { LoginScreen } from "../pages/LoginScreen/LoginScreen";
import { AccountScreen } from "../pages/AccountScreen/AccountScreen";
import { CartScreen } from "../pages/CartScreen/CartScreen";


const Stack = createNativeStackNavigator();
export const Router = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: styles.header,
            }}
        >
            <Stack.Screen name="Initial" options={{
                headerShown: false
            }} component={TabRouter} />
            <Stack.Screen
                name="RegisterScreen"
                component={RegisterScreen}
                options={{
                    title: "Voltar!",
                }}
            />
            <Stack.Screen 
                name="LoginScreen"
                component={LoginScreen}
                options={{
                    title: "Voltar!"
                }} />
            <Stack.Screen
                name="AccountScreen"
                component={AccountScreen}
                options={{
                    title:"Voltar!"
                }}
            />
            <Stack.Screen
            name="CartScreen"
            component={CartScreen}
            options={{
                title:"Voltar!"
            }}
            />
        </Stack.Navigator>
    )
}