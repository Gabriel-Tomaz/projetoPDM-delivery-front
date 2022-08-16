import { StyleSheet } from "react-native";
import Colors from "../../styles/colors";

const styles = StyleSheet.create({
    cardsDetails: {
        flexDirection: "row",
        borderRadius: 4,
        padding:12,
        marginTop: 10,
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
        width:270
    },
    text: {
        marginLeft: 10,
        justifyContent: 'center'
    },
    total: {
        color: Colors.DeepYellow[6],
        fontSize: 20
    },
    secondCard: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        width:50
    }, 
   
});

export default styles;