import { StyleSheet } from "react-native";

import Colors from "../../styles/colors";

const styles = StyleSheet.create({
    inputContainer:{
        
    },
    input: {
        backgroundColor: Colors.Neutral.white,
        paddingHorizontal: 16,
        paddingVertical: 18,
        fontSize: 16,
        color: '#212529',
        borderWidth: 1,
        borderRadius: 6,
        borderColor: Colors.Gray[2]
    },
    InputLable: {
        marginBottom: 8,
        fontWeight: "500",
        color: Colors.Gray[8],
    }
});

export default styles;