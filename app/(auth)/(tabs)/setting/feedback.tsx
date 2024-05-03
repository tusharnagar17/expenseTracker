import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import StarRating from "react-native-star-rating-widget";

export default function feedback() {
  const [rating, setRating] = useState(0);
  return (
    <SafeAreaView style={{ padding: 20 }}>
      <View style={{ marginVertical: 40 }}>
        <Text style={{ fontSize: 32, textAlign: "center", fontWeight: "500" }}>
          Give Feedback
        </Text>
      </View>

      {/* TASKS ==> Add start rating */}
      {/* <View>
        <Text style={{ margin: 10, fontWeight: "500", fontSize: 20 }}>
          How do we do?
        </Text>
        <StarRating rating={rating} onChange={setRating} />
      </View> */}

      {/* Feedback text */}
      <View style={{}}>
        <Text style={{ margin: 10, fontWeight: "500", fontSize: 20 }}>
          Tell us something?
        </Text>
        <TextInput
          numberOfLines={10}
          style={{ borderWidth: 1, borderRadius: 20, padding: 5 }}
        />
        <TouchableOpacity
          style={{
            width: "100%",
            marginHorizontal: "auto",
            marginVertical: 20,
            paddingHorizontal: 10,
            paddingVertical: 10,
            backgroundColor: "black",
            alignItems: "center",
            borderRadius: 20,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontWeight: "500",
              margin: "auto",
            }}
          >
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
