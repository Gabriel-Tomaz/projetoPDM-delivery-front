import { Text, View, Image } from "react-native";
import styles from "./style";

import money from '../../../assets/icons/money.png';
import creditCard from '../../../assets/icons/creditCard.png';

interface Props {
    active: boolean;
}

const PaymentCard = ({ active = false }: Props) => {
    return (
        <View>
            <View style={styles.container}>
                <View
                    style={[styles.card,
                    active && styles.cardActive
                    ]}>

                    <Image style={active && { tintColor: '#FFFFFF' }}
                        source={money}
                    />

                    <Text
                        style={[styles.text,
                        active && styles.textActive
                        ]}>
                        Dinheiro
                    </Text>
                </View>

                <View
                    style={[styles.card,
                    active && styles.cardActive
                    ]}>

                    <Image style={active && { tintColor: '#FFFFFF' }}
                        source={creditCard}
                    />

                    <Text
                        style={[styles.text,
                        active && styles.textActive
                        ]}>
                        Cartão
                    </Text>
                </View>
            </View>

           
        </View>
    );
};

export default PaymentCard;
