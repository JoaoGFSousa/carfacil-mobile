import { View, Text, Button, TouchableOpacity } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Form } from "@/src/components/Form";
import { Input } from "@/src/components/Input/input";
import { useForm } from "react-hook-form";
import { registerSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/src/contexts/AuthContext";


export const RegisterScreen = ({ navigation }: NativeStackScreenProps<any>) => {
    const { register, setValue, formState: { errors }, handleSubmit } = useForm({
        mode: "all",
        resolver: zodResolver(registerSchema)
    });
    const { signUp } = useAuth();
    const onSubmit = (data: any) => {
        signUp(data);
    }
    return (
        <LinearGradient
            style={styles.container}
            colors={["rgba(98,113,150,1)", "rgba(137,145,165,1)"]} >
            <View style={styles.containerAll} >
                <View>
                    <Text style={styles.textHead} >
                        Faça Seu Cadastro!
                    </Text>
                </View>
                <Form errors={errors} register={register} setValue={setValue}
                    style={styles.form}>
                    <Input label="Nome" id="name" isRequired />
                    <Input label="E-mail" id="email" isRequired />
                    <Input label="Senha" id="password" isRequired secureTextEntry />
                    <Input label="Confirme sua senha"
                        id="password_confirmation"
                        secureTextEntry
                        isRequired />
                </Form>
                <View style={styles.containerButton}>
                    <TouchableOpacity
                        style={styles.regButton}
                        onPress={() => {
                            handleSubmit(onSubmit)()
                        }}
                    >
                        <Text style={styles.textCad}>Cadastrar!</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={styles.divider}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("LoginScreen")}
                        >
                            <Text style={styles.text}>Já possui uma conta?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("LoginScreen")}>
                            <Text style={styles.text} >Já Possui Cadastro?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </LinearGradient >
    )
}