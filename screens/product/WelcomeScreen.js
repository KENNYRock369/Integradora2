import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={{flex:1, alignItems: "center",justifyContent: 'center'}}>
      <Image source={require("../../assets/imagenes/logo.png")}/>

 <Text style={{color:"#f96163", fontSize: 22, fontWeight: "bold"}}> 
 Bievenidos
 </Text>

<Text 
style={{
  fontSize: 42, 
  fontWeight:"bold",
  color: "#3c44cc", 
  marginTop:44,
  marginBottom:20
  }}
  >
    TruekLand
    </Text>
    {/* Parte del Boton */}
      <TouchableOpacity 
       onPress={()=>navigation.navigate("Singup")}
      style={{  
        backgroundColor:"black",
        borderRadius:18,
        paddingVertical:18,
        width : "80%",
        alignItems: "center"
      }}>
              
      <Text style={{fontSize:18,color:"#fff",fontWeight:"700"}}>Let's Go</Text>        
      </TouchableOpacity>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({})