import { Text, View, Image } from "react-native";
import styles from "./style";


interface Props {
    status?: string
}

const StatusOrder = ({ status }: Props) => {
    return (
        <View style={styles.status}>
            <Text style={styles.statusTiTle}>{status}</Text>
        </View>

    );
};

export default StatusOrder;
