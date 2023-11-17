import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';

// Screens
import HomeScreen from './screens/HomeScreen';
import CreateButtonScreen from './screens/CreateButtonScreen';
import UserScreen from './screens/UserScreen';
import InfoScreen from './screens/InfoScreen';
import DonateScreen from './screens/DonateScreen';
import CreateImageScreen from './screens/CreateImageScreen'
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

//Screen names
const homeName = "Home";
const createName = "Create";
const userName = "User";
const donateName = "Donate";
const infoName = "Info";
const registerName = "Register";
const loginName = "Login"

const Tab = createBottomTabNavigator();


function MainContainer() {
  const [tokenChecked, setTokenChecked] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      try {
        await AsyncStorage.removeItem('userToken');
        const token = await AsyncStorage.getItem('userToken');
        console.log(token)

        if (token) {
          setTokenChecked(true);
          navigation.navigate('Home');
        } else {
          setTokenChecked(true);
          navigation.navigate('Login');
        }
      } catch (error) {
        console.error('Erro ao verificar o token:', error.message);
      }
    };

    checkToken();

  }, [navigation]);

  return (
    <Tab.Navigator

      initialRouteName={loginName}
      screenOptions={({ route }) => ({
        // tabBarStyle: {
        //   activeTintColor: 'purple',
        //   inactiveTintColor: '#050038',
        //   labelStyle: { paddingBottom: 10, fontSize: 10 },
        //   style: { padding: 10, height: 70 },
        // },
        headerShown: false,
        tabBarIcon: ({ focused, size }) => {
          let iconName;
          let iconColor;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? 'home' : 'home-outline';
            iconColor = focused ? '#a24fb0' : '#000';
          } else if (rn === createName) {
            iconName = focused ? 'add' : 'add-outline';
            iconColor = focused ? '#a24fb0' : '#000';
          } else if (rn === userName) {
            iconName = focused ? 'person' : 'person-outline';
            iconColor = focused ? '#a24fb0' : '#000';
          }

          return <Ionicons name={iconName} size={size} color={iconColor} />;
        },
        tabBarLabel: ({ focused, children }) => {
          return (
            <Text style={{ color: `${focused ? '#a24fb0' : '#000'}` }}>{children}</Text>
          )
        }
      })}
    >
      <Tab.Screen name={loginName} component={LoginScreen} options={{ tabBarItemStyle: { display: 'none' } }} />
      <Tab.Screen name={registerName} component={RegisterScreen} options={{ tabBarItemStyle: { display: 'none' } }} />
      <Tab.Screen name={infoName} component={InfoScreen} options={{ tabBarItemStyle: { display: 'none' } }} />
      <Tab.Screen name={donateName} component={DonateScreen} options={{ tabBarItemStyle: { display: 'none' } }} />
      <Tab.Screen name={homeName} component={HomeScreen} />
      <Tab.Screen name={createName} component={CreateButtonScreen} />
      <Tab.Screen name={userName} component={UserScreen} />
    </Tab.Navigator>
  );
}

export default MainContainer;
