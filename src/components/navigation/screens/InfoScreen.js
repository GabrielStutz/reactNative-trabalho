import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Info = () => {
  const FotoPerfilURL = 'https://vivolabs.es/wp-content/uploads/2022/03/perfil-mujer-vivo.png';
  const navigation = useNavigation();

  function goToUser() {
    navigation.navigate('User');
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => goToUser()}>
        <Text style={styles.backButton}>{`← Voltar`}</Text>
      </TouchableOpacity>
      <View style={styles.Divisoria} />
      <Text style={styles.InfoTit}>Usuario:</Text>
      <View style={styles.Divisoria} />
      <Text style={styles.InfoTit}>E-mail:</Text>
      <View style={styles.Divisoria} />
      <Text style={styles.InfoTit}>Telefone:</Text>
      <View style={styles.Divisoria} />
      <Text style={styles.InfoTit}>Endereço:</Text>
      <View style={styles.Divisoria} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a24fb0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  InfoTit:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  Divisoria: {
    height: 2,
    backgroundColor: 'white',
    width: '80%',
    marginTop: 20,
    marginBottom: 20,
  },
  backButton: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
  },
});

export default Info;
