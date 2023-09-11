import React from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const locations = [
  'McWay Falls, California, USA',
  'Garrapata Beach, California, USA',
  'Julia Pfeiffer Beach, California, USA',
];

const LocationCard = ({ location, navigation }) => (
  <View style={styles.card}>
    <TouchableOpacity onPress={() => navigation.navigate('Details', { location })}>
      <Text style={styles.locationText}>{location}</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.button}
      onPress={() => {/* código para compartilhar */}}
    >
      <Text style={styles.buttonText}>Compartilhar</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.button}
      onPress={() => {/* código para pegar a rota */}}
    >
      <Text style={styles.buttonText}>Pegar a rota</Text>
    </TouchableOpacity>
  </View>
);

const DonateScreen = ({ navigation }) => (
  <View style={styles.container}>
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => navigation.navigate('User')}
    >
      <Text style={styles.backButtonText}>←</Text>
    </TouchableOpacity>
    <Text style={styles.title}>Minhas doações</Text>
    {locations.map((location, index) => (
      <LocationCard key={index} location={location} navigation={navigation} />
    ))}
  </View>
);

const DetailsScreen = ({ route }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{route.params.location}</Text>
    <TouchableOpacity
      style={styles.button}
      onPress={() => {/* código para compartilhar */}}
    >
      <Text style={styles.buttonText}>Compartilhar</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.button}
      onPress={() => {/* código para pegar a rota */}}
    >
      <Text style={styles.buttonText}>Pegar a rota</Text>
    </TouchableOpacity>
  </View>
);

const App = () => (
  <Stack.Navigator initialRouteName="Donate">
    <Stack.Screen name="Donate" component={DonateScreen} />
    <Stack.Screen name="Details" component={DetailsScreen} />
  </Stack.Navigator>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a24fb0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
  },
  locationText: {
    fontSize: 18,
    color: 'purple',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'purple',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 5,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
  backButton: {
    alignSelf: 'flex-start',
  },
  backButtonText: {
    fontSize: 24,
    color: 'white',
  },
});

export default App;
