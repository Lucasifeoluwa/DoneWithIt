import React from "react";
import { View, Image, StyleSheet } from "react-native";
import ListItems from "../compo/ListItems";

import AppText from "../compo/AppText";
import Colors from "../config/Colors";

function LIstingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: listing.images[0].url }} />
      <View style={styles.textContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>{listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItems
            image={require("../assets/mosh.jpg")}
            title="Mosh Hamadani"
            subTitle="5 Listings"
            onPress={() => console.log(listing.images[0].url)}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 15,
  },
  image: {
    width: "100%",
    height: 300,
  },
  textContainer: {},
  title: {
    fontSize: 24,
    fontWeight: "500",
    color: Colors.black,
  },
  price: {
    color: Colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginTop: 20,
  },
});
export default LIstingDetailsScreen;
