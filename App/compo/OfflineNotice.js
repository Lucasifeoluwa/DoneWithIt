import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../config/Colors";
import AppText from "./AppText";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

import Screen from "./Screen";

function OfflineNotice() {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No internet connection </AppText>
      </View>
    );

  return null;
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
    width: "100%",
    height: 50,
    top: Constants.statusBarHeight,
    position: "absolute",
    zIndex: 1,
  },
  text: {
    color: Colors.white,
  },
});

export default OfflineNotice;
