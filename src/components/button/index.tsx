import { Text, TouchableOpacity, TouchableOpacityProps} from "react-native";
import styles from "./style";

import Colors from '../../styles/colors'

interface ButtonProps extends TouchableOpacityProps {
    title: string
}



const Button = ({ title, ...rest } : ButtonProps) => {
    return (
        <TouchableOpacity 
            style={styles.container}
            {...rest}>
            <Text style={styles.titleButton}>
                {title}
            </Text>
        </TouchableOpacity>


    );
};

export default Button;
