import React, { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";

import AppButton from "../compo/AppButton";
import Screen from "../compo/Screen";
import Card from "../compo/Card";
import listingsApi from "../api/listings";
import route from "../navigation/route";
import Colors from "../config/Colors";
import AppText from "../compo/AppText";
import Indicator from "../compo/Indicator";
import useApi from "../hooks/useApi";

function ListingScreen({ navigation }) {
  const {
    data: listings,
    error,
    loading,
    request: loadListings,
  } = useApi(listingsApi.getListings);

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>We couldn't retrieve the listings</AppText>
          <AppButton title="Retry" onPress={loadListings} />
        </>
      )}
      <Indicator visible={loading} />

      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate("ListingDetails", item)}
            thumbnailUrl={item.images[0].thumbnailUrl}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: Colors.light,
  },
});

export default ListingScreen;
