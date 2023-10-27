import * as React from "react";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.donation}>
                
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#a24fb0",
    },
    donation: {
        backgroundColor: "purple",
    },
    text: {
        color: 'white',
        fontSize: 26,
        fontWeight: "bold",
    },
});