import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title:{
        fontSize: 16,
        color: '#1B1B1B',
        marginTop: 20,
        marginBottom:10
    },
    container: {
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 65,
        marginTop: 10
    },
    card: {
        width: 170,
        height: 60,
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    cardActive: {
        backgroundColor: '#FFA200'
    },
    text: {
        color: '#1B1B1B',
        fontSize: 16,
    },
    textActive: {
        color: '#FFFFFF',
    }
});

export default styles;