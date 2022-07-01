import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListingScreen from "../components/ListingScreen";
import LIstingDetailsScreen from "../components/LIstingDetailsScreen";

const Stack = createStackNavigator();

const FeedNaviagtor = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen
      name="Listings"
      component={ListingScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ListingDetails"
      component={LIstingDetailsScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default FeedNaviagtor;
