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
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from "../firebase-config";
import { getFirestore, collection, addDoc } from "firebase/firestore"; 

export default function Signup() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSignUp = () => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app); 
    
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        Alert.alert("Registro Exitoso", "Usuario registrado con éxito");
        console.log('Usuario registrado con éxito:', user);
        
        addDoc(collection(db, "users"), {
          name: name,
          email: email
        })
        .then((docRef) => {
          console.log("Nombre de usuario guardado en Firestore con ID: ", docRef.id);
        })
        .catch((error) => {
          console.error("Error al guardar nombre de usuario en Firestore: ", error);
        });
      })
      .catch((error) => {
        Alert.alert("Error", "No se pudo registrar el usuario");
      });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.background}>
        <StatusBar style="dark" />
        <Image
          style={styles.backgroundImage}
          source={require("../assets/images/bg4.png")}
        />

        {/* Contenedor de las luces */}
        <View style={styles.lightsContainer}>
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
            <Animated.Text style={styles.title}>Registro</Animated.Text>
            <View style={styles.logoContainer}>
              <Animated.Image
                style={styles.logo}
                source={require("../assets/images/BOXS.png")}
              />
            </View>
          </View>

          {/* Formulario */}
          <View style={styles.formContainer}>
            <Animated.View style={styles.inputContainer}>
              <TextInput
                onChangeText={(text) => setName(text)}
                placeholder="Nombre"
                placeholderTextColor="#B0B0B0"
                style={styles.input}
              />
            </Animated.View>
            <Animated.View style={styles.inputContainer}>
              <TextInput
                onChangeText={(text) => setEmail(text)}
                placeholder="Email"
                placeholderTextColor="#B0B0B0"
                style={styles.input}
              />
            </Animated.View>
            <Animated.View style={styles.inputContainer}>
              <TextInput
                onChangeText={(text) => setPassword(text)}
                placeholder="Contraseña"
                placeholderTextColor="#B0B0B0"
                secureTextEntry
                style={styles.input}
              />
            </Animated.View>
            <Animated.View style={styles.buttonContainer}>
              <TouchableOpacity onPress={handleSignUp} style={styles.button}>
                <Text style={styles.buttonText}>Registrarse</Text>
              </TouchableOpacity>
            </Animated.View>
            <Animated.View style={styles.signupContainer}>
              <Text>¿Ya tienes una cuenta? </Text>
              <TouchableOpacity onPress={() => navigation.push("Login")}>
                <Text style={styles.signupLink}>Ingreso</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  background: {
    flex: 1,
  },
  backgroundImage: {
    position: "absolute",
    top: -5,
    height: "100%",
    width: "100%",
  },
  lightsContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  lights: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  light: {
    height: 215,
    width: 80,
  },
  content: {
    flex: 1,
    justifyContent: "space-around",
    paddingTop: 48,
    paddingHorizontal: 20,
  },
  titleContainer: {
    alignItems: "center",
  },
  title: {
    top: -19,
    color: "#000000",
    fontWeight: "bold",
    fontSize: 28,
    marginBottom: 10,
  },
  logoContainer: {
    position: "absolute",
  },
  logo: {
    height: 140,
    width: 140,
    top: "30%",
  },
  formContainer: {
    alignItems: "center",
  },
  inputContainer: {
    backgroundColor: "rgba(0,0,0,0.1)",
    padding: 15,
    borderRadius: 20,
    width: "100%",
    marginBottom: 10,
  },
  input: {
    color: "#000000",
  },
  buttonContainer: {
    width: "100%",
  },
  button: {
    backgroundColor: "#87CEEB",
    paddingVertical: 15,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  signupLink: {
    color: "#87CEEB",
  },
});
