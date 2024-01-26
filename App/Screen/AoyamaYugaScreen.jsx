import React from 'react'
import { Text, View,StyleSheet } from 'react-native'

export default function AoyamaYugaScreen() {
  return (
    <View>
      <Text style={styles.menggantengkanDiri}>halo aoyama yuga</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  menggantengkanDiri: {
    marginTop:"50%",
    alignItems:"center",
    textAlign:"center",
    backgroundColor: 'black',
    color:"white"
  }
});
