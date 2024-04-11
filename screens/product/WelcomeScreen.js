import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 1000); // Navegar a la pantalla de Login después de 2 segundos (2000 milisegundos)
    
    // Limpia el temporizador cuando el componente se desmonta o se actualiza
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/imagenes/logo.png')} />
      <Text style={styles.title}>Bievenidos</Text>
      <Text style={styles.subtitle}>TruekLand</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#f96163',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 44,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#3c44cc',
    marginBottom: 20,
  },
});

export default WelcomeScreen;
