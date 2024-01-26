import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SukunaScreen from '../Screen/SukunaScreen';

import AoyamaYugaScreen from '../Screen/AoyamaYugaScreen';
import { Text } from 'react-native';
// import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Entypo } from '@expo/vector-icons';


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
          <Text style={{color:color,fontSize:12,marginTop:-1}}>Home</Text>
        ),
        tabBarIcon:({color,size})=>(
          <Entypo name="home" size={24} color="black" />
          // <FontAwesome name='home' size={24} color={color}/>
        )
      }}
      />
      <Tab.Screen name="Settings" component={AoyamaYugaScreen} />
    </Tab.Navigator>
  )
}