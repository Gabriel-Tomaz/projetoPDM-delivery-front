import { Text, View} from "react-native";
import styles from "./style";

import SummaryValue from "../summaryValue";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Input from "../input";


interface Props {
    active?: boolean;
}

const PaymentCard = ({ active = true }: Props) => {
    return (
        <View>
            <Text style={styles.title}>Tipo de Pagamento</Text>
            <View style={styles.container}>

                <View
                    style={[styles.card,
                    active && styles.cardActive
                    ]}>

                    <Icon name="attach-money" size={22}
                        style={[
                            { color: '#FFA200' },
                            active && { color: '#FFFFFF' }
                        ]}
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

                    <Icon name="credit-card" size={22}
                        style={[
                            { color: '#FFA200' },
                            active && { color: '#FFFFFF' }
                        ]}
                    />

                    <Text
                        style={[styles.text,
                        active && styles.textActive
                        ]}>
                        Cartão
                    </Text>
                </View>
            </View>

            <Text style={styles.title}>Troco</Text>
            <View>
                <Input
                    placeholder="Precisa de troco?"
                />
            </View>

            <Text style={styles.title}>Cupom</Text>
            <View>
                <Input
                    placeholder="Digite o cupom"
                />
            </View>

            <SummaryValue />

        </View>
    );
};

export default PaymentCard;
