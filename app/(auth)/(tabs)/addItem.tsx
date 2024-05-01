import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import React from "react";
import { Picker } from "@react-native-picker/picker";
import { useState, useRef } from "react";
import AddItemDate from "@/components/AddItemDate";
import { useNavigationBuilder } from "@react-navigation/native";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import db from "@react-native-firebase/database";
import { addItemProps } from "@/types/interface";

interface categoryProps {
  label: string;
}

const expenseCategories = [
  { label: "Food" },
  { label: "Transportation" },
  { label: "Housing" },
  { label: "Utilities" },
  { label: "Entertainment" },
  { label: "Healthcare" },
  { label: "Shopping" },
  { label: "Travel" },
  { label: "Personal Care" },
  { label: "Education" },
  { label: "Saving" },
  { label: "Debts/Loans" },
  { label: "Insurance" },
  { label: "Taxes" },
];

export default function addItem() {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Food");
  const [date, setDate] = useState<Date>(new Date());

  const showAlert = () => {
    Alert.alert(
      "ALERT!",
      "Please enter all fields!",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );
  };

  const saveExpense = async (currentUser: FirebaseAuthTypes.User) => {
    const sessionId = Date.now();
    if (amount && description && category && date) {
      await db().ref(`/users/${currentUser.uid}/sessions/${sessionId}`).set({
        amount,
        description,
        category,
        date: date.getTime(),
      });

      setAmount("");
      setDescription("");
      setCategory("Food");
      setDate(new Date());
    } else {
      showAlert();
    }
  };

  const submitBtnPressed = async () => {
    const currentUser = await auth().currentUser!;

    if (currentUser) {
      await saveExpense(currentUser);
    }
  };
  return (
    <ScrollView style={{ margin: 10, padding: 20 }}>
      <View>
        <Text style={{ fontSize: 16 }}>
          Enter the details of your expense to help you track your spending
        </Text>
      </View>
      <View style={{ marginTop: 20 }}>
        {/* Amount */}
        <Text style={styles.formText}>Enter Amount</Text>
        <TextInput
          style={styles.formInput}
          value={amount}
          onChangeText={(text: string) => setAmount(text)}
        />

        {/* Description */}
        <Text style={styles.formText}>Description</Text>
        <TextInput
          style={styles.formInput}
          placeholder="Description"
          value={description}
          onChangeText={(text: string) => setDescription(text)}
        />

        {/* Category */}
        <Text style={styles.formText}>Category</Text>
        <Picker
          style={styles.formInput}
          selectedValue={category}
          onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
        >
          {expenseCategories.map((item: categoryProps, idx: number) => (
            <Picker.Item label={item.label} value={item.label} key={idx} />
          ))}
        </Picker>

        {/* Add Date */}
        <Text style={styles.formText}>Date</Text>
        <AddItemDate date={date} setDate={setDate} />

        {/* SubmitButton */}
        <TouchableOpacity style={styles.submitBtn} onPress={submitBtnPressed}>
          <Text style={styles.submitBtnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  submitBtn: {
    marginTop: 30,
  },
  submitBtnText: {
    textAlign: "center",
    borderWidth: 1,
    fontWeight: "500",
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 10,
    backgroundColor: "#000",
    fontSize: 18,
    color: "#fff",
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
  },
});
