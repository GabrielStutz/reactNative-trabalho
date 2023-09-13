import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text } from 'react-native';

// Screens
import HomeScreen from './screens/HomeScreen';
import CreateScreen from './screens/CreateScreen';
import UserScreen from './screens/UserScreen';
import InfoScreen from './screens/InfoScreen';
import DonateScreen from './screens/DonateScreen';

//Screen names
const homeName = "Inicio";
const createName = "Criar";
const userName = "User";

const Tab = createBottomTabNavigator();


function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator

        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          // tabBarStyle: {
          //   activeTintColor: 'purple',
          //   inactiveTintColor: '#050038',
          //   labelStyle: { paddingBottom: 10, fontSize: 10 },
          //   style: { padding: 10, height: 70 },
          // },
          headerShown: false,
          tabBarIcon: ({ focused, size  }) => {
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
              <Text style={{ color: `${focused ? '#a24fb0' : '#000' }` }}>{children}</Text>
            )
          }
        })}
      >
        <Tab.Screen name="Info" component={InfoScreen} options={{ tabBarItemStyle: { display: 'none' } }} />
        <Tab.Screen name="Donate" component={DonateScreen} options={{ tabBarItemStyle: { display: 'none' } }} />
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={createName} component={CreateScreen} />
        <Tab.Screen name={userName} component={UserScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
