import { StyleSheet } from "react-native";
import Colors from "../../styles/colors";

const styles = StyleSheet.create({
    containerValue: {
        marginTop: 30,
        borderRadius: 4,
        backgroundColor: Colors.Gray[1],

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
        color: Colors.Neutral.black,
        marginTop: 20,
        marginBottom: 10
    },
    titleTotal: {
        marginTop: 10,
        marginBottom: 10,
        color: Colors.DeepYellow[6],
        fontSize: 24,
        fontWeight: 'bold'
    },
    total: {
        fontSize: 16,
        color: Colors.Neutral.black,
        marginTop: 20,
        marginBottom: 10,
        fontWeight: 'bold'
    },
    line: {
        borderBottomWidth: 2,
        borderStyle: 'dotted',
        borderBottomColor: Colors.Gray[4],
        marginTop: -5,
        margin: 20
    },
    button: {
        backgroundColor: Colors.DeepYellow[6],
        height: 60,
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        margin:20
    },
    textButton: {
        color: Colors.Neutral.white,
        fontSize: 16
    }
});

export default styles;