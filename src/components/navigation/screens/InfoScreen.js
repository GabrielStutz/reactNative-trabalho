import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { textStyles } from '../../Fonts';

const Info = () => {
  const FotoPerfilURL = 'https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg';
  const navigation = useNavigation();
  const [image, setImage] = useState(FotoPerfilURL);
  const [userData, setUserData] = useState({
    email: '',
    enderecos: [],
    id: 0,
    nome: '',
    telefone: ''
  });
  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://dcf3-2804-1b0-1903-81d4-3858-2faa-334c-7ffd.ngrok-free.app/api/user');
        if (!response.ok) {
          throw new Error(`Erro na solicitação: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          setUserData(data[0]);
        } else {
          console.error('Formato de dados inválido ou array vazia');
        }
      } catch (error) {
        console.error('Erro ao obter dados do usuário:', error.message);
      }
    };
  
    fetchUserData();
  }, []);
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
    if (!result.canceled) { 
      setImage(result.assets[0].uri);
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
          <Text style={{ marginTop: 5, marginLeft: 25, marginBottom: 15, color: 'white', fontWeight: 'bold' }}>Escolher Imagem</Text>
        </TouchableOpacity>
        <Text style={[textStyles.titulo, { textAlign: 'center' }]}>{userData.nome}</Text>
        <Text style={textStyles.paragrafo}>Londrina - PR</Text>
      </View>
      <View style={styles.Divisoria} />
      <Text style={textStyles.paragrafoNeg}>Usuario: {userData.nome}</Text>
      <Text></Text>
      <Text></Text>
      <Text style={textStyles.paragrafoNeg}>E-mail: {userData.email}</Text>
      <Text></Text>
      <Text></Text>
      <Text style={textStyles.paragrafoNeg}>Telefone: {userData.telefone}</Text>
      <Text></Text>
      <Text></Text>
      <Text style={textStyles.paragrafoNeg}>Endereço: {userData.enderecos}</Text>
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
    marginTop: -8,
    marginLeft: 13,
    width: 130,
    height: 130,
    borderRadius: 100,
    shadowColor: "black",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  Divisoria: {
    height: 2,
    backgroundColor: 'white',
    width: '80%',
    marginTop: 20,
    marginBottom: 20,
  },
  backButton: {
    right: 140,
    fontWeight: 'bold',
    color: 'white',
    fontSize: 30,
    marginBottom: 10,
  },
});

export default Info;
