import { Text, View, Button } from "react-native";
import styles from "./style";


interface Props {
    subtotal?: number,
    frete?: number,
    total?: number,
    label?: string
}

const SummaryValue = ({ label = 'Continuar'}: Props) => {
    return (
        <View style={styles.containerValue}>
            <View style={styles.value}>
                <Text style={styles.title}>Subtotal</Text>
                <Text style={styles.total}>R$102,00</Text>
            </View>

            <View style={styles.value}>
                <Text style={styles.title}>Frete</Text>
                <Text style={styles.total}>R$12,50</Text>
            </View>

            <View>
                <Text style={styles.line}></Text>
            </View>

            <View style={styles.value}>
                <Text style={styles.title}>Total</Text>
                <Text style={styles.titleTotal}>R$114,50</Text>
            </View>

            {label ?

                <View style={styles.button}>
                    <Text  style={styles.textButton}>{label}</Text>
                </View>

                : null}

        </View>


    );
};

export default SummaryValue;
