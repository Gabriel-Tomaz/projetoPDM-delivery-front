import {View, Text, useWindowDimensions} from "react-native";
import styles from "./style";
import Icon from "react-native-vector-icons/Feather";
import React from "react";

interface Props {
  label?: string;
}

const Title = ({ label }: Props) => {
  const {width} = useWindowDimensions();
  return (
    <View style={[styles.inputContainer, {width: width/2}]}>
        {label ?
            <>
              <Icon name="arrow-left" style={[styles.icon,{fontWeight: 'bold',
              fontSize: 20, marginStart: 0}]}/>
              <Text style={{fontWeight: 'bold',
              fontSize: 20}}>{label}</Text>
            </>
            : null}


    </View>
  );
};

export default Title;
