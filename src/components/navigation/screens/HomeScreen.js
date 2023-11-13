import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {

    useEffect(() => {
        fetchUsers();
      }, []);    
    const fetchUsers =  () => {
        fetch('https://dcf3-2804-1b0-1903-81d4-3858-2faa-334c-7ffd.ngrok-free.app/api/user', { method: 'GET', headers: {
        Origin: '*',
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
        } })
        .then(res => res.json())
        .then((data => console.log(data)))
        .catch(error => console.log(error));
    };

    return (
        <View style={styles.View}>
            <Text onPress={() => alert("This is the home screen.")} style={styles.Text}>Home Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    View: {
        flex: 1,
        backgroundColor: "#a24fb0",
        alignItems: "center",
        justifyContent: "center",
    },
    Text: {
        color: 'white',
        fontSize: 26,
        fontWeight: "bold",
    },
});