import { StyleSheet } from "react-native";
import Colors from "../../styles/colors";

const styles = StyleSheet.create({
    orderContainer: {
        flex: 1,
        justifyContent:'space-around'
    },
    cardsContainer: {
        maxWidth: 380,
        height: 160,
        borderRadius: 4,
        backgroundColor: Colors.Neutral.white,
        margin:10,
        elevation:10
    },
    cards: {
        flexDirection: 'row',
        margin:8,
        padding: 10,
        width:300
    },
    firstCard: {
        width:150
    },
    title: {
        color: Colors.Neutral.black,
        fontSize: 20,
    },
    timestamp: {
        color: Colors.Gray[5],
        fontSize: 12
    },
    totalTitle: {
        color: Colors.Gray[5],
        fontSize: 13,
        marginTop: 18
    },
    total: {
        color: Colors.DeepYellow[6],
        fontSize: 20
    },
    secondCard:{
        alignItems: 'flex-end',
        width:170,
        justifyContent: 'space-between',
        marginTop:8
    },
    status: {
        alignItems: 'center',
        justifyContent: 'space-around',
        width: 78,
        height: 26,
        backgroundColor: Colors.Blue[1],
        marginTop: 8,
        borderRadius: 4
    },
    statusTiTle: {
        color: Colors.Blue[9],
        fontSize: 13
    }
});

export default styles;