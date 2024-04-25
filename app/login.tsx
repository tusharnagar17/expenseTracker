import { Text, View, SafeAreaView, StyleSheet, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Constants from "expo-constants"
import { Redirect, router } from 'expo-router'
import { Router } from 'expo-router'
import auth from "@react-native-firebase/auth"

export default function loginPage() {
    const [email, setEmail] = useState('')
    const [passwd, setPasswd] = useState('')

    const emailChange = (text: string) => {
        setEmail(text)
    }
    const passwdChange = (text: string) => {
        setPasswd(text)
    }
    function RedirectRegister() {
        console.log("Clicked");
        router.push("/register")
    }
    const loginBtnClicked = async () => {
        
        try {
            const response = await auth().signInWithEmailAndPassword(email, passwd)

            if(response.user){
                // console.log(response.user)

                router.push('/')
            }
             
        } catch (error) {
            console.log(error)
        }
       
    }
  return (
    <SafeAreaView style={{marginTop: 60, flex:1, justifyContent: "center",  padding:16 }}>
        <View style={styles.loginContainer}>
            <View><Text style={{fontSize: 40, fontWeight: "500", textAlign: "center"}}>Login</Text></View>

            <View><Text style={{fontSize: 18, fontWeight: "500", paddingVertical: 20}}>Let's get started</Text></View>

            <View>
                <Text style={styles.formText}>Enter email: </Text>
                <TextInput style={styles.formInput} value={email} placeholder="namelastname@gmail.com" onChangeText={emailChange} />
            </View>

            <View>
                <Text style={styles.formText}>Enter Password: </Text>
                <TextInput style={styles.formInput} value={passwd} placeholder="Password" onChangeText={passwdChange}
                    secureTextEntry
                />
            </View>
            <View style={{ alignItems: "flex-end" }}>
                <TouchableOpacity onPress={()=>{router.push("/forgot")}} style={{ width: "40%", marginTop: 15 }}><Text style={{textAlign: "right", color: "orange", fontSize: 16, fontWeight: "400"}}>Forgot Password!</Text></TouchableOpacity>
            </View>

            
                <TouchableHighlight style={styles.formBtnWrapper} 
                    onPress={loginBtnClicked} 
                    underlayColor="transparent">
                    <Text style={styles.formBtn}>Login</Text>
                </TouchableHighlight>
            

            <View style={{flexDirection: "row", justifyContent: "center"}}>
             <Text style={{fontSize: 16}}>New here? Register account !</Text> 
              <TouchableOpacity onPress={RedirectRegister}><Text style={{fontSize: 16, color: "orange", marginHorizontal: 5}} >Sign Up</Text></TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    formBtn: {
        padding: 15,
        textAlign: "center",
        borderRadius: 30,
    },
    formBtnWrapper: {
        backgroundColor: "orange",
        borderRadius: 30,
        marginVertical: 40,
        marginHorizontal: 30
    },
    loginContainer: {
        
        margin: 2
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