import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    orderDetails: {
        flex: 1, 
        justifyContent: "center", 
        padding: 18, 
        backgroundColor: '#F8F9FA'
    },
    titleContainer:{
        alignItems: 'center',
        height: 80, 
        marginTop:40,
        borderBottomWidth: 2 ,
        borderStyle: 'solid',
        borderBottomColor: 'rgba(27, 27, 27, 0.1)'
    },
    titleOrder: {
        color: '#1B1B1B',
        fontSize: 20,
    },
    timestamp: {
        color: '#6A7D8B',
        fontSize: 12
    },
    itensContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 2 ,
        borderStyle: 'solid',
        borderBottomColor: 'rgba(27, 27, 27, 0.1)',
        padding:10
    },
    itens: {
        color: '#1B1B1B',
        fontSize: 16,
    },
    status: {
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#EDF1F8',
        padding:5,
        borderRadius: 4
    },
    statusTiTle: {
        color: '#4F77BE',
        fontSize: 13
    },
    text: {
        fontSize: 16,
        color: '#1B1B1B',
        marginTop: 18
    }
   
});

export default styles;