import db, { FirebaseDatabaseTypes } from "@react-native-firebase/database";
import auth from "@react-native-firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { setSession } from "@/redux/slice/SessionSlice";
import { addItemProps } from "@/types/interface";
import { useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { setProfile } from "@/redux/slice/ProfileSlice";

// const profilePath = `/users/${curUserUid}/profile`;

// handle snapshot option

export const fetchSessionFirst = async () => {
  // const curUserUid = auth().currentUser?.uid;
  // const sessionPath = `/users/${curUserUid}/sessions`;
  const dispatch = useAppDispatch();

  const handleSnapshot = (snapshot: FirebaseDatabaseTypes.DataSnapshot) => {
    const values: addItemProps[] = Object.values(snapshot.val() || {});
    dispatch(setSession(values));
  };

  useEffect(() => {
    const curUserUid = auth().currentUser!.uid;
    const sessionPath = `/users/${curUserUid}/sessions`;

    console.log(curUserUid);
    if (curUserUid) {
      try {
        db().ref(sessionPath).on("value", handleSnapshot);
      } catch (error) {
        console.log(error);
      }
    }

    return () => db().ref(sessionPath).off("value", handleSnapshot);
  }, []);
};

export const fetchProfileData = async () => {
  const dispatch = useAppDispatch();

  const handleSnapshot = (snapshot: FirebaseDatabaseTypes.DataSnapshot) => {
    dispatch(setProfile(snapshot.val()));
  };

  useEffect(() => {
    const curUserUid = auth().currentUser!.uid;
    const profilePath = `/users/${curUserUid}/profile`;

    // console.log(curUserUid);
    if (curUserUid) {
      try {
        db().ref(profilePath).on("value", handleSnapshot);
      } catch (error) {
        console.log(error);
      }
    }

    return () => db().ref(profilePath).off("value", handleSnapshot);
  }, []);
};

export const addDataService = () => {};

export const updateProfileName = (name: string) => {
  const curUserUid = auth().currentUser?.uid;
  const profilePath = `/users/${curUserUid}/profile`;

  db()
    .ref(profilePath)
    .update({
      name: name,
    })
    .then(() => console.log("name updated"));
};

export const updateProfileIncome = (income: string) => {
  const curUserUid = auth().currentUser?.uid;
  const profilePath = `/users/${curUserUid}/profile`;

  db()
    .ref(profilePath)
    .update({
      income: income,
    })
    .then(() => console.log("income updated"));
};
