import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();


const HomeScreen = () => {
  const [locations, setLocations] = React.useState([
    {
      name: 'McWay Falls',
      image: require('./mcway-falls.jpg'),
    },
    {
      name: 'Garrapata Beach',
      image: require('./garrapata-beach.jpg'),
    },
    {
      name: 'Julia Pfeiffer Beach',
      image: require('./julia-pfeiffer-beach.jpg'),
    },
  ]);


  return (
    <View>
      <Text>Minhas doações</Text>
      <FlatList
        data={locations}
        renderItem={({ item }) => (
          <View>
            <Image source={item.image} />
            <Text>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};


const SearchScreen = () => {
  return (
    <View>
      <Text>Search Screen</Text>
    </View>
  );
};


const SavedScreen = () => {
  return (
    <View>
      <Text>Saved Screen</Text>
    </View>
  );
};


const FilterScreen = () => {
  return (
    <View>
      <Text>Filter Screen</Text>
    </View>
  );
};


const App = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Saved" component={SavedScreen} />
      <Tab.Screen name="Filter" component={FilterScreen} />
    </Tab.Navigator>
  );
};


export default App;