import { StyleSheet } from "react-native";
import Colors from "../../styles/colors";

const styles = StyleSheet.create({
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
    text: {
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
        alignItems: 'center',
        //width:105,
        //height:50,
    }, 
    most :{
        backgroundColor: '#FFA200',
        padding:9,
        alignContent:'center',
        borderBottomRightRadius: 4,
        borderTopRightRadius: 4
       
    },
    minus :{
        backgroundColor: Colors.Gray[1],
        padding:9,
        borderBottomLeftRadius: 4,
        borderTopLeftRadius: 4
    },
    textQnt:{
        padding:6,
        color: '#FFA200',
        fontSize:16,
        fontWeight: 'bold',
        borderColor: '#F2F4F5',
        borderWidth:1,
        borderStyle: 'solid',
    }
        
   
});

export default styles;