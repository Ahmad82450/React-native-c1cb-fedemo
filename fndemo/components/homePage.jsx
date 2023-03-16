import React, { useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";

export default function HomePage() {
  let [name, setName] = useState("Ahmad");
  return (
    <View style={homeStyle.container}>
      <Text>{name}</Text>
      <Button onPress={() => setName((banana = "Kassem"))} title="banana" />
    </View>
  );
}
const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
