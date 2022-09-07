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
        flexDirection:'row',
        alignItems: 'center',
        height: 80, 
        marginTop:25,
        borderBottomWidth: 2 ,
        borderStyle: 'solid',
        borderBottomColor: 'rgba(27, 27, 27, 0.1)'
    },
    title: {
        marginLeft:100,
        color: '#1B1B1B',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom:10
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
    text: {
        fontSize: 16,
        color: '#1B1B1B',
        marginTop: 18
    },
    cardsDetails: {
        flexDirection: "row",
        borderRadius: 4,
        paddingBottom:15,
        paddingTop:15,
        maxWidth:355,
        borderBottomWidth: 2 ,
        borderStyle: 'solid',
        borderBottomColor: Colors.Gray[2]
    },
    details: {
        flexDirection: 'row',
        justifyContent:  'flex-start',
        alignItems: 'center',
        height:100,
        width:325,
    },
    fistCard: {
        flexDirection: 'row',
        width:250
    },
    texto: {
        marginLeft: 10,
        justifyContent: 'center'
    },
    total: {
        color: Colors.DeepYellow[6],
        fontSize: 18
    },
    secondCard: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }, 
    btnEdit:{
        color: Colors.Neutral.white, 
        backgroundColor: Colors.DeepYellow[6], 
        padding: 4, 
        borderRadius: 4
    }
   
});

export default styles;