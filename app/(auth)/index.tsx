import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Redirect } from "expo-router";
import { addItemProps } from "@/types/interface";
import db, { FirebaseDatabaseTypes } from "@react-native-firebase/database";
import auth from "@react-native-firebase/auth";
import { fetchSessionFirst } from "@/services/database";

export default function index() {
  return <Redirect href="/home" />;
}
