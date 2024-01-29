import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SukunaScreen from '../Screen/SukunaScreen';

import AoyamaYugaScreen from '../Screen/AoyamaYugaScreen';
import { Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import Slider from '../Component/Slider';

const Tab = createBottomTabNavigator();

export default function Navigate() {
  return (
   
    <Tab.Navigator
    screenOptions={{
      headerShown:false,
      tabBarActiveTintColor:'aquamarine'
    }}>
      <Tab.Screen name="Home" component={SukunaScreen} 
      options={{
        tabBarLabel:({color})=>(
          <Text style={{color:color,fontSize:12,marginTop:-1}}>Banyuwangi</Text>
        ),
        tabBarIcon:({color,size})=>(
          <FontAwesome5 name="umbrella-beach" size={24} color="black" />
        )
      }}
      />
      <Tab.Screen name="Jahudi" component={Slider} 
      options={{
        tabBarLabel:({color})=>(
          <Text style={{color:color,fontSize:12,marginTop:-1}}>Jahudi</Text>
        ),
        tabBarIcon:({color,size})=>(
          <FontAwesome5 name="star-of-david" size={24} color="black" />
        )
      }}
      />
      <Tab.Screen name="islam" component={AoyamaYugaScreen} 
      options={{
        tabBarLabel:({color})=>(
          <Text style={{color:color,fontSize:12,marginTop:-1}}>Islam</Text>
        ),
        tabBarIcon:({color,size})=>(
          <FontAwesome6 name="star-and-crescent" size={24} color="black" />
        )
      }}
      />
      <Tab.Screen name="toilet" component={AoyamaYugaScreen} 
      options={{
        tabBarLabel:({color})=>(
          <Text style={{color:color,fontSize:12,marginTop:-1}}>Toilet</Text>
        ),
        tabBarIcon:({color,size})=>(
          <FontAwesome5 name="toilet" size={24} color="black" />
        )
      }}
      />
    </Tab.Navigator>
  )
}