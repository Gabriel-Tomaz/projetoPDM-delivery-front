import React, { useEffect, useState } from 'react';
import { StatusBar, View, Text, Platform } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import { DateData } from 'react-native-calendars';
import { Calendar, MarkedDateProps } from '../../components/calendar';
import { addDays, format } from 'date-fns';


import styles from "./style";
import Colors from '../../styles/colors';
import Button from '../../components/button';
import Icon from 'react-native-vector-icons/Feather';


export function CalendarOrder() {
  const [datasMarcadas, setDatasMarcadas] = useState<MarkedDateProps>({} as MarkedDateProps);
  const [dateSelected, setDateSelected] = useState('');

  const navigation = useNavigation();
  const route = useRoute();


  /* function handleConfirmDate() {
     navigation.navigate('OrderHistory', {
       dates: Object.keys(datasMarcadas)
     });
   } */
  
  {/*function handleBack(){
    navigation.goBack();
  }*/}

  function handleChangeDate(date: DateData) {

    const dateTemp = addDays(new Date(date.dateString), 1);
    setDateSelected(format(dateTemp, 'dd/MM/yyyy'))

    let dataMarcada: MarkedDateProps = {};

    dataMarcada[date.dateString] = {
      color: Colors.DeepYellow[6],
      textColor: Colors.Neutral.white
    }
    setDatasMarcadas(dataMarcada)

    console.log(dateSelected);

  }


  return (
    <View style={styles.container}>

      <View style={styles.titleContainer}>
        <Icon name="arrow-left"
          style={{ fontSize: 35, color: Colors.DeepYellow[6] }} />
        <Text style={styles.text}>Meus Pedidos</Text>
      </View>

      <View style={styles.header}>

        {/* <BackButton 
          name='arrow-left'
          color={Colors.DeepYellow[6]} 
          //onPress={handleBack}
        /> */}

        <Text style={styles.title}>
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim do aluguel
        </Text>

        <View style={styles.period}>
          <View style={styles.dataInfo}>
            <Text style={{ color: Colors.Gray[6] }}>DE</Text>
            <Text style={{ color: Colors.Neutral.white }}>
              {dateSelected}
            </Text>
          </View>

          <View style={styles.dataInfo}>
            <Text style={{ color: Colors.Gray[6] }}>ATÉ</Text>
            <Text style={{ color: Colors.Neutral.white }}>
              {dateSelected}
            </Text>
          </View>
        </View>
      </View>

      <View>
        <Calendar
          markedDates={datasMarcadas}
          onDayPress={handleChangeDate}
        />
      </View>

      <View>
        <Button
          title="Confirmar"
          //onPress={handleConfirmDate}
        />
      </View>
    </View>
  );
}