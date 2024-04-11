import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable } from "react-native";
import RecipeListaScreen from "./screens/product/RecipeListaScreen";
import Payments from "./screens/drawerScreens/Payments";
import ProductRegistration from "./screens/login/ProductRegistration";
import Notifications from "./screens/tabScreens/Notifications";
import Settings from "./screens/tabScreens/Settings";
import Perfil from "./screens/profile/Perfil";
import ObjetoDetallesScreen from "./screens/product/ObjetoDetallesScreen";
import WelcomeScreen from "./screens/product/WelcomeScreen";
import Home from "./screens/login/Home";

const TopTab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function MainView({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          let iconName;
          if (route.name === "Inicio") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Notificación") {
            iconName = focused ? "notifications" : "notifications-outline";
          } else if (route.name === "Configuración") {
            iconName = focused ? "settings" : "settings-sharp";
          }
          return <Ionicons name={iconName} color={color} size={size} />;
        },
        tabBarActiveTintColor: "#8EF3B6",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Inicio"
        component={TopTabGroup}
        options={{
          headerLeft: () => (
            <Pressable onPress={() => navigation.openDrawer()}>
              <Image
                source={require("./assets/BrayanRe.png")}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 100,
                  marginLeft: 15,
                }}
              />
            </Pressable>
          ),
        }}
      />
      <Tab.Screen name="Notificación" component={Notifications} />
      <Tab.Screen name="Configuración" component={Settings} />
    </Tab.Navigator>
  );
}

function TopTabGroup() {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarLabelStyle: { textTransform: "capitalize", fontWeight: "bold" },
        tabBarIndicatorStyle: {
          height: 5,
          borderRadius: 20,
          backgroundColor: "#8EF3B6",
        },
      }}
    >
      <TopTab.Screen name="Producto" component={RecipeListaScreen} />
      <TopTab.Screen name="Cambios" component={Payments} />
      <TopTab.Screen name="Subir Producto" component={ProductRegistration} />
      <TopTab.Screen name="Carrito" component={Payments} />
    </TopTab.Navigator>
  );
}
