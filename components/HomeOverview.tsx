import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Link, router } from "expo-router";
import auth from "@react-native-firebase/auth";
import db from "@react-native-firebase/database";
import { FontAwesome5 } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { useAppSelector } from "@/redux/hooks";
import { addItemProps } from "@/types/interface";

export default function HomeOverview() {
  const income = "";

  const allData = useAppSelector((state) => state.session.items);

  const expense: number = allData.reduce(
    (acc: number, item: addItemProps) => acc + parseInt(item.amount),
    0
  );

  const balance = parseInt(income) - expense;

  const TotalBalanceSectionClicked = () => {
    router.push("/setting/profile");
  };

  return (
    <LinearGradient
      colors={[
        "rgba(27,163,231,10)",
        "rgba(130,117,247,10)",
        "rgba(230,92,209,10)",
        "rgba(255,129,103,10)",
      ]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{
        borderWidth: 0.5,
        paddingVertical: 30,
        borderRadius: 30,
        margin: 5,
        backgroundColor: "transparent",
      }}
    >
      <TouchableOpacity onPress={TotalBalanceSectionClicked}>
        <View>
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 22,
              fontWeight: "700",
            }}
          >
            Total Balance
          </Text>
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 36,
              fontWeight: "300",
              paddingVertical: 4,
            }}
          >
            {balance ? balance : ""}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {/* INCOME */}
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 30,
            }}
          >
            <View
              style={{
                backgroundColor: "rgba(255,255,255,0.25)",
                borderRadius: 100,
                paddingHorizontal: 10,
                paddingVertical: 7,
                margin: 10,
              }}
            >
              <Text style={{ color: "green", fontWeight: "500" }}>
                <FontAwesome5 name="arrow-down" size={25} />
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 18, color: "white", fontWeight: "700" }}>
                Income
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  color: "rgba(255,255,255,1)",
                  fontWeight: "400",
                }}
              >
                {income ? income : "Add income"}
              </Text>
            </View>
          </View>

          {/* EXPENSE */}
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 30,
            }}
          >
            <View
              style={{
                backgroundColor: "rgba(255,255,255,0.2)",
                borderRadius: 100,
                paddingHorizontal: 10,
                paddingVertical: 7,
                margin: 10,
              }}
            >
              <Text>
                <FontAwesome5
                  name="arrow-up"
                  size={25}
                  style={{ color: "green" }}
                />
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 18, color: "white", fontWeight: "700" }}>
                Expense
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  color: "rgba(255,255,255,1)",
                  fontWeight: "400",
                }}
              >
                {expense ? expense : "0.00"}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  headerIcon: {
    fontWeight: "900",
    color: "green",
    backgroundColor: "white",
  },
});
