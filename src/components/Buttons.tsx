import React from 'react'
import { useState } from 'react';
import { View,Text,Button,StyleSheet,TouchableOpacity } from 'react-native';
type buttons={
    button:string,
    onchange:()=>void
}
 const Buttons:React.FC<buttons> = ({button,onchange}) => {
    
  return (
    <View>
     
        <TouchableOpacity style={styles.button}   onPress={onchange}>
            <Text>{button}</Text>
        </TouchableOpacity>
        
    </View>
  )
}
const styles = StyleSheet.create({
   
    button: {
        backgroundColor: "#ccc",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
      },
      buttonText: {
        fontSize: 20,
        fontWeight: "bold",
      },
  });
export default Buttons;