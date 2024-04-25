import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { View, Button, Platform, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { DateTimePickerEvent } from '@react-native-community/datetimepicker';

interface DateProps {
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
}

const AddItemDate = ({date, setDate}: DateProps ) => {
  const [showPicker, setShowPicker] = useState(false);
  
  // console.log(showPicker)
  const formattedDate = date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const togglePicker = () => {
    setShowPicker(prev => !prev)
  }

  const onChange = (event: DateTimePickerEvent, selectedDate: Date) => {
    const {
        type,
        nativeEvent: {timestamp, utcOffset},
      } = event;

    if(type=="set"){
        const currentDate = selectedDate;
        setDate(currentDate);
        togglePicker()
    }else {
        togglePicker()
    }
  }
  // console.log(date)
  return (
   <View>
    <TouchableOpacity onPress={togglePicker}>
    <TextInput style={styles.formInput} placeholder={formattedDate}
    editable={false} />
    </TouchableOpacity>
    {showPicker && <DateTimePicker
        value={date}
        display='spinner'
        onChange={onChange}
        /> }
    

   </View>
  );
};

const styles = StyleSheet.create({
    formInput: {
        borderWidth: 0.5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 15,
    marginTop: 5,
        
      },
})
export default AddItemDate;
