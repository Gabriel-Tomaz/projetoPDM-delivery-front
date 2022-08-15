import { StyleSheet } from "react-native";
import Colors from "../../styles/colors";


const styles = StyleSheet.create({
    title:{
        fontSize: 16,
        color: Colors.Neutral.black,
        marginTop: 20,
        marginBottom:10
    },
    container: {
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 65,
        marginTop: 10
    },
    card: {
        width: 170,
        height: 60,
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    cardActive: {
        backgroundColor: Colors.DeepYellow[6],
    },
    text: {
        color: Colors.Neutral.black,
        fontSize: 16,
    },
    textActive: {
        color: Colors.Neutral.white,
    }
});

export default styles;