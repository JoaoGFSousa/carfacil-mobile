import { NavigationContainer } from "@react-navigation/native";
import { Router } from "./src/router";
import { Provider } from "./src/providers";
import Toast from "react-native-toast-message";



export default function App() {
    return (
        <NavigationContainer>
            <Provider>
                <Router />
            </Provider>
            <Toast/>
        </NavigationContainer>
    )
}