import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Constants from "expo-constants"
import { Redirect, router } from 'expo-router'
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth"
import db from "@react-native-firebase/database"
import { useEffect } from 'react'

export default function RegisterPage() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [passwd, setPasswd] = useState('')

    const emailChange = (text: string) => {
        setEmail(text)
    }
    const passwdChange = (text: string) => {
        setPasswd(text)
    }
    function RedirectRegister() {
        // console.log("Clicked");
        router.push("/login")
    }
    const createProfile = async (response: FirebaseAuthTypes.UserCredential) => {
        console.log("reached createProfile")
        db().ref(`/users/${response.user.uid}/`).set({name})
    }
    const RegisterUser = async () => {
       if(email && passwd){
        try {
            const response = await auth().createUserWithEmailAndPassword(email, passwd)
            
            if(response.user){
                await createProfile(response);
                router.push("/login")
                
            }
        } catch (error) {
            console.log(error)
        }
       }
    }

    useEffect(()=>{

    }, [])
  return (
    <SafeAreaView style={{marginTop: 60, flex:1, justifyContent: "center",  padding:16 }}>
        <View style={styles.loginContainer}>
            <View><Text style={{fontSize: 40, fontWeight: "500", textAlign: "center"}}>Register</Text></View>

            <View><Text style={{fontSize: 18, fontWeight: "500", paddingVertical: 20}}>Let start! New Here !!</Text></View>

            <View>
                <Text style={styles.formText}>Name: </Text>
                <TextInput style={styles.formInput} value={name} placeholder="Full Name" onChangeText={(text)=> setName(text)} />
            </View>

            <View>
                <Text style={styles.formText}>Enter email: </Text>
                <TextInput style={styles.formInput} value={email} placeholder="namelastname@gmail.com" onChangeText={emailChange} />
            </View>

            <View>
                <Text style={styles.formText}>Enter Password: </Text>
                <TextInput style={styles.formInput} value={passwd} placeholder="Password" secureTextEntry onChangeText={passwdChange} />
            </View>

            <TouchableHighlight underlayColor="transparent" style={styles.formBtnWrapper} onPress={RegisterUser} >
                <Text style={styles.formBtn}>Sign Up</Text>
            </TouchableHighlight>

            <View style={{flexDirection: "row", justifyContent: "center"}}>
             <Text style={{fontSize: 16}}>Already Registered! No worry. </Text> 
             <TouchableOpacity onPress={RedirectRegister}><Text style={{fontSize: 16, color: "orange", marginHorizontal: 5}} >
                Log in</Text></TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
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