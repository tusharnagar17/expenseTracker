import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import {
  fetchProfileData,
  updateProfileIncome,
  updateProfileName,
} from "@/services/database";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function profile() {
  const profile = useAppSelector((state) => state.profile);
  fetchProfileData();
  console.log(profile);
  const [name, setName] = useState("");
  const [income, setIncome] = useState("");

  const dispatch = useAppDispatch();

  const changeField = () => {
    console.log("tushar");
  };

  return (
    <View style={styles.profileContainer}>
      <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "500" }}>
        Profile
      </Text>

      {/* Update Name */}
      <View style={styles.profileView}>
        <Text style={styles.profileText}>Name:</Text>
        <TextInput
          style={styles.profileTextInput}
          placeholder={name}
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>

      {/* Change salary */}
      <View style={styles.profileView}>
        <Text style={styles.profileText}>Income: </Text>
        <TextInput
          style={styles.profileTextInput}
          placeholder={income}
          value={income}
          onChangeText={(text) => setIncome(text)}
        />
      </View>

      <TouchableOpacity style={styles.profileBtnWrapper} onPress={changeField}>
        <Text style={styles.profileBtn}>Change</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    backgroundColor: "white",
    borderRadius: 30,
    margin: 20,
    padding: 10,
  },
  profileView: {
    paddingLeft: 10,
  },
  profileText: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 25,
    marginLeft: 5,
  },
  profileTextInput: {
    borderWidth: 0.5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 15,
    marginTop: 10,
  },
  profileBtn: {
    padding: 15,
    textAlign: "center",
    borderRadius: 30,
  },
  profileBtnWrapper: {
    backgroundColor: "orange",
    borderRadius: 30,
    marginVertical: 40,
    marginHorizontal: 30,
  },
});
