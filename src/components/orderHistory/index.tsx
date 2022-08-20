import { Text, View, Image } from "react-native";
import styles from "./style";

import  Icon  from "react-native-vector-icons/Feather";
import StatusOrder from "../statusOrder";

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
                        
                        <StatusOrder 
                            status={status}
                        />
                        <Icon name="arrow-right" size={38}
                             style={
                                { color: '#FFA200' }}
                        ></Icon>
                    </View>

                </View>

            </View>
        </View>
    );
};

export default OrderHistoryCard;
