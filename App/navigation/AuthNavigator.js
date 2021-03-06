import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../components/LoginScreen";
import RegisterScreen from "../components/RegisterScreen";
import WelcomeScreen from "../components/WelcomeScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;
