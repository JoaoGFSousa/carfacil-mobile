import { LinearGradient } from "expo-linear-gradient"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { styles } from "./styles"
import { View, Text, Touchable, TouchableOpacity } from "react-native"
import { Input } from "@/src/components/Input/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema } from "./schema"
import { useForm } from "react-hook-form"
import { Form } from "@/src/components/Form"
import { useAuth } from "@/src/contexts/AuthContext"


export const LoginScreen = ({ navigation }: NativeStackScreenProps<any>) => {
    const { register, setValue, formState: { errors }, handleSubmit } = useForm({
        mode: "all", resolver: zodResolver(loginSchema)
    });
    const { signIn } = useAuth();
    const onSubmit = (data: any) => {
        console.log(data)
        signIn(data)
    };
    console.log(errors)
    return (
        <LinearGradient
            style={styles.container}
            colors={["rgba(98,113,150,1)", "rgba(137,145,165,1)"]}>
            <View style={styles.containerAll}>
                <View style={styles.textHead} >
                    <Text>Faça Seu Login!</Text>
                </View>
                <Form
                    errors={errors}
                    register={register}
                    setValue={setValue}
                    style={styles.form} >
                    <Input label="Email" id="email" isRequired />
                    <Input label="Senha" id="password" isRequired secureTextEntry />
                </Form>
                <View style={styles.gap}>
                    <TouchableOpacity
                        style={styles.logButton}
                        onPress={() => handleSubmit(onSubmit)()}
                    >
                        <Text style={styles.text}>Logar!</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate("RegisterScreen")}
                >
                    <Text style={styles.button} >Não Possui Cadastro?</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}