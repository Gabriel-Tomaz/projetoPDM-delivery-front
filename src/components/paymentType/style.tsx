import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 350,
        height: 65,
        marginTop: 10
    },
    card: {
        backgroundColor: 'blue',
        width: 165,
        height: 60,
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    cardActive: {
        backgroundColor: '#FFA200'
    },
    text: {
        color: '#1B1B1B',
        fontSize: 15,
    },
    textActive: {
        color: '#FFFFFF',
    }


});

export default styles;