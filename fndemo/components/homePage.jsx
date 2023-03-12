import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {Text, Button, View, TextInput, StyleSheet} from 'react-native';


export default function HomePage() {

    return (
        <View style={styles.container}>
          <Text></Text>
          <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });