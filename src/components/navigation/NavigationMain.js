import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text } from "react-native";

// Screens
import HomeScreen from "./screens/HomeScreen";
import CreateButtonScreen from "./screens/CreateButtonScreen";
import CreateImageScreen from "./screens/CreateImageScreen";
import CreateDescScreen from "./screens/CreateDescScreen";
import UserScreen from "./screens/UserScreen";
import InfoScreen from "./screens/InfoScreen";
import DonateScreen from "./screens/DonateScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

// Screen names
const homeName = "Home";
const createName = "Create";
const imageName = "Image";
const descName = "Desc";
const userName = "User";
const donateName = "Donate";
const infoName = "Info";
const registerName = "Register";
const loginName = "Login";;

const Tab = createBottomTabNavigator();

function MainContainer({ navigation }) {
  const [tokenChecked, setTokenChecked] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      try {
        await AsyncStorage.removeItem("userToken");
        const token = await AsyncStorage.getItem("userToken");
        console.log(token);

        if (token) {
          setTokenChecked(true);
          navigation.navigate("Home");
        } else {
          setTokenChecked(true);
          navigation.navigate(loginName);
        }
      } catch (error) {
        console.error("Erro ao verificar o token:", error.message);
      }
    };

    checkToken();
  }, [navigation]);

  return (
    <Tab.Navigator
      initialRouteName={loginName}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, size }) => {
          let iconName;
          let iconColor;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? "home" : "home-outline";
            iconColor = focused ? "#a24fb0" : "#000";
          } else if (rn === createName) {
            iconName = focused ? "add" : "add-outline";
            iconColor = focused ? "#a24fb0" : "#000";
          } else if (rn === userName) {
            iconName = focused ? "person" : "person-outline";
            iconColor = focused ? "#a24fb0" : "#000";
          }

          return <Ionicons name={iconName} size={size} color={iconColor} />;
        },
        tabBarLabel: ({ focused, children }) => {
          return (
            <Text style={{ color: `${focused ? "#a24fb0" : "#000"}` }}>
              {children}
            </Text>
          );
        },
      })}
    >

      <Tab.Screen
        name={loginName}
        component={LoginScreen}
        options={{ tabBarItemStyle: { display: 'none' }, tabBarStyle: { display: 'none' }, }}
      />
      <Tab.Screen
        name={registerName}
        component={RegisterScreen}
        options={{ tabBarItemStyle: { display: 'none' }, tabBarStyle: { display: 'none' }, }}
      />
      <Tab.Screen
        name={infoName}
        component={InfoScreen}
        options={{ tabBarItemStyle: { display: "none" } }}
      />
      <Tab.Screen
        name={descName}
        component={CreateDescScreen}
        options={{ tabBarItemStyle: { display: 'none' } }}
      />
      <Tab.Screen
        name={imageName}
        component={CreateImageScreen}
        options={{ tabBarItemStyle: { display: 'none' } }}
      />
      <Tab.Screen name={homeName} component={HomeScreen} />
      <Tab.Screen name={createName} component={CreateButtonScreen} />
      <Tab.Screen name={userName} component={UserScreen} />
    </Tab.Navigator>
  );
}
export default MainContainer;