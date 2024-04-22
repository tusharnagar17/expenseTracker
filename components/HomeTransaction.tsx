import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface TransactionDataTypes {
    icon: string,
    name: string,
    cost: string,
    date: string
}

const data: TransactionDataTypes[] = [
    {icon: "text", name: "tempName", cost: "tempCost", date: "Today"},
    {icon: "text", name: "tempName", cost: "tempCost", date: "Yesterday"},
    {icon: "text", name: "tempName", cost: "tempCost", date: "Yesterday"},
    {icon: "text", name: "tempName", cost: "tempCost", date: "Yesterday"},
    {icon: "text", name: "tempName", cost: "tempCost", date: "Yesterday"},
    {icon: "text", name: "tempName", cost: "tempCost", date: "Yesterday"}
]

const TransactionDetails = ({detail}: TransactionDataTypes ) => {
    console.log(detail)
    return (
        <View style={{borderWidth: 1, flex: 1, flexDirection: "row", 
           padding: 20,
           marginVertical: 10,
           borderRadius: 20,
         justifyContent: "space-between"}}>
            {/* Icons and category */}
            <View style={{flex: 1, flexDirection: "row", alignItems: "center"
            }}>
                <View><Text>{detail.icon}</Text></View>
                <View><Text>{detail.name}</Text></View>
            </View>

            {/* Cost and day */}
            <View>
                <View><Text>{detail.cost}</Text></View>
                <View><Text>{detail.date}</Text></View>
            </View>
        </View>
    )
}

const HomeTransaction = () => {
  return (
    <View>
      <View style={{flex:1, flexDirection: "row", justifyContent: "space-between"}}>
        <Text>Transactions</Text>
        <TouchableOpacity><Text>View All</Text></TouchableOpacity>
      </View>
      <View>
          {data.map((itr: TransactionDataTypes, ind: number )=> (
            <TransactionDetails detail={itr} />
          ))}  
      </View>
    </View>
  )
}

export default HomeTransaction