import { LoginProps } from "@/types/interface";
import { router } from "expo-router";
import auth from "@react-native-firebase/auth";
import db from "@react-native-firebase/database";

//  LoginService
export const LoginService = async ({ email, password }: LoginProps) => {
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);
    if (response.user) {
      // console.log(response.user)
      router.push("/");
    }
  } catch (error) {
    console.log(error);
  }
};

export const LogOutService = async () => {
  try {
    await auth()
      .signOut()
      .then(() => console.log("Log Out!"));
  } catch (error) {
    console.log(error);
  }
};
