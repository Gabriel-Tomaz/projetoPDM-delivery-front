import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerValue: {
        marginTop: 30,
        borderRadius: 4
    },
    value: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 30
    },
    title: {
        fontSize: 16,
        color: '#1B1B1B',
        marginTop: 20,
        marginBottom: 10
    },
    titleTotal: {
        marginTop: 10,
        marginBottom: 10,
        color: '#FFA200',
        fontSize: 24,
        fontWeight: 'bold'
    },
    total: {
        fontSize: 16,
        color: '#1B1B1B',
        marginTop: 20,
        marginBottom: 10,
        fontWeight: 'bold'
    },
    line: {
        borderBottomWidth: 2,
        borderStyle: 'dotted',
        borderBottomColor: 'rgba(27, 27, 27, 0.1)',
        marginTop: -5,
        margin: 20
    },
    button: {
        backgroundColor: '#FFA200',
        height: 60,
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        margin:20
    },
    textButton: {
        color: '#FFFFFF',
        fontSize: 16
    }
});

export default styles;