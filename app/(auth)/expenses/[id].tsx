import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import auth from "@react-native-firebase/auth";
import db, { FirebaseDatabaseTypes } from "@react-native-firebase/database";
import { addItemProps } from "@/types/interface";
import { StyleSheet } from "react-native";
import { formatDate } from "@/constants/utility/formatDate";
import { useAppSelector } from "@/redux/hooks";

export default function ExpenseDetail() {
  const feed = useAppSelector((state) => state.session.items);
  const { id } = useLocalSearchParams();

  const filterFeed = feed.filter((item: addItemProps) =>
    item.category.includes(id)
  );

  const RenderFeed = ({ item }: { item: addItemProps }) => {
    return (
      <View style={styles.ChildView}>
        <View>
          <Text style={{ fontSize: 16 }}>{item.description}</Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 16 }}>- {item.amount}</Text>
          <Text style={{ fontSize: 16 }}>
            {formatDate(parseInt(item.date))}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.ContainerView}>
      <Text
        style={{
          fontWeight: "500",
          fontSize: 30,
          textAlign: "center",
          marginTop: 30,
        }}
      >
        {id}
      </Text>
      <FlatList
        data={filterFeed}
        renderItem={RenderFeed}
        keyExtractor={(item: addItemProps) => item.date}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  ContainerView: {
    // borderWidth: 1,
  },
  ChildView: {
    // borderWidth: 1,
    borderColor: "red",
    margin: 2,
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20,
  },
});
