import { View, Text, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { useLocalSearchParams } from "expo-router";
import auth from "@react-native-firebase/auth";
import db, { FirebaseDatabaseTypes } from "@react-native-firebase/database";
import { addItemProps } from "@/types/interface";
import { StyleSheet } from "react-native";
import { formatDate } from "@/constants/utility/formatDate";
import { useNavigation } from "expo-router";
import { useSelector } from "react-redux";
import { useAppSelector } from "@/redux/hooks";

export default function ExpenseDetail() {
  // const [feed, setFeed] = useState<addItemProps[]>([]);
  const { id } = useLocalSearchParams();

  // Getting feed from redux
  const feed = useAppSelector((state) => state.session.items);

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerTitle: "All Expense" });
  }, [navigation]);

  // RenderFeed function
  const RenderFeed = ({ item }: { item: addItemProps }) => {
    // console.log(new Date(item.date))
    return (
      <View style={styles.ChildView}>
        <View>
          <Text style={{ fontSize: 16 }}>{item.description}</Text>
          {/* <Text style={{ fontSize: 12, fontWeight: "400" }}>
            {item.category}
          </Text> */}
        </View>

        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 16 }}>- {item.amount}</Text>

          <Text style={{ fontSize: 14, color: "rgba(0,0,0,0.5)" }}>
            {formatDate(new Date(item.date))}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.ContainerView}>
      {/* <Text style={{fontWeight: "500", fontSize: 30, textAlign: "center", marginTop: 30}}>{id}</Text> */}
      <FlatList
        data={feed}
        renderItem={RenderFeed}
        keyExtractor={(item: addItemProps) => item.date}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  ContainerView: {
    // borderWidth: 1,
    // borderBottomWidth: 0.5
  },
  ChildView: {
    // borderWidth: 1,
    borderColor: "red",
    marginVertical: 2,
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
