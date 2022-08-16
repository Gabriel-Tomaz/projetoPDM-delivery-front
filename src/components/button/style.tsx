import { StyleSheet } from "react-native";
import Colors from "../../styles/colors";

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.DeepYellow[6],
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 18
    },
    titleButton: {
        color: Colors.Neutral.white,
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 24
    }
});

export default styles;