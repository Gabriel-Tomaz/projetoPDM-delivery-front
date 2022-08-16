import { StyleSheet } from "react-native";
import Colors from "../../styles/colors";

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.DeepYellow[6],
        height: 60,
        borderRadius: 4,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        margin:20
    },
    titleButton: {
        color: Colors.Neutral.white,
        fontSize: 16
    }
});

export default styles;