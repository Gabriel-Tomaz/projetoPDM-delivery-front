import { useEffect, useState } from "react";
import { Text, View, Image } from "react-native";
import styles from "./style";

interface Props {
    status?: string
}

const StatusOrder = ({ status }: Props) => {
    
    const [colorText, setColor] = useState('#FFD400');
    const [background, setBackground] = useState('#FFFAE5');

    useEffect(() =>{
        if(status == 'Enviado'){
            setColor('#1976D2');
            setBackground('#BBDEFB');
        }
        else if(status == 'Entregue'){
            setColor('#6AB70A');
            setBackground('#F1F8F6');
        }
        else if(status == 'Cancelado'){
            setColor('#C44D61');
            setBackground('#F1D5DA');
        }
        else{
            setColor('#FFD400');
            setBackground('#FFFAE5');
        }
    },[status]);


    return (       
        <View style={[ styles.container,
            {backgroundColor: background, borderRadius: 4}
        ]}>
            <Text style={[styles.statusTiTle,
                {color: colorText}
            ]}>{status}</Text>
        </View>

    );
};

export default StatusOrder;
