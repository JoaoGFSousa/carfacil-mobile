import { createElement, FC, ReactElement, useEffect } from "react";
import { UseFormSetValue, UseFormRegister, FieldErrors } from "react-hook-form";
import { View, ViewStyle } from "react-native";

interface FormProps {
    children: ReactElement | ReactElement[];
    setValue: UseFormSetValue<any>;
    register: UseFormRegister<any>;
    errors: FieldErrors<any>;
    style?: ViewStyle
}

export const Form: FC<FormProps> = ({
    children,
    setValue,
    register,
    errors,
    style,
}) => {

    const inputs = Array.isArray(children) ? [...children] : [children];

    useEffect(() => {
        inputs.forEach(input => {
            //console.log(input.props.id)
            if (input.props.id) {
                register(input.props.id);
            }
        });
    }, [register]);

    return (
        <View style={style}>
            {inputs.map(input => input.props.id ? createElement(input.type, {
                error: errors[input.props.id]?.message,
                onChangeText: (value: string) => setValue(input.props.id, value),
                key: input.props.id,
                ...input.props,
            })
                : input)}
        </View>
    )
};