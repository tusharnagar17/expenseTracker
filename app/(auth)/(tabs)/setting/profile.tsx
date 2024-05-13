import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProfileInfoProps } from "@/types/interface";
import * as ImagePicker from "expo-image-picker";
import { UploadImageFirebase } from "@/services/function";
import { Image } from "expo-image";
import { Button } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function profile() {
  const [profileInfo, setProfileInfo] = useState<ProfileInfoProps>({
    name: "",
    email: "",
    phone: "",
    location: "",
  });
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  useEffect(() => {
    if (image != null) {
      try {
        UploadImageFirebase(image);
        setImage(null);
      } catch (error) {
        console.log(error);
      }
    }
  }, [image]);

  const profileChanged = (field: keyof ProfileInfoProps, value: string) => {
    setProfileInfo((prevProfileInfo) => ({
      ...prevProfileInfo,
      [field]: value,
    }));
  };

  const saveClicked = () => {
    setProfileInfo({ name: "", email: "", phone: "", location: "" });
  };

  return (
    <ScrollView
      style={{
        // alignItems: "center",
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: "white",
      }}
    >
      {/* Image section */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 20,
          // borderWidth: 1,
          marginVertical: 20,
        }}
      >
        <View
          style={{
            width: 80,
            height: 80,
            borderRadius: 50,
            borderWidth: 1,
            alignItems: "center",
            zIndex: 10,
          }}
        >
          {image ? (
            <Image
              source={{ uri: image }}
              style={{ height: 80, width: 80, borderRadius: 50 }}
            />
          ) : (
            <AntDesign name="user" size={80} />
          )}
        </View>

        <View style={{ borderWidth: 0.3, padding: 10, borderRadius: 50 }}>
          <TouchableOpacity onPress={pickImage}>
            <Text style={{ fontSize: 12, fontWeight: "700" }}>
              Change Profile Picture
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Full Name */}
      <View style={styles.formTextContainer}>
        <Text style={styles.formText}>Full Name</Text>
        <TextInput
          style={styles.formInput}
          placeholder="John Doe"
          value={profileInfo.name}
          onChangeText={(text) => profileChanged("name", text)}
        />
      </View>

      {/* Email:  */}
      <View style={styles.formTextContainer}>
        <Text style={styles.formText}>Email</Text>
        <TextInput
          style={styles.formInput}
          placeholder="email.com"
          value={profileInfo.email}
          onChangeText={(text) => profileChanged("email", text)}
        />
      </View>

      {/* Phone */}
      <View style={styles.formTextContainer}>
        <Text style={styles.formText}>Phone</Text>
        <TextInput
          style={styles.formInput}
          placeholder="+91 9891555336"
          value={profileInfo.phone}
          onChangeText={(text) => profileChanged("phone", text)}
        />
      </View>

      {/* Location */}
      <View style={styles.formTextContainer}>
        <Text style={styles.formText}>Location</Text>
        <TextInput
          style={styles.formInput}
          placeholder="placeholder"
          value={profileInfo.location}
          onChangeText={(text) => profileChanged("location", text)}
        />
      </View>

      {/* Save button */}
      <View style={styles.saveBtn}>
        <TouchableOpacity onPress={saveClicked}>
          <Text
            style={{ fontSize: 16, fontWeight: "500", textAlign: "center" }}
          >
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  formText: {
    fontSize: 16,
    fontWeight: "500",
  },
  formInput: {
    borderWidth: 0.4,
    borderRadius: 50,
    marginVertical: 4,
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  formTextContainer: {
    marginHorizontal: 5,
    marginVertical: 10,
  },
  saveBtn: {
    marginVertical: 20,
    paddingVertical: 12,
    borderRadius: 50,
    backgroundColor: "rgb(255, 191, 0)",
  },
});
