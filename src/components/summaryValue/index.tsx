import { Text, View } from "react-native";

import styles from "./style";


import Button from '../button'


interface Props {
    subtotal: number,
    total?: number,
    textButton?: string
}

const SummaryValue = ({ textButton, subtotal, total }: Props) => {
    return (
        <View style={styles.containerValue}>
            <View style={styles.value}>
                <Text style={styles.title}>Subtotal</Text>
                <Text style={styles.total}>R${subtotal}</Text>
            </View>

            <View style={styles.value}>
                <Text style={styles.title}>Frete</Text>
                <Text style={styles.total}>R$6,00</Text>
            </View>

            <View>
                <Text style={styles.line}></Text>
            </View>

            <View style={styles.value}>
                <Text style={styles.title}>Total</Text>
                <Text style={styles.titleTotal}>R${total}</Text>
            </View>

            <View style={{padding:15}}>
                {textButton ?

                    <Button
                        title={textButton}
                    />

                    : null}
            </View>
        </View>
    );
};

export default SummaryValue;
