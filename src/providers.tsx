import { ReactNode } from "react"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { AuthProvider } from "./contexts/AuthContext"
import { CartProvider } from "./contexts/CartContext"
export const Provider = ({ children }: { children: ReactNode }) => {
    return (
        <SafeAreaProvider>
            <AuthProvider>
                <CartProvider>
                {children}
                </CartProvider>
            </AuthProvider>
        </SafeAreaProvider>
    )
}