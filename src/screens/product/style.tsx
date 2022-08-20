import { StyleSheet} from "react-native";
import Colors from "../../styles/colors";

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        borderBottomWidth: 2 ,
        borderStyle: 'solid',
        borderBottomColor: 'rgba(27, 27, 27, 0.1)',
        backgroundColor: '#FB9400',
    },

    containerHeader: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-around",
        marginTop:80,
    },

    card: {
        height: 300,
        alignItems: 'center',
        justifyContent: "center",
    },

    img: {
        justifyContent: "center",
        marginTop: -250,

    },

    escopo: {
        alignItems: "flex-start",
        justifyContent: "space-around",
    },

    line: {
        borderBottomWidth: 2 ,
        borderStyle: 'solid',
        borderBottomColor: '#FFA200',
        marginTop: -5,
        margin:20,
    },

    description: {
        textAlign: "justify",
        margin:20,
    },

    cardButton: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "center",
        // marginLeft:5,
        // marginRight:5,
    },

    countButton: {
        justifyContent: "flex-start",
        alignItems: 'flex-start',
        height: 50,
    },

    cor: {
        color: '#FFA200',
        backgroundColor: '#FFA200'
    },
    secondCard: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        // width:105,
        height:50,
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