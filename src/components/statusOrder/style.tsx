import { StyleSheet } from "react-native";
import Colors from "../../styles/colors";

const styles = StyleSheet.create({
    container:{
        alignItems: 'flex-end',
        width:150,
        justifyContent: 'space-between'
    },
    status: {
        alignItems: 'center',
        justifyContent: 'space-around',
        width: 78,
        height: 26,
        backgroundColor: Colors.Blue[1],
        borderRadius: 4
    },
    statusTiTle: {
        color: Colors.Blue[9],
        fontSize: 13
    }
});

export default styles;