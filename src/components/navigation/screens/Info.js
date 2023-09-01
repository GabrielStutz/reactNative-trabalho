import React from 'react';
import { View, Image, Text, StyleSheet, StatusBar } from 'react-native';

const Info = () => {
  const FotoPerfilURL = 'https://vivolabs.es/wp-content/uploads/2022/03/perfil-mujer-vivo.png';

  return (
    <View style={styles.container}>
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
});

export default Info;
