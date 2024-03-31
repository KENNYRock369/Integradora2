import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { FontAwesome } from "@expo/vector-icons"

const SearchFilter = ({ icon, placeholder }) => {
  return (
    <View 
    style={{
      backgroundColor: "#fff",
      flexDirection: "row",
      paddingVertical: 10,
      paddingHorizontal: 16,
      marginVertical: -20,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 10,
      borderRadius: 15, // Ajusta este valor según tu preferencia
      borderWidth: 1, // Agrega un borde si lo deseas
      borderColor: "#ddd", // Color del borde, puedes ajustarlo según tus necesidades
    }}
    
    >
      <FontAwesome name={icon} size={28} color="black" />
      <TextInput 
        style={{ fontSize: 16, color: "#808080", marginLeft: 8, flex:1 }}
        placeholder={placeholder}
      />
    </View>
  )
}

export default SearchFilter

const styles = StyleSheet.create({})
