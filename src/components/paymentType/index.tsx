import { Text, View, TouchableOpacity, TouchableOpacityProps } from "react-native";
import styles from "./style";

import SummaryValue from "../summaryValue";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Input from "../input";
import Colors from "../../styles/colors";
import { useEffect, useState } from "react";


interface PaymentCardProps extends TouchableOpacityProps {
    tipoPagamento?: number;
    troco?: number;
}

const PaymentCard = ({ tipoPagamento, troco, ...rest }: PaymentCardProps) => {
    const [dinheiro, setDinheiro] = useState(false);
    const [cartao, setCartao] = useState(false);

    useEffect(() => {

        const pagament = () => {
            if (tipoPagamento == 0) {
                setDinheiro(true)
            }
            else {
                setCartao(true)
            }
        }
        pagament();
    }, []);

    return (
        <View>
            <Text style={styles.title}>Tipo de Pagamento</Text>
            <View style={styles.container}>

                <TouchableOpacity
                    style={dinheiro ? styles.card : styles.cardActive}
                    {...rest}
                >

                    <Icon name="attach-money" size={22}
                        style={dinheiro ? { color: Colors.DeepYellow[6] } : { color: Colors.Gray[1] }}
                    />

                    <Text
                        style={dinheiro ? styles.text : styles.textActive}>
                        Dinheiro
                    </Text>
                </TouchableOpacity>


                <TouchableOpacity
                    style={cartao ? styles.card : styles.cardActive}
                    {...rest}>

                    <Icon name="credit-card" size={22}
                        style={cartao ? { color: Colors.DeepYellow[6] } : { color: Colors.Gray[1] }}
                    />

                    <Text
                        style={cartao ? styles.text : styles.textActive}>
                        Cartão
                    </Text>
                </TouchableOpacity>
            </View>

            {/*{dinheiro ? null :*/}
            {/*    <View>*/}
            {/*        <Text style={[styles.title]}>Troco</Text>*/}
            {/*        <View style={styles.troco}>*/}
            {/*            <Text style={styles.text}>R$ {troco}</Text>*/}
            {/*        </View>*/}
            {/*    </View>*/}
            {/*}*/}


        </View>
    );
};

export default PaymentCard;
