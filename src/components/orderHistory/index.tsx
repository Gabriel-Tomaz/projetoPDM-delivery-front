import { Text, View } from "react-native";
import styles from "./style";

import Icon from "react-native-vector-icons/Feather";
import StatusOrder from "../statusOrder";

import { useNavigation } from '@react-navigation/native';

interface Props {
    num_order: number;
    date: string;
    status?: string;
    totalOrder?: number;
}

const OrderHistoryCard = ({num_order, status, totalOrder}: Props) => {

    const navigation = useNavigation();
    const openDetails = () => {
        navigation.navigate('OrderDetails',{
            num_pedido: num_order 
        })
    }

    return (

        <View style={styles.orderContainer}>

            <View style={styles.cardsContainer}>

                <View style={styles.cards}>
                    <View style={styles.firstCard}>
                        <View>
                            <Text style={styles.title}>Pedido #{num_order}</Text>
                           
                        </View>

                        <View>
                            <Text style={styles.totalTitle}>Total</Text>
                            <Text style={styles.total}>R${totalOrder}</Text>
                        </View>
                    </View>

                    <View style={styles.secondCard}>

                        <StatusOrder
                            status={status}
                        />
                        <Icon name="arrow-right" size={38}
                            style={
                                { color: '#FFA200' }}
                            onPress={openDetails}
                        />
                    </View>

                </View>

            </View>
        </View>
    );
};

export default OrderHistoryCard;
