import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import Animated, { interpolate, Extrapolate, useSharedValue, useAnimatedStyle } from "react-native-reanimated";

const SRC_WIDTH = Dimensions.get("window").width;
const CARD_LENGTH_MOBILE = SRC_WIDTH * 0.8; // Tamaño para dispositivos móviles
const CARD_LENGTH_WEB = 350; // Tamaño específico para la versión web
const SPACING = SRC_WIDTH * 0.02;
const SIDECARD_LENGTH = (SRC_WIDTH * 0.18) / 2;
const AnimatedView = Animated.View;

interface ItemProps {
  index: number,
  scrollX: number,
  data: { id: string, title: string, image: any }[],
}

function Item({ index, scrollX, data }: ItemProps) {
  const size = useSharedValue(0.8);

  const inputRange = [
    (index - 1) * CARD_LENGTH_MOBILE,
    index * CARD_LENGTH_MOBILE,
    (index + 1) * CARD_LENGTH_MOBILE
  ];

  size.value = interpolate(
    scrollX,
    inputRange,
    [0.8, 1, 0.8],
    Extrapolate.CLAMP
  );

  const opacity = useSharedValue(1);
  const opacityInputRange = [
    (index - 1) * CARD_LENGTH_MOBILE,
    index * CARD_LENGTH_MOBILE,
    (index + 1) * CARD_LENGTH_MOBILE
  ];
  
  opacity.value = interpolate(
    scrollX,
    opacityInputRange,
    [0.5, 1, 0.5],
    Extrapolate.CLAMP
  );

  const cardStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scaleY: size.value }],
      opacity: opacity.value,
    }
  });

  return (
    <AnimatedView style={[styles.card, cardStyle, {
      marginLeft: index == 0 ? SIDECARD_LENGTH : SPACING,
      marginRight: index == 2 ? SIDECARD_LENGTH : SPACING,
    }]}>
      <Image
        source={data[index].image}
        style={styles.image} // Estilos para la imagen
      />
    </AnimatedView>
  );
}

export default function Carousel() {
  const [scrollX, setScrollX] = useState(0);
  const carouselRef = useRef(null);

  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
      image: require("../assets/imagenes/apple.webp"), // Ruta de la primera imagen
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
      image: require("../assets/imagenes/apple.webp"), // Ruta de la segunda imagen
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
      image: require("../assets/imagenes/apple.webp"), // Ruta de la tercera imagen
    },
    // Agrega más objetos para más imágenes
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      const lastIndex = Math.floor(scrollX / CARD_LENGTH_MOBILE);
      if (lastIndex === DATA.length - 1) {
        carouselRef.current.scrollToOffset({ offset: 0 });
      } else {
        carouselRef.current.scrollToOffset({ offset: scrollX + CARD_LENGTH_MOBILE });
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [scrollX]);

  return (
    <View style={styles.container}>
      <Animated.FlatList
        ref={carouselRef}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        decelerationRate={0.8}
        snapToInterval={CARD_LENGTH_MOBILE + (SPACING * 1.5)}
        disableIntervalMomentum={true}
        disableScrollViewPanResponder={true}
        snapToAlignment={"center"}
        data={DATA}
        horizontal={true}
        renderItem={({ item, index }) => {
          return (
            <Item index={index} scrollX={scrollX} data={DATA} />
          )
        }}
        keyExtractor={(item) => item.id}
        onScroll={(event) => {
          setScrollX(event.nativeEvent.contentOffset.x);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20, // Ajusta el margen superior según sea necesario
    marginLeft: -20, // Ajusta el margen izquierdo según sea necesario
  },
  card: {
    width: CARD_LENGTH_MOBILE, // Ancho fijo para dispositivos móviles
    height: 150, // Altura fija para dispositivos móviles
    overflow: "hidden",
    borderRadius: 15,
    // Tamaño específico para la versión web
    "@media (min-width: 600px)": {
      width: CARD_LENGTH_WEB,
      height: CARD_LENGTH_WEB, // Altura ajustada para la versión web (cuadrado)
    },
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover", // Ajusta la imagen para cubrir todo el contenedor
  },
});
