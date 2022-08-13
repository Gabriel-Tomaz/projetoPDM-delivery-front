import { Text, View, Image } from "react-native";
import styles from "./style";

import backImg from '../../../assets/icons/back.png';

interface Props {
    num_order?: string;
    timestamp?: string;
    status?: string;
    totalOrder?: string;
}

const OrderHistoryCard = ({ num_order, timestamp, status, totalOrder }: Props) => {
    return (

        <View style={styles.orderContainer}>

            <View style={styles.cardsContainer}>

                <View style={styles.cards}>
                    <View style={styles.firstCard}>
                        <View>
                            <Text style={styles.title}>Pedido #{num_order}</Text>
                            <Text style={styles.timestamp}>{timestamp}</Text>
                        </View>

                        <View>
                            <Text style={styles.totalTitle}>Total</Text>
                            <Text style={styles.total}>{totalOrder}</Text>
                        </View>
                    </View>

                    <View style={styles.secondCard}>
                        <View style={styles.status}>
                            <Text style={styles.statusTiTle}>{status}</Text>
                        </View>
                        <Image
                            source={backImg}
                          
                        />
                    </View>

                </View>

            </View>
        </View>
    );
};

export default OrderHistoryCard;
