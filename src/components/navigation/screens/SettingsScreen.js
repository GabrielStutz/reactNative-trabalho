import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SettingsScreen() {
    return (
        <View style={styles.View}>
            <Text onPress={() => navigation.navigate('Home')} style={styles.Text}>Settings Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    View: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    Text: {
        fontSize: 26,
        fontWeight: "bold",
    },
});