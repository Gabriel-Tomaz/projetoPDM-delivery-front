import {format} from 'date-fns';
import Feather from 'react-native-vector-icons/Feather';
import {
  Calendar as CustomCalendar,
  LocaleConfig,
  DateData,
} from 'react-native-calendars';

import {ptBR} from './localConfig';
import Colors from '../../styles/colors';
LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';



interface MarkedDateProps{
  [key:string]:{
    color?:string;
    textColor?:string;
    disabled?:boolean;
    disableTouchEvent?:boolean; // quando o usuário clicar não acontecer nada. seria datas não disponíveis. já agendadas
  }
}
interface CalendarProps{
  markedDates:MarkedDateProps;
  onDayPress:(date: DateData) => void;
}

function Calendar({markedDates,onDayPress}:CalendarProps){
      
  return (
    <CustomCalendar
      renderArrow={(direction)=>(
        <Feather 
          size={24}
          color={Colors.Gray[7]}
          name={direction === 'left'? 'chevron-left' : 'chevron-right'}
        />
      )}
      headerStyle={{
        backgroundColor: Colors.Neutral.white,
        borderBottomWidth:0.5,
        borderBottomColor: Colors.Gray[5],
        paddingBottom:10,
        marginBottom:10,
      }}
      theme={{
        textDayFontSize:20,
        textDayHeaderFontSize:10,
        monthTextColor: Colors.Gray[7],
        arrowStyle:{
          marginHorizontal:-15,
        }
      }}
      firstDay={0}
      markingType="period"
      markedDates={markedDates}
      onDayPress={onDayPress}

    />
  )
}
export {Calendar,MarkedDateProps}