import { Text, View, Image } from "react-native";
import styles from "./style";

import localization from '../../../assets/icons/localization.png';
import vector from '../../../assets/icons/vector.png';

interface Props {
    adress?: string;
}

const InputAdressCard = ({ adress}: Props) => {
    return (
        <View style={styles.container}>
            <Image 
                source={localization}
            />

            <View >
                <Text style={styles.adressCard} >{adress}</Text>
            </View>

            <Image
                source={vector}
            />
        </View>
    );
};

export default InputAdressCard;
