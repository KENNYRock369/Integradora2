import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Alert 
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Animated from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; 


export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = () => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigation.navigate('Home' );
        console.log('Usuario ha iniciado sesión correctamente:');
      })
      .catch((error) => {
        Alert.alert("Error", "No se pudo iniciar sesión, verifique sus credenciales");
      });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
    >
      <StatusBar style="dark" />
      <Image
        style={styles.backgroundImage}
        source={require("../assets/images/bg4.png")}
      />

      {/* Contenedor de las luces */}
      <View style={styles.lightsContainer}>
        {/* LUCES */}
        <View style={styles.lights}>
          <Animated.Image
            style={styles.light}
            source={require("../assets/images/light.png")}
          />
          <Animated.Image
            style={styles.light}
            source={require("../assets/images/light.png")}
          />
        </View>
      </View>

      {/* TITULO Y FORMULARIO */}
      <View style={styles.content}>
        {/* TITULO */}
        <View style={styles.titleContainer}>
          <Animated.Text
            style={styles.title}
          >
            Iniciar Sesión
          </Animated.Text>
          <View style={styles.logoContainer}>
            <Animated.Image
              style={styles.logo}
              source={require("../assets/images/BOXL.png")}
            />
          </View>
        </View>

        {/* Formulario */}
        <View style={styles.formContainer}>
          <Animated.View
            style={styles.inputContainer}
          >
            <TextInput 
              onChangeText={(text) => setEmail(text)}
              placeholder="Email"
              placeholderTextColor="#B0B0B0"
              style={styles.input}
            />
          </Animated.View>
          <Animated.View
            style={styles.inputContainer}
          >
            <TextInput
              onChangeText={(text) => setPassword(text)}
              placeholder="Contraseña"
              placeholderTextColor="#B0B0B0"
              secureTextEntry
              style={styles.input}
            />
          </Animated.View>
          <Animated.View
            style={styles.buttonContainer}
          >
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Ingresar</Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View
            style={styles.signupContainer}
          >
            <Text style={styles.signupText}>¿No tienes una cuenta? </Text>
            <TouchableOpacity onPress={() => navigation.push("Singup")}>
              <Text style={[styles.signupText, styles.signupLink]}>Regístrate</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  backgroundImage: {
    position: 'absolute',
    top: -5,
    height: '100%',
    width: '100%'
  },
  lightsContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  lights: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%'
  },
  light: {
    height: 225,
    width: 85
  },
  content: {
    flex: 1,
    justifyContent: 'space-around',
    paddingTop: 40,
    paddingBottom: 10,
    paddingHorizontal: 20
  },
  titleContainer: {
    alignItems: 'center'
  },
  title: {
    top: -19,
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 10
  },
  logoContainer: {
    position: 'absolute'
  },
  logo: {
    height: 200,
    width: 180,
    top: '23%'
  },
  formContainer: {
    alignItems: 'center'
  },
  inputContainer: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    padding: 15,
    borderRadius: 20,
    width: '100%',
    marginBottom: 10
  },
  input: {
    color: '#000000'
  },
  buttonContainer: {
    width: '100%'
  },
  button: {
    backgroundColor: '#87CEEB',
    paddingVertical: 15,
    borderRadius: 20
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  signupText: {
    color: '#000000'
  },
  signupLink: {
    color: '#87CEEB'
  }
});
