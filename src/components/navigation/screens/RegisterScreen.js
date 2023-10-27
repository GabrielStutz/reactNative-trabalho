import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const RegisterScreen = () => {
    const navigation = useNavigation();

    const goToLogin = () => {
    navigation.navigate('Login');
    };

    const [value, onChangeText] = React.useState('');

    return(
        <SafeAreaView style={styles.container}>
            <Image source={require('../../../../assets/HELPI.png')} style={styles.logoImage} />
            <Text style={styles.titulo}>Cadastro</Text>
            <Text style={styles.text}>Nome</Text>
            <TextInput 
                style={styles.textInput}
                editable        
                multiline
                numberOfLines={1}
                maxLength={40}
                onChangeText={text => onChangeText(text)}
                placeholder= 'Nome'
                value={value}
            />            
            <Text style={styles.text}>Telefone</Text>
            <TextInput
                style={styles.textInput}
                editable        
                multiline
                numberOfLines={1}
                maxLength={40}
                onChangeText={text => onChangeText(text)}
                placeholder= 'Telefone'
                value={value}
            />
            <Text style={styles.text}>Email</Text>
            <TextInput 
                style={styles.textInput}
                editable        
                multiline
                numberOfLines={1}
                maxLength={40}
                onChangeText={text => onChangeText(text)}
                placeholder= 'Email'
                value={value}
            />
            <Text style={styles.text}>Senha</Text>
            <TextInput 
                style={styles.textInput}
                editable        
                multiline
                numberOfLines={1}
                maxLength={40}
                onChangeText={text => onChangeText(text)}
                placeholder= 'Senha'
                value={value}
            />
            <Text style={styles.text}>Confirmar senha</Text>
            <TextInput 
                style={styles.textInput}
                editable        
                multiline
                numberOfLines={1}
                maxLength={40}
                onChangeText={text => onChangeText(text)}
                placeholder= 'Confirmar senha'
                value={value}
            />
            <TouchableOpacity style={styles.registerButton} onPress={goToLogin}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
            <Text style={styles.loginButton} onPress={goToLogin}>Logar</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#a24fb0',
        padding: 20,
    },
    logoImage: {
        width: 150,
        height: 150,
        borderRadius: 100,
        alignSelf: 'center',
        marginTop: 15,
    },
    titulo: {
        color: '#FFFFFF',
        fontSize: 25,
        fontWeight: 'bold',
    },
    text: {
        color: '#FFFFFF',
        fontSize: 15,
        marginTop: 15,
        marginLeft: 5,
    },
    textInput: {
        backgroundColor: '#FFFFFF',
        height: 50,
        padding: 10,
        borderRadius: 10,
        marginTop: 15,
        fontSize: 15,
    },
    registerButton: {
        backgroundColor: 'purple',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 25,
      },
    buttonText: {
        color: '#FFFFFF',
    },
    loginButton: {
        color: '#1bd39d',
        textAlign: 'center',
        marginTop: 10,
        fontSize: 15,
    }
})

export default RegisterScreen;