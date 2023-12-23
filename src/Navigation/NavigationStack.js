// REACT-NATIVE
import React from "react";
// NAVIGATION
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation, useNavigationState, useRoute } from "@react-navigation/native";
// PAPER
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';

// SCEENS
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import Categories from "../screens/Categories";
import { ThemeContext } from "../context/ThemeContext";
// COMPONENTS

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

  const { theme } = React.useContext(ThemeContext)

    return (
            <NavigationContainer theme={theme}>
              <Stack.Navigator 
                initialRouteName="Main"
                screenOptions={{
                  headerShown: false,
                }}
                >
                    <Stack.Screen name="Main" component={TabStackScreen} />
                    <Stack.Screen name="Categories" component={Categories} />
              </Stack.Navigator>
            </NavigationContainer>
    );
  }

  const CategorieStack = createNativeStackNavigator();

