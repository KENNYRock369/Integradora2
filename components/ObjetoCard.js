import { FlatList, StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import { colors, recipeList } from '../screens/product/Constant';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const ObjetoCard = () => {
  const navigation = useNavigation();
  // Estado para manejar la selección de corazón de cada tarjeta individualmente
  const [heartedItems, setHeartedItems] = useState([]);

  // Función para manejar el cambio de estado del corazón para una tarjeta específica
  const toggleHeart = (id) => {
    if (heartedItems.includes(id)) {
      setHeartedItems(heartedItems.filter(itemId => itemId !== id)); // Si ya está marcada, la desmarca
    } else {
      setHeartedItems([...heartedItems, id]); // Si no está marcada, la marca
    }
  };

  return (
    <View>
      <FlatList 
        data={recipeList} 
        renderItem={({ item }) => (
          <Pressable 
            key={item.id} 
            onPress={() => navigation.navigate("ObjetoDetalles", { item: item })}
            style={{
              backgroundColor: colors.COLOR_LIGHT,  
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 7,
              borderRadius: 26,
              marginVertical: 16,
              alignItems: 'center',
              paddingHorizontal: 8,
              paddingVertical: 26,
              width: '45%',
              margin: '2.5%',
              elevation: 4,
              position: 'relative',
            }}
          >
            {/* Icono de corazón con funcionalidad */}
            <Pressable onPress={() => toggleHeart(item.id)} style={{ position: 'absolute', top: 8, right: 8 }}>
              <FontAwesome
                name={heartedItems.includes(item.id) ? "heart" : "heart-o"}
                size={24}
                color={heartedItems.includes(item.id) ? "red" : "black"}
              />
            </Pressable>
            {/* Imagen y detalles del objeto */}
            <Image source={item.image} style={{ width: 150, height: 150, resizeMode: "center" }} />
            <Text>{item.name}</Text>
            <View style={{ flexDirection: "row", marginTop: 8 }}>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ marginRight: 4 }}>{item.cali}</Text>
                <FontAwesome 
                  name="star"
                  size={16}
                  color={colors.COLOR_PRIMARY}
                />
              </View>
            </View>
          </Pressable>
        )}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ObjetoCard;

const styles = StyleSheet.create({});
