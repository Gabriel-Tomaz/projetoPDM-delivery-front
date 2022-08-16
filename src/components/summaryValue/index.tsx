import { Text, View} from "react-native";

import styles from "./style";


import Button from '../button'


interface Props {
    subtotal?: number,
    frete?: number,
    total?: number,
    textButton?: string
}

const SummaryValue = ({ textButton =''}: Props) => {
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

            {textButton ?

                <Button 
                    title = {textButton}
                />

                : null}

        </View>


    );
};

export default SummaryValue;
