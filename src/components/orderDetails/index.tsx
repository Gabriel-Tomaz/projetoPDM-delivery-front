import { Text, View, Image } from "react-native";
import styles from "./style";

import monsterBurger from '../../../assets/icons/monster_burger.png';
import Colors from "../../styles/colors";

interface OrderProps {
    img?: string;
    product?: string;
    totalOrder?: number;
    amount?: number;
}

const OrderDetailsCard = ({ product, totalOrder, amount, img }: OrderProps) => {
    
    return (
            <View style={styles.cardsDetails}>
                <View style={styles.details}>
                    <View style={styles.fistCard}>
                        <Image style={{ width: 95, height: 95 }}
                            source={img != '' ? { uri: img } : monsterBurger}
                        />
                        <View style={styles.text}>
                            <Text >{product}</Text>
                            <Text style={styles.total}>R${totalOrder}</Text>
                        </View>
                    </View>

                    <View style={styles.secondCard}>
                        <Text style={{color: Colors.DeepYellow[6]}}>Qnt.</Text>
                        <Text style={styles.amountText}>{amount}</Text>
                    </View>
                </View>
            </View>
    );
};

export default OrderDetailsCard;
