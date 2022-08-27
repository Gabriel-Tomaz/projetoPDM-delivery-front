import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import styles from "./style";

import Colors from '../../styles/colors'

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    backgroud?: string;
    colorText?: string;
}

const Button = ({ title, backgroud,colorText, ...rest }: ButtonProps) => {
    return (
        <TouchableOpacity
            style={[styles.container,
            { backgroundColor: backgroud ? backgroud : Colors.DeepYellow[6] }]}
            {...rest}>
            <Text style={[styles.titleButton,
            { color: colorText ? colorText : Colors.Neutral.white }]}>
                {title}
            </Text>
        </TouchableOpacity>


    );
};

export default Button;
