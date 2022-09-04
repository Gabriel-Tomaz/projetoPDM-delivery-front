import { StyleSheet} from "react-native";


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
        height: 220,
        alignItems: 'center',
        justifyContent: "center",
    },

    img: {
        justifyContent: "center",
        marginTop: -250,

    },

    escopo: {
        justifyContent: 'center',
    },

    escopoTitle: {
        fontWeight: 'bold', 
        fontSize: 26, 
        textAlign: 'center', 
        marginTop:12
    },

    escopoText:{
        fontSize: 18, 
        textAlign: 'center', 
        margin:15
    },
    
    cardButton: {
       margin:20,
       marginBottom: 2
        
    }

});

export default styles;