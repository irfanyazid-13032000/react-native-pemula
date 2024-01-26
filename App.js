import React from 'react';
import { StyleSheet, Text, View,Button,SafeAreaView } from 'react-native';
import SukunaScreen from './App/Screen/SukunaScreen';
import LoginScreen from './App/Screen/LoginScreen';
import { ClerkProvider,SignedIn,SignedOut, useOAuth } from "@clerk/clerk-expo";
import * as SecureStore from "expo-secure-store";
import Navigate from './App/Navigation/Navigate';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  const tokenCache = {
    async getToken(key) {
      try {
        return SecureStore.getItemAsync(key);
      } catch (err) {
        return null;
      }
    },
    async saveToken(key, value) {
      try {
        return SecureStore.setItemAsync(key, value);
      } catch (err) {
        return;
      }
    },
  };



const SignOut = () => {
  const { isLoaded,signOut } = useOAuth();
  if (!isLoaded) {
    return null;
  }
  return (
    <View>
      <Button
        title="Sign Out"
        onPress={() => {
          signOut();
        }}
      />
    </View>
  )
};
 


  return (
    <ClerkProvider publishableKey="pk_test_cHJlc2VudC10dXJ0bGUtMjkuY2xlcmsuYWNjb3VudHMuZGV2JA" tokenCache={tokenCache}>
      <SafeAreaView style={styles.container}>
        <SignedIn>
          {/* <SukunaScreen/> */}
          {/* <SignOut/> */}
          <NavigationContainer>
          <Navigate/>
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <LoginScreen/>
        <Text>You are Signed out</Text>
        </SignedOut>
      </SafeAreaView>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3F3B6C',
  }
});
