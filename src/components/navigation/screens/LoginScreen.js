import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const LoginScreen = () => {
    return(
        
            <SafeAreaView>
                <TouchableOpacity>
                    <Text>Login</Text>
                </TouchableOpacity>
            </SafeAreaView>
    );
}

export default LoginScreen;