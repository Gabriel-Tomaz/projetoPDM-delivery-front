import { StyleSheet} from "react-native";
import Colors from "../../styles/colors";

const styles = StyleSheet.create({
    titleContainer:{
        flexDirection:'row',
        alignItems: 'center',
        height: 70, 
        margin:7,
        marginTop:35,
        borderBottomWidth: 2 ,
        borderStyle: 'solid',
        borderBottomColor: 'rgba(27, 27, 27, 0.1)'
    },
    text: {
        marginLeft:60,
        color: '#1B1B1B',
        fontSize: 24,
        fontWeight: 'bold',
    },
    container:{
        flex:1,
        backgroundColor: Colors.Gray[0]
    },
    header: {
       width:400,
       height:290,
       backgroundColor: Colors.DeepYellow[7],
       justifyContent: 'center',
   
    },
    title:{
        fontSize:30,
        color: Colors.Neutral.white,
        margin: 25
    },
    period:{
        width: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 25
    },
    dataInfo:{
        width:200
    },
    dataValue: {
        fontSize: 15,
        color: Colors.Neutral.white
    }

});

export default styles;