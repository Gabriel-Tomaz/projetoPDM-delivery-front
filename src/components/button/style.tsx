import { StyleSheet } from "react-native";
import Colors from "../../styles/colors";

const styles = StyleSheet.create({
    container: {
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 14,
        borderStyle: 'solid',
        borderColor: Colors.DeepYellow[6],
        borderWidth: 1.5,
    },
    titleButton: {
        color: Colors.Neutral.white,
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 24
    }
});

export default styles;