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
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: Colors.Gray[2]
    },
    cardActive: {
        width: 170,
        height: 60,
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: Colors.DeepYellow[6],
    },
    text: {
        color: Colors.Neutral.black,
        fontSize: 16,
    },
    textActive: {
        color: Colors.Neutral.white,
    },
    troco:{
        backgroundColor: Colors.Neutral.white,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft:18,
        height: 65,
        marginTop: 10,
        borderRadius: 4,
        borderWidth: 1.5,
        borderColor: Colors.Gray[2]
       
    },
    textTroco: {
        color: '#1B1B1B',
        fontSize: 15
    }
});

export default styles;