import { View, Text, SafeAreaView, TextInput, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { Picker } from '@react-native-picker/picker'
import { useState } from 'react'
import AddItemDate from '@/components/AddItemDate'

const category = [{
  label: "Food", value: "food"
},
  {label: "Rent", value: "rent"}
]

export default function addItem() {
  const [selectedLanguage, setSelectedLanguage] = useState('')
  
  const submitBtnPressed = () => {
    console.log("Pressed!")
  }
  return (
  <SafeAreaView style={{margin: 10, padding: 20}}>
    <View><Text style={{fontSize: 16}}>Enter the details of your expense to help you track your spending</Text></View>
    <View style={{marginTop: 20}}>
      {/* Amount */}
      <Text style={styles.formText}>Enter Amount</Text>
      <TextInput style={styles.formInput} />
      
      {/* Description */}
      <Text style={styles.formText}>Description</Text>
      <TextInput style={styles.formInput} />
      
      {/* Category */}
      <Text style={styles.formText}>Category</Text>
      <Picker style={styles.formInput}
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
        setSelectedLanguage(itemValue)
        }>
          {category.map((item)=> (
            <Picker.Item label={item.label} value={item.value} />
          ))}

      </Picker>
      
      {/* Add Date */}
      <Text style={styles.formText}>Date</Text>
      <AddItemDate />
      
      {/* SubmitButton */}
      <TouchableOpacity style={styles.submitBtn} onPress={submitBtnPressed}>
        <Text style={styles.submitBtnText}>Submit</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>    
  )
}

const styles = StyleSheet.create({
  submitBtn: {
    
    marginTop: 30
  },
  submitBtnText: {
    textAlign: "center",
    borderWidth: 1,
    fontWeight: "500",
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 10,
    backgroundColor: 	"#000",
    fontSize: 18,
    color: "#fff"
  },
  formText: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 25,
    marginLeft: 5,
    
  },
  formInput: {
    borderWidth: 0.5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 15,
    marginTop: 5,
  }
})