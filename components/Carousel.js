import React, { useState, useEffect, useRef } from 'react';
import { View, FlatList, Image, Dimensions, StyleSheet } from 'react-native';

const DATA = [
  {
    id: 1,
    image: "https://tecniquero.com.mx/cdn/shop/products/Lentes_sol.5.3.png?v=1688583429&width=1445",
  },
  {
    id: 2,
    image: "https://hiraoka.com.pe/media/wysiwyg/mejores_marcas_celulares-apple.jpg",
  },
  {
    id: 3,
    image: "https://cdn1.coppel.com/images/catalog/pr/8521332-1.jpg",
  },
  {
    id: 4,
    image: "https://http2.mlstatic.com/D_NQ_NP_799015-MLU72675538822_112023-O.webp",
  },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      let newIndex = activeIndex + 1;
      if (newIndex >= DATA.length) {
        newIndex = 0;
      }
      setActiveIndex(newIndex);
      carouselRef.current.scrollToIndex({ index: newIndex, animated: true });
    }, 3000);

    return () => clearInterval(intervalId);
  }, [activeIndex]);

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.itemContainer}>
        <Image
          source={{ uri: item.image }}
          style={index === activeIndex ? styles.activeItem : styles.item}
        />
        {index === activeIndex && (
          <View style={styles.indicatorContainer}>
            {DATA.map((_, i) => (
              <View
                key={i}
                style={[
                  styles.indicator,
                  i === activeIndex ? styles.activeIndicator : null,
                ]}
              />
            ))}
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={carouselRef}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  itemContainer: {
    width: Dimensions.get('window').width * 0.7, // Reducir el ancho del contenedor
    height: 150, // Mantener la altura del contenedor
    marginHorizontal: 10,
    position: 'relative',
  },
  item: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  activeItem: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'blue',
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 5,
    left: 0,
    right: 0,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'gray',
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: 'blue',
  },
});

export default Carousel;
