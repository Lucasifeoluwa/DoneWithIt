import React, { useEffect, useState, useCallback } from "react";
import { Button, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import jwtDecode from "jwt-decode";
import * as SplashScreen from "expo-splash-screen";

import AppNavigator from "./App/navigation/AppNavigator";
import OfflineNotice from "./App/compo/OfflineNotice";
import AuthNavigator from "./App/navigation/AuthNavigator";
import AuthContext from "./App/auth/Context";
import authStorage from "./App/auth/Storage";

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        await restoreUser();
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setIsReady(true);
      }
    }

    prepare();
  }, []);

  /*  useEffect(() => {
    restoreToken();
  }, []); */

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      {
        <NavigationContainer>
          <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
            {user ? <AppNavigator /> : <AuthNavigator />}
          </View>
        </NavigationContainer>
      }
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({});
