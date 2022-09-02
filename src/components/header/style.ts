import { StyleSheet } from "react-native";
import Colors from "../../styles/colors";

const styles = StyleSheet.create({
    headerContainer:{
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.Neutral.white,
        paddingHorizontal: 18,
        paddingVertical: 18
    },
    icon: {
        justifyContent: 'flex-start',
    }

});

export default styles;