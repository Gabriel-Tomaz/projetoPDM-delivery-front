import { StyleSheet } from "react-native";
import Colors from "../../styles/colors";

const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.Gray[1],
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 65,
        marginTop: 10,
        borderRadius: 4
    },
    adressCard: {
        color: '#1B1B1B',
        fontSize: 15
    }
});

export default styles;