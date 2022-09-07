import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import Colors from "../../styles/colors";

const styles = StyleSheet.create({
    cardsDetails: {
        flexDirection: "row",
        justifyContent:"center",
        borderRadius: 4,
        paddingBottom:15,
        paddingTop:15,
        borderBottomWidth: 2 ,
        borderStyle: 'solid',
        borderBottomColor: Colors.Gray[2],
    },
    details: {
        flexDirection: 'row',
        justifyContent:  'flex-start',
        alignItems: 'center',
 
    },
    fistCard: {
        flexDirection: 'row',
        width:270
    },
    text: {
        marginLeft: 10,
        justifyContent: 'center'
    },
    total: {
        color: Colors.DeepYellow[6],
        fontSize: 18
    },
    secondCard: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        width:50
    },
    amountText:{
        color: Colors.DeepYellow[6], 
        borderWidth: 1 ,
        borderStyle: 'solid', 
        borderColor: Colors.Gray[2], 
        borderRadius: 4, 
        padding:4
    }
   
});

export default styles;