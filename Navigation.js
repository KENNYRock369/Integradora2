import React from "react";
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Inicio from "./screens/tabScreens/Inicio";
import Notifications from "./screens/tabScreens/Notifications";
import Settings from "./screens/tabScreens/Settings";
import { Ionicons } from "@expo/vector-icons";
import TweetDetailScreen from "./screens/homeStack/TweetDetailsScreen";
import Payments from "./screens/drawerScreens/Payments";
import { Image, Pressable, useColorScheme, Text } from "react-native";
import WelcomeScreen from "./screens/product/WelcomeScreen";
import RecipeListaScreen from "./screens/product/RecipeListaScreen";
import ObjetoDetallesScreen from "./screens/product/ObjetoDetallesScreen";



const TopTab = createMaterialTopTabNavigator();

function TopTabGroup() {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarLabelStyle: { textTransform: "capitalize", fontWeight: "bold" },
        tabBarIndicatorStyle: { height: 5, borderRadius: 20, backgroundColor: "#8EF3B6" }
      }}>
      <TopTab.Screen name="Producto" component={RecipeListaScreen} />
     {/* <TopTab.Screen name="Nuevo" component={Inicio} /> */}
      <TopTab.Screen name="Cambios" component={Payments} />
      <TopTab.Screen name="Carrito" component={Payments} />
    </TopTab.Navigator>
  );
}


const Drawer = createDrawerNavigator();

// Define StackGroup antes de DrawerGroup
const Stack = createNativeStackNavigator();

function StackGroup() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TabGroup" component={TabGroup} options={{ headerShown: false }} />
      <Stack.Screen name="RecipeList" component={RecipeListaScreen} />
      <Stack.Screen name="ObjetoDetalles" component={ObjetoDetallesScreen} />

    </Stack.Navigator>
  );
}

function DrawerGroup() {
  return (
    <Drawer.Navigator>
      
      <Drawer.Screen name="Principal" component={StackGroup} options={{ headerShown: false }} />
      <Drawer.Screen name="Payments" component={Payments} />
    </Drawer.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function TabGroup({ navigation }) {
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
      })}>
      <Tab.Screen
        name="Inicio"
        component={TopTabGroup}
        options={{
          headerLeft: () => (
            <Pressable onPress={() => navigation.openDrawer()}>
              <Image source={require("./assets/BrayanRe.png")} style={{ width: 40, height: 40, borderRadius: 100, marginLeft: 15 }} />
            </Pressable>
          ),
        }}
      />
      <Tab.Screen name="Notificación" component={Notifications} />
      <Tab.Screen name="Configuración" component={Settings} />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  const currentTheme = useColorScheme();
  return (
    <NavigationContainer theme={currentTheme === "dark" ? DarkTheme : DefaultTheme}>
      <DrawerGroup />
    </NavigationContainer>
  );
}
