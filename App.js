import * as React from "react";
import { StatusBar } from "expo-status-bar";
import MainView from "./Navigation";
import { useEffect } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import ObjetoCard from "./components/ObjetoCard";
import Notifications from "./screens/tabScreens/Notifications";
import Singup from "./screens/Singup";
import Inicio from "./screens/tabScreens/Inicio";
import Settings from "./screens/tabScreens/Settings";
import WelcomeScreen from "./screens/product/WelcomeScreen";
import RecipeLista from "./screens/product/RecipeListaScreen"; 
import Home from "./screens/Home"; 
import EditarP from "./screens/profile/EditaP";
import Perfil from "./screens/profile/Perfil"; 
import Payments from "./screens/drawerScreens/Payments"; 


import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from "./firebase-config";

const Stack = createNativeStackNavigator();

function App() {
  const [user, setUser] = React.useState(null);

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? "Login" : "WelcomeScreen"} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Singup" component={Singup} />
        <Stack.Screen name="RecipeLista" component={RecipeLista} />
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="ObjetoCard" component={ObjetoCard} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MainView" component={MainView} />
        <Stack.Screen name="EditarP" component={EditarP} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Payments" component={Payments} />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;