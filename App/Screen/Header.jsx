import { View, Text,StyleSheet,Image, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

export default function Header() {
  const {user,isLoading} = useUser()

  const [fontsLoaded,fontError] = useFonts({
    'honk':require('../../assets/font/Honk-Regular-VariableFont_MORF,SHLN.ttf'),
    'olaf':require('../../assets/font/Sixtyfour-Regular.ttf')
  })

  console.log(fontsLoaded);


  return user && (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={{uri:user?.imageUrl}}
        style={styles.userImage}
        />
        <View>
          <Text style={{fontFamily:'olaf'}} >Welcome</Text>
          <Text>{user?.fullName}</Text>
        </View>
        <FontAwesome6 name="star-and-crescent" size={24} color="black" />
      </View>
      <View style={styles.searchBarContainer}>
        <TextInput placeholder='search' style={styles.textInput}/>
        <FontAwesome5 name="search" size={24} color="black" style={styles.searchBtn}/>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  userImage:{
    width:45,
    height:45,
    borderRadius:99
  },
  container:{
    padding:20,
    paddingTop:40,
    backgroundColor:"aquamarine",
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15
  },
  profileContainer:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    gap:10
  },
  searchBarContainer:{
    marginTop:20,
    display:'flex',
    flexDirection:'row',
    gap:10,
    marginBottom:10,
  },
  textInput:{
    padding:7,
    paddingHorizontal:16,
    backgroundColor:'white',
    borderRadius:8,
    width:'85%',
    fontSize:16
  },
  searchBtn:{
    padding:10,
    borderRadius:8,
    backgroundColor:'white',
  }
})