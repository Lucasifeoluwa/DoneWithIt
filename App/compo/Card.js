import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";

import { Image } from "react-native-expo-image-cache";

import Colors from "../config/Colors";
import AppText from "./AppText";

function Card({ title, subTitle, imageUrl, onPress, thumbnailUrl }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.CardContainer}>
        <Image
          style={styles.image}
          tint="light"
          uri={imageUrl}
          preview={{ uri: thumbnailUrl }}
        />
        <View style={styles.txtContainer}>
          <AppText style={styles.tit}>{title}</AppText>
          <AppText style={styles.subTit}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  CardContainer: {
    borderRadius: 15,
    backgroundColor: Colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  txtContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  tit: {
    color: Colors.black,
  },
  subTit: {
    color: Colors.secondary,
    fontWeight: "bold",
  },
});
export default Card;
