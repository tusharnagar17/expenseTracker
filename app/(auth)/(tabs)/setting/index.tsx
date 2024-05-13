import {
  View,
  Text,
  TouchableOpacity,
  LogBox,
  SafeAreaView,
  TextInput,
} from "react-native";
import React from "react";
// import { useSession } from '@/app/ctx'
import { StyleSheet } from "react-native";
import auth from "@react-native-firebase/auth";
import { Link, router, usePathname } from "expo-router";
import { LogOutService } from "@/services/auth";
import { Image } from "expo-image";
import {
  AntDesign,
  Entypo,
  EvilIcons,
  FontAwesome,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { useState } from "react";

// import FeatherIcon from "react-native-vector-icons";
interface AllOptionsProps {
  name: string;
  icon: React.JSX.Element;
  location: string;
}

const AllOptions: AllOptionsProps[] = [
  {
    name: "Profile",
    icon: <AntDesign name="user" size={35} color="rgb(135, 206, 235)" />,
    location: "profile",
  },
  {
    name: "Account",
    icon: <Entypo name="user" size={35} color="rgba(144,238,144,1)" />,
    location: "account",
  },
  {
    name: "Feedback & Support",
    icon: <FontAwesome name="globe" size={35} color="#FF6347" />,
    location: "feedback",
  },
  {
    name: "about",
    icon: <AntDesign name="question" size={35} />,
    location: "about",
  },
];

export default function setting() {
  // const {signOut } = useSession()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");

  const unknownImage = require("./../../../../asset/images/unknown.jpeg");

  const redirectLocation = (data: string) => {
    router.push(`/setting/${data}`);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginHorizontal: 5,
        marginTop: 60,
        // position: "relative",
      }}
    >
      <View style={{ flex: 1, backgroundColor: "white" }}>
        {/* Profile details */}
        <View
          style={{
            alignItems: "center",
            paddingTop: 50,
            backgroundColor: "white",
          }}
        >
          <TouchableOpacity onPress={() => router.push("/setting/profile")}>
            <View style={{ position: "relative" }}>
              <View
                style={{
                  height: 120,
                  width: 120,
                  borderRadius: 100,
                  borderColor: "#FF6347",
                  borderWidth: 5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {image ? (
                  ""
                ) : (
                  <Image
                    source={unknownImage}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 100,
                    }}
                    alt="unknown user"
                  />
                )}
              </View>

              {/* <FontAwesome name="pencil" size={30} style={styles.imgPencil} /> */}
            </View>

            <Text
              style={{
                fontSize: 20,
                fontWeight: "700",
                marginTop: 20,
                textAlign: "center",
              }}
            >
              {name ? name : "Add Name"}
            </Text>
            <Text
              style={{
                fontSize: 16,
                textAlign: "center",
                fontWeight: "300",
                paddingTop: 5,
              }}
            >
              {email ? email : "Add Email"}{" "}
            </Text>
          </TouchableOpacity>
        </View>

        <View></View>
        {/* Options */}
        {AllOptions.map((item: AllOptionsProps, ind: number) => (
          <View
            key={ind}
            style={{
              borderRadius: 20,
              backgroundColor: "white",
              borderBottomWidth: 0.2,
              paddingVertical: 20,
              paddingHorizontal: 20,
              marginVertical: 10,
              position: "relative",
            }}
          >
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center", gap: 15 }}
              onPress={() => redirectLocation(item.location)}
            >
              {item.icon}
              <Text>{item.name}</Text>

              <SimpleLineIcons
                name="arrow-right"
                size={20}
                style={{ position: "absolute", right: 0 }}
              />
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Logout button */}
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
  ViewTab: {},
  ViewText: {},
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
  imgPencil: {
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderWidth: 1,
    borderColor: "blue",
    position: "absolute",
    borderRadius: 50,
    color: "white",
    backgroundColor: "blue",
    bottom: 0,
    right: 7,
  },
});
