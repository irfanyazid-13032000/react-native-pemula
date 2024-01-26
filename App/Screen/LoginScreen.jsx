import { View,Text,Image, StyleSheet,TouchableOpacity } from "react-native";
import * as WebBrowser from "expo-web-browser"
import { useOAuth } from "@clerk/clerk-expo";
import { WarmUpBrowser } from "../hooks/WarmUpBrowser";
import React from "react";
WebBrowser.maybeCompleteAuthSession()

export default function LoginScreen(){

  WarmUpBrowser();
 
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
 
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  
  return (
    <View>
      <Image styles={styles.loginImage} source={require('../../assets/images/homepage.png')}/>

      <View style={styles.subContainer}>
        <Text style={{fontSize:27, color: "white", textAlign: "center"}}>Let's Find
            <Text style={{fontWeight: 'bold'}}>Professional Cleaning</Text>Service
        </Text>

        <Text style={{fontSize:10, color: "white", textAlign: "center", marginTop: 20}}>
            The Best App To Find Services Near You
        </Text>

        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={{textAlign:"center", fontSize: 17, color: "blue"}}>
                Let's Get Started
            </Text>
        </TouchableOpacity>
      </View>


    </View>
  )
}

const styles = StyleSheet.create({
 oginImage: {
        width: 230,
        height: 450,
        marginTop: 70,
        borderWidth: 4,
        borderColor: "black"
    },
    subContainer: {
        minWidth: '100%',
        height: '70%',
        backgroundColor: "blue",
        marginTop: -20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20
    },
    button: {
        padding: 15,
        backgroundColor: "white",
        borderRadius: 99,
        marginTop: 40
    }
})