import {
  View,
  Text,
  TouchableOpacity,
  LogBox,
  SafeAreaView,
} from "react-native";
import React from "react";
// import { useSession } from '@/app/ctx'
import { StyleSheet } from "react-native";
import auth from "@react-native-firebase/auth";
import { Link } from "expo-router";
import { LogOutService } from "@/services/auth";

export default function setting() {
  // const {signOut } = useSession()

  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginHorizontal: 5,
        marginTop: 30,
        position: "relative",
      }}
    >
      <View style={styles.ViewTab}>
        <Link href="/setting/profile">
          <Text style={styles.ViewText}>Profile</Text>
        </Link>
      </View>
      {/* <View style={styles.ViewTab}>
        <Link href="/setting/details">
          <Text style={styles.ViewText}>Details</Text>
        </Link>
      </View> */}

      <TouchableOpacity
        onPress={LogOutService}
        style={{ position: "absolute", bottom: 20, right: 40, width: "80%" }}
      >
        <Text style={styles.logOutBtn}>Log out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  ViewTab: {
    borderWidth: 0.5,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginVertical: 10,
    borderRadius: 30,
  },
  ViewText: {
    fontSize: 18,
  },
  logOutBtn: {
    backgroundColor: "orange",
    fontSize: 20,
    fontWeight: "800",
    color: "white",
    padding: 10,
    borderRadius: 20,
    width: "100%",
    textAlign: "center",
    alignItems: "flex-end",
  },
});
