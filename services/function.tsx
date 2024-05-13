import auth from "@react-native-firebase/auth";
import db from "@react-native-firebase/database";
import storage from "@react-native-firebase/storage";
import { Alert } from "react-native";

export const UploadImageFirebase = async (image: string) => {
  try {
    // console.log("called function with image", image);

    if (!image) {
      Alert.alert(
        "No image selected",
        "Please select an image before uploading."
      );
      return;
    }

    const userId = auth().currentUser?.uid;
    // console.log("function.tsx", userId);

    if (!userId) {
      Alert.alert("User not authenticated", "Please sign in before uploading.");
      return;
    }

    const response = await fetch(image);
    const imageBlob = await response.blob();

    console.log("imageBlog step", imageBlob);
    const storageRef = storage().ref();
    // console.log("storageRef", storageRef);
    const imageRef = storageRef.child(
      `images/${userId}/${new Date().toISOString()}.jpg`
    );

    // console.log("console imageRef", imageRef);
    await imageRef.put(imageBlob, {
      cacheControl: "no-store",
    });
    const downloadURL = await imageRef.getDownloadURL();

    // console.log("downloadURL", downloadURL);
    Alert.alert("Success", "Image uploaded successfully!");
  } catch (error) {
    console.error("Error uploading image:", error);
    Alert.alert("Error", "Failed to upload image.");
  }
};
