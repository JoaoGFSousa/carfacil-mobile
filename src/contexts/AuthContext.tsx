import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { login, register, SignInRequest, SignUpRequest, UserModel } from "../Services/auth.service";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import { getItem, removeItem, setItem } from "../Services/cache.service";
import { api } from "../Services/api";

interface AuthContextData {
    isLogged: boolean,
    user: UserModel | null,
    signIn: (value: SignInRequest) => Promise<void>;
    signUp: (value: SignUpRequest) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isLogged, setIsLogged] = useState(false);
    const [user, setUser] = useState<UserModel | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const navigator = useNavigation();

    useEffect(() => {
        (async () => {
            const [userCached, tokenCached] = await Promise.all([
                getItem("user"),
                getItem("token"),
            ]);
            setUser(userCached);
            setToken(tokenCached);
        })();
    }, []);

    useEffect(() => {
        if (token) {
            setIsLogged(true);
            setItem("token", token);
            api.defaults.headers["Authorization"] = `Bearer ${token}`;
            return;
        }
    }, [token]);

    useEffect(() => {
        if (user !== null) {
            setUser(user);
            setItem("user", user);
            return;
        }
    }, [user]);

    const signIn = async (value: SignInRequest) => {
        try {
            const { accessToken, user } = await login(value);
            setToken(accessToken);
            setUser(user)
            navigator.navigate("Initial" as never);
        } catch (error) {
            console.log(error)
            Toast.show({
                type: "error",
                text1: "Error ao fazer login",
                text2: "Verifique suas credenciais e tente novamente",
            });
        }
    };

    const signUp = async (value: SignUpRequest) => {
        try {
            const { id } = await register(value);
            Toast.show({
                type: "success",
                text1: "Cadastro realizado com sucesso",
                text2: "Faça login para continuar",
            });
            navigator.navigate("LoginScreen" as never);
        } catch (error) {
            Toast.show({
                type: "error",
                text1: "Erro ao fazer cadastro",
                text2: "Verifique seus dados e tente novamente",
            });
        }
    };

    const logout = () => {
        setIsLogged(false);
        setUser(null);
        setToken(null);
        removeItem("user");
        removeItem("token");
        navigator.navigate("Initial" as never);
    }

    return (
        <AuthContext.Provider value={{ isLogged, signIn, signUp, user, logout }}>
            {children}
        </AuthContext.Provider>
    )

}