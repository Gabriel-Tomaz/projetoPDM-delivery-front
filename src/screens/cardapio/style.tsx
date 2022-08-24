import Colors from "../../styles/colors";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    CardContainer: {
        paddingTop: 20,
        alignItems: 'center',
        backgroundColor: Colors.Neutral.white,
    },

    cardProd: {
        alignItems: 'center',
        margin: 10,
        borderRadius: 5,
        borderBottomWidth: 1,
        borderColor:Colors.Gray["4"],
        backgroundColor: Colors.Neutral.white,
        elevation: 5
    },

    text: {
        marginLeft: 10,
        justifyContent: 'center'
    },
    total: {
        color: Colors.DeepYellow[6],
        fontSize: 18,
    },

});

export default styles;