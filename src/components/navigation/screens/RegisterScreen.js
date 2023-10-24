import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const RegisterScreen = () => {
    const navigation = useNavigation();

    const goToHome = () => {
        navigation.navigate('Home');
    };
    const goToLogin = () => {
    navigation.navigate('Login');
    };

    const [value, onChangeText] = React.useState('');

    return(
        <SafeAreaView style={styles.container}>
            <Image source={require('../../../../assets/HELPI.png')} style={styles.logoImage} />
            <Text>Cadastro</Text>
            <Text style={styles.text}>Nome</Text>
            <TextInput 
                style={styles.textinput}
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
                style={styles.textinput}
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
                style={styles.textinput}
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
                style={styles.textinput}
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
                style={styles.textinput}
                editable        
                multiline
                numberOfLines={1}
                maxLength={40}
                onChangeText={text => onChangeText(text)}
                placeholder= 'Confirmar senha'
                value={value}
            />
            <TouchableOpacity style={styles.registerButton} onPress={goToHome}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
            <Text style={styles.loginButton} onPress={goToLogin}>Logar</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    logoImage: {
        width: 175,
        height: 175,
        borderRadius: 100,
        alignSelf: 'center',
        marginTop: 15,
    },
    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    buttonText: {
        color: '#FFFFFF',
    },
    container: {
        flex: 1,
        backgroundColor: '#a24fb0',
        padding: 20,
    },
    registerButton: {
        backgroundColor: 'purple',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 25,
      },
    text: {
        color: '#FFFFFF',
        fontSize: 15,
        marginTop: 15,
        marginLeft: 5,
    },
    textinput: {
        backgroundColor: '#FFFFFF',
        height: 50,
        padding: 10,
        borderRadius: 10,
        marginTop: 15,
    },
    loginButton: {
        color: '#1bd39d',
        textAlign: 'center',
        marginTop: 10,
    }
})
export default RegisterScreen;