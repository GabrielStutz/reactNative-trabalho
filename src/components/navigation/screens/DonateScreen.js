import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'; // Importe o componente Image aqui
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const locations = [{
    title: 'Jaqueta doação',
    description: 'Uma bela jaqueta de mulher',
    image: require('../../../../assets/Jaqueta.jpg') // Substitua pelo URL da imagem real.
  }
];

const LocationCard = ({ location, navigation }) => (
    <View style={styles.card}>
      <TouchableOpacity onPress={() => navigation.navigate('Details', { location })}>
        <Text style={styles.locationText}>{location.title}</Text>
      </TouchableOpacity>
      {location.image && (
        <Image source={location.image} style={styles.locationImage} />
      )}
      <Text style={styles.locationDescription}>{location.description}</Text>
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
    <Text style={styles.title}>{route.params.location.title}</Text>
    {route.params.location.image && (
      <Image source={route.params.location.image} style={styles.locationImage} />
    )}
    <Text style={styles.locationDescription}>{route.params.location.description}</Text>
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
  locationImage: {
    width: 200, // Defina o tamanho da imagem conforme necessário
    height: 200, // Defina o tamanho da imagem conforme necessário
    borderRadius: 10, // Para criar uma imagem circular, ajuste o valor conforme necessário
  },
  locationDescription: {
    fontSize: 16,
    color: 'black',
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
  locationTitle: {
    fontSize: 18,
    color: 'purple',
    fontWeight: 'bold', // Deixa o título em negrito
    marginBottom: 10,
  },
  locationDescription: {
    fontSize: 16,
    color: 'black',
    marginBottom: 10,
  },
  locationDescriptionWhite: {
    fontSize: 16,
    color: 'white', // Muda a cor do texto para branco
    marginBottom: 10,
  },
});

    export default App;
