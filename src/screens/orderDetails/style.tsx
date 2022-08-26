import { StyleSheet } from "react-native";
import Colors from "../../styles/colors";

const styles = StyleSheet.create({
    orderDetails: {
        flex: 1, 
        justifyContent: "center", 
        padding: 18, 
        backgroundColor: '#F8F9FA'
    },
    titleContainer:{
        flexDirection: 'row',
        alignContent:'center',
        height: 80, 
        marginTop:40,
        borderBottomWidth: 2 ,
        borderStyle: 'solid',
        borderBottomColor: 'rgba(27, 27, 27, 0.1)'
    },
    titleOrder: {
        marginLeft:70,
        color: '#1B1B1B',
        fontSize: 25,
        fontWeight:'bold',
    },
    timestamp: {
        marginLeft:70,
        color: '#6A7D8B',
        fontSize: 13,
        marginBottom:5
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
    text: {
        fontSize: 16,
        color: '#1B1B1B',
        marginTop:20,
        marginBottom:5
    }
   
});

export default styles;