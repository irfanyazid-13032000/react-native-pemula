import { View, Text, FlatList,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import global from '../Utils/global'

export default function Slider() {

  const [slider,setSlider] = useState({})

  useEffect(()=>{
    getSlider()
  },[])


  const getSlider = () => {
   global.getSlider().then(res => {
    // console.log(res);
    setSlider(res.sliders)
   })
  }

  return (
    <View>
      <Text>kamen rider keren</Text>
      <FlatList
      data={slider}
      renderItem={({item,index})=>(
        <View>
          <Image style={{width:360,height:200,borderRadius:8}} source={{uri:item?.image?.url}}/>
        </View>
      )}
      horizontal
      />
    </View>
  )
}