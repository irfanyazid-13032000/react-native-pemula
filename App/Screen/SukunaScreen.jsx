import { View, Text,Image,TextInput,Button } from 'react-native'
import React from 'react'
import { useState } from 'react';

export default function SukunaScreen() {
  const [nama,setNama] = useState("")


  const perkenalan = (e) => {
    setNama(e)
  }
  return (
    <View style={{ flex: 1, width: '100%' }}>
      <Image style={{height: '75%' }} source={{uri: "https://scontent.cdninstagram.com/v/t51.2885-15/255252664_1312790045859378_3876697699373725792_n.jpg?stp=dst-jpg_e35_s640x640_sh0.08&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=106&_nc_ohc=Zz0n4L8ArCQAX_ZuagK&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfDi_aGlIyV9JxfFGySpmTEuCIousLR6jvKv1ahRVBaAWg&oe=65B6E583&_nc_sid=10d13b"}}/>
      <Text style={{color:"white"}}>Ryoiki Tenkai, Fukuma Mizushi</Text>
      <TextInput aria-label='input' placeholder='NAMA PENANTANG' style={{color:"white"}} onChangeText={(text) => perkenalan(text)}/>
      <Button title="Tantang" onPress={()=>alert("terlalu nantang sukuna kamu " + nama)}></Button>
    </View>
  )
}