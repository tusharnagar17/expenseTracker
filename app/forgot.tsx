import {
  View,
  Text,
  SafeAreaView,
  Alert,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Constants from "expo-constants";
import { Redirect, router } from "expo-router";
import { Router } from "expo-router";
import auth from "@react-native-firebase/auth";

export default function forgot() {
  const [email, setEmail] = useState("");

  const emailChange = (text: string) => {
    setEmail(text);
  };

  function RedirectRegister() {
    router.push("/register");
  }
  const showAlert = () => {
    Alert.alert(
      "Password Reset Email Sent",
      "Please check your email inbox for instructions on resetting your password.",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );
  };
  const ForgotPasswordBtnClicked = async () => {
    try {
      await auth().sendPasswordResetEmail(email);
      showAlert();
      setEmail("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView
      style={{ marginTop: 60, flex: 1, justifyContent: "center", padding: 16 }}
    >
      <View style={styles.loginContainer}>
        <View>
          <Text
            style={{ fontSize: 40, fontWeight: "500", textAlign: "center" }}
          >
            Forgot Password
          </Text>
        </View>

        <View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
              paddingVertical: 20,
              textAlign: "center",
            }}
          >
            Please enter your email address to receive a verification code!
          </Text>
        </View>

        <View>
          <Text style={styles.formText}>Enter email: </Text>
          <TextInput
            style={styles.formInput}
            value={email}
            placeholder="namelastname@gmail.com"
            onChangeText={emailChange}
          />
        </View>

        <TouchableHighlight
          underlayColor="transparent"
          style={styles.formBtnWrapper}
          onPress={ForgotPasswordBtnClicked}
        >
          <Text style={styles.formBtn}>Submit</Text>
        </TouchableHighlight>

        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text style={{ fontSize: 16 }}>New here? Register account !</Text>
          <TouchableOpacity onPress={RedirectRegister}>
            <Text
              style={{ fontSize: 16, color: "orange", marginHorizontal: 5 }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  formBtn: {
    backgroundColor: "orange",
    padding: 15,
    textAlign: "center",
    borderRadius: 30,
  },
  formBtnWrapper: {
    marginVertical: 40,
    marginHorizontal: 30,
  },
  loginContainer: {
    margin: 2,
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
