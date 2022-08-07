import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    orderContainer: {
        flex: 1,
        justifyContent:'space-around',
       
    },
    cardsContainer: {
        maxWidth: 380,
        height: 160,
        borderRadius: 4,
        backgroundColor: '#FFFFFF',
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
        color: '#1B1B1B',
        fontSize: 20,
    },
    timestamp: {
        color: '#6A7D8B',
        fontSize: 12
    },
    totalTitle: {
        color: '#6A7D8B',
        fontSize: 13,
        marginTop: 18
    },
    total: {
        color: '#FFA200',
        fontSize: 20
    },
    secondCard:{
        alignItems: 'flex-end',
        width:150,
        justifyContent: 'space-between'
    },
    status: {
        alignItems: 'center',
        justifyContent: 'space-around',
        width: 78,
        height: 26,
        backgroundColor: '#EDF1F8',
        marginTop: 8,
        borderRadius: 4
    },
    statusTiTle: {
        color: '#4F77BE',
        fontSize: 11
    }
});

export default styles;