// REACT-NATIVE
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
// NAVIGATION
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation, useNavigationState, useRoute } from "@react-navigation/native";
// PAPER
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';

// SCEENS
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ModalScreen from "../screens/ModalScreen";
import Categories from "../screens/Categories";
// COMPONENTS
import ModalButton from "../components/ModalButton";
import { Modal } from "react-native-paper";


const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();


export default function TabStackScreen() {

  const navigation = useNavigation();

    return (
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarLabel: false,
                }}
                activeColor="#e91e63"
                shifting={true}
            >
                <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={
                  {tabBarIcon: "home",
                  }
                }
                />
              <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={
                  {tabBarIcon: "cog",
                 }
                }
              />
          </Tab.Navigator>
    );
  }


export const StackScreen = () => {

  const {theme } = useColorScheme();

    return (
            <NavigationContainer theme={theme}>
              <Stack.Navigator 
                initialRouteName="Main"
                screenOptions={{
                  headerShown: false,
                }}
                >
                  <Stack.Group screenOptions={{presentation: 'modal'}}>
                    <Stack.Screen name="Modal" component={ModalScreen} />
                  </Stack.Group>
                  <Stack.Group>
                    <Stack.Screen name="Main" component={TabStackScreen} />
                    <Stack.Screen name="Categories" component={Categories} />
                  </Stack.Group>
              </Stack.Navigator>
            </NavigationContainer>
    );
  }

  const CategorieStack = createNativeStackNavigator();

