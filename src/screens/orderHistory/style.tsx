import { StyleSheet } from "react-native";
import Colors from "../../styles/colors";

const styles = StyleSheet.create({
    titleContainer:{
        flexDirection:'row',
        alignItems: 'center',
        height: 80, 
        margin:10,
        marginTop:35,
        borderBottomWidth: 2 ,
        borderStyle: 'solid',
        borderBottomColor: 'rgba(27, 27, 27, 0.1)'
    },
    title: {
        marginLeft:60,
        color: '#1B1B1B',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom:10
    }

});

export default styles;