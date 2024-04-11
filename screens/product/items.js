import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { categories, colors } from '../screens/Constant';
import items from '../screens/items'; // Importar los datos de items.js

const CategoriesFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState(null); // Inicialmente ninguna categoría seleccionada

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
  };

  const getCategoryItems = () => {
    if (selectedCategory && selectedCategory.category === 'Gafas') {
      return items.filter(item => item.category === 'Gafas');
    }
    return [];
  };

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => handleCategoryPress(category)}
              style={{
                backgroundColor: selectedCategory === category ? colors.COLOR_PRIMARY : colors.COLOR_LIGHT,
                marginRight: 36,
                borderRadius: 8,
                paddingHorizontal: 16,
                paddingVertical: 10,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 10,
                marginVertical: 16,
              }}>
              <Text style={{ color: selectedCategory === category ? colors.COLOR_LIGHT : 'black', fontSize: 18 }}>
                {category.category}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      
      <View style={{ marginTop: 20 }}>
        {selectedCategory && (
          <>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Objects in {selectedCategory.category}</Text>
            {getCategoryItems().map((item, index) => (
              <View key={index} style={{ marginBottom: 20 }}>
                <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
                <Text>{item.description}</Text>
                <Image source={item.image} style={{ width: 100, height: 100 }} />
              </View>
            ))}
          </>
        )}
      </View>
    </View>
  );
};

export default CategoriesFilter;

const styles = StyleSheet.create({});
