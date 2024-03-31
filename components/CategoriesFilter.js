import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { categories, colors } from '../screens/product/Constant';

const CategoriesFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].category);

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
  };

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={{
                backgroundColor: selectedCategory === category.category ? colors.COLOR_PRIMARY : colors.COLOR_LIGHT,
                marginRight: 36,
                borderRadius: 80,
                paddingHorizontal: 16,
                paddingVertical: 10,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 10,
                marginVertical: 16,
              }}
              onPress={() => handleCategoryPress(category.category)}
          
            >
              <Text style={{ color: selectedCategory === category.category ? colors.COLOR_LIGHT : 'black', fontSize: 18 }}>
                {category.category}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default CategoriesFilter;

const styles = StyleSheet.create({});
