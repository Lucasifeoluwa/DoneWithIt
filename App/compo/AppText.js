import React from "react";
import { Text, Platform, StyleSheet } from "react-native";
import Colors from "../config/Colors";

function AppText({ children, style, ...otherProps }) {
  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {children}{" "}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 18,
        fontFamily: "Roboto",
      },
    }),
    color: Colors.black,
  },
});

export default AppText;
