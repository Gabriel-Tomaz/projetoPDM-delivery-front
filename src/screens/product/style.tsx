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
        height: 300,
        alignItems: 'center',
        justifyContent: "center",
    },

    img: {
        justifyContent: "center",
        marginTop: -450,

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
        flexDirection: 'row',
        alignItems: 'center',
        color: '#666'
    },

    text: {
        color: '#1B1B1B',
        fontSize: 15,
    },

    cor: {
        color: '#FFA200',
        backgroundColor: '#FFA200'
    }


});

export default styles;