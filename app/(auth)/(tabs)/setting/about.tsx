import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function about() {
  return (
    <SafeAreaView style={{ padding: 20 }}>
      <View>
        <Text style={styles.h1}>ExpenseTracker</Text>
      </View>
      {/* Key Features */}
      <View style={{ marginVertical: 10 }}>
        <Text style={styles.h3}>Key Features:</Text>

        <Text style={styles.p}>
          1. Add expense with description or category
        </Text>
        <Text style={styles.p}>2. Calculate total expense per category</Text>
        <Text style={styles.p}>
          3. Define a salary limit and get total balance left
        </Text>
        <Text style={styles.p}>4. Have detail View as per Category</Text>
      </View>
      {/* Contact Us */}
      <View style={{ marginVertical: 10 }}>
        <Text style={styles.h3}>Contact Us:</Text>

        <Text style={styles.p}>
          Have questions, feedback, or suggestions? We'd love to hear from you!
          React out to us at{" "}
          <Link href="/setting/feedback">
            <Text style={{ color: "orange" }}>Support </Text>
          </Link>
        </Text>
      </View>
      {/* Version 1.0 */}
      <View style={styles.container}>
        <Text style={styles.h3}>Version 1.0</Text>

        <Text style={styles.p}>
          Stay up-to-date with the latest features and improvements by keeping
          your app updated.
        </Text>
      </View>
      <Text style={styles.p}>
        Thank you for choosing ExpenseTracker! Happy using😊
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: 20 },
  h1: {
    fontSize: 28,
    fontWeight: "900",
    textAlign: "center",
    marginVertical: 10,
  },
  h3: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    marginVertical: 10,
  },
  p: {
    fontSize: 16,
    fontWeight: "700",
  },
});
