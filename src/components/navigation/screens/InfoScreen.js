import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

const Info = () => {
  const FotoPerfilURL = 'https://vivolabs.es/wp-content/uploads/2022/03/perfil-mujer-vivo.png';
  const navigation = useNavigation();
  const [image, setImage] = useState(FotoPerfilURL);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Desculpe, precisamos de permissão para acessar a galeria de imagens.');
      }
    })();
  }, []);

  const VoltaUser = () => {
    navigation.navigate('User');
  }

  const handleImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      aspect: [4, 4],
      allowsEditing: true,
      base64: true,
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  }

  return (
    <View style={styles.container}>
          <TouchableOpacity onPress={VoltaUser}>
        <Text style={styles.backButton}>{`ᐊ`}</Text>
      </TouchableOpacity>
      <View style={styles.content}>
        <Image
          source={{ uri: image }}
          style={styles.Foto}
        />
        <TouchableOpacity onPress={handleImagePicker}>
          <Text style={{ marginTop: 5, marginLeft: 28, marginBottom:15, color: 'white', fontWeight:'bold' }}>Escolher Imagem</Text>
        </TouchableOpacity>
        <Text style={styles.Nome}>Maria Fiorillo</Text>
        <Text style={styles.Cidade}>Londrina - PR</Text>
      </View>
      <View style={styles.Divisoria} />
      <Text style={styles.InfoTit}>Usuario:</Text>
      <Text></Text>
      <Text></Text>
      <Text style={styles.InfoTit}>E-mail:</Text>
      <Text></Text>
      <Text></Text>
      <Text style={styles.InfoTit}>Telefone:</Text>
      <Text></Text>
      <Text></Text>
      <Text style={styles.InfoTit}>Endereço:</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a24fb0',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60,
  },
  content: {
    marginBottom: 10,
  },
  Foto: {
    width: 150,
    height: 150,
    borderRadius: 100,
    shadowColor: "black",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  Nome: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  Cidade: {
    fontSize: 18,
    color: 'white',
    left: 28,
  },
  InfoTit: {
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
    right:140,
    fontWeight:'bold',
    color: 'white',
    fontSize: 30,
    marginBottom: 10,
  },
});

export default Info;
