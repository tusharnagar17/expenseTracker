import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SectionList,
} from "react-native";
import React from "react";
import { Link, Redirect, router } from "expo-router";
import { useAppSelector } from "@/redux/hooks";
import { addItemProps } from "@/types/interface";
import { formatDate } from "@/constants/utility/formatDate";
import { FontAwesome } from "@expo/vector-icons";

interface CategoryData {
  name: string;
  latestDate: number;
  total: number;
}

const HomeTransaction = () => {
  const data = useAppSelector((state) => state.session.items);

  // console.log("data console", data);
  // TASKS
  // 1. save 6 temp data to server
  // 2. get the server data
  // 3. filter the server data here top 3
  // Define a function to group the data by category and sum the amounts
  const findTotalAndLatestDateByCategory = (
    data: addItemProps[]
  ): { [category: string]: { total: number; latestDate: number } } => {
    return data.reduce((accumulator, currentValue) => {
      const { category, amount, date } = currentValue;
      if (!accumulator[category]) {
        accumulator[category] = {
          total: parseInt(amount),
          latestDate: parseInt(date),
        };
      } else {
        accumulator[category].total += parseFloat(amount);
        if (parseInt(date) > accumulator[category].latestDate) {
          accumulator[category].latestDate = parseInt(date);
        }
      }
      return accumulator;
    }, {} as { [category: string]: { total: number; latestDate: number } });
  };

  const filterData = findTotalAndLatestDateByCategory(data);

  const mappedData: CategoryData[] = Object.entries(filterData).map(
    ([name, { latestDate, total }]) => ({
      name,
      latestDate,
      total,
    })
  );

  // sorting data
  mappedData.sort((a, z) => z.total - a.total);
  // 4. represent data with icon.

  // function to extract or show data

  const RenderTransaction = ({
    detail,
    index,
  }: {
    detail: CategoryData;
    index: number;
  }) => {
    // console.log("detail here", detail);
    // console.log("key print", index);
    const redirectExpenses = (data: string) => {
      router.push(`/expenses/${data}`);
    };
    return (
      <TouchableOpacity onPress={() => redirectExpenses(detail.name)}>
        <View
          style={{
            borderWidth: 1,
            flex: 1,
            flexDirection: "row",
            padding: 25,
            marginVertical: 10,
            borderRadius: 20,
            justifyContent: "space-between",
          }}
          key={index}
        >
          {/* Icons and category */}
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {/* <View><Text>{detail.icon}</Text></View> */}
            <View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "400",
                }}
              >
                {detail.name}
              </Text>
            </View>
          </View>

          {/* Cost and day */}
          <View>
            <View>
              <Text
                style={{ textAlign: "center", fontWeight: "500", fontSize: 18 }}
              >
                -{detail.total}
              </Text>
            </View>
            <View>
              <Text>{formatDate(detail.latestDate)}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
          padding: 5,
        }}
      >
        <Text style={{ fontWeight: "500", fontSize: 20 }}>Transactions</Text>
        <TouchableOpacity
          onPress={() => {
            router.push("/expenses/all");
          }}
        >
          <Text style={{ fontWeight: "500", fontSize: 18 }}>View All </Text>
        </TouchableOpacity>
      </View>

      {!(mappedData.length === 0) ? (
        mappedData.map((item: CategoryData, ind: number) => (
          // console.log(ind)
          <RenderTransaction detail={item} index={ind} />
        ))
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 100,
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: "500" }}>No Data</Text>
          <Text style={{ fontSize: 20, marginTop: 30 }}>
            Sroll down to refresh{" "}
            <FontAwesome
              style={{ fontWeight: "100" }}
              name="refresh"
              size={18}
            />
          </Text>
        </View>
      )}
    </View>
  );
};

export default HomeTransaction;
