import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, Button, View, TextInput, StyleSheet } from "react-native";
import { NetworkInfo } from "react-native-network-info";

export default function Settings() {
  let [text, setText] = useState("");
  let [dur, setDur] = useState(0);
  let sentText = text;

  // let network = NetworkInfo.getIPAddress();

  const submitData = async () => {
    const data = {
      name: sentText,
      duration: dur,
    };

    fetch("http://192.168.178.181:1880/api/insertCatagory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.log("Error:", error));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={{ height: 40 }}
        placeholder="Catagory name"
        onChangeText={setText}
      ></TextInput>
      <TextInput
        style={{ height: 40 }}
        placeholder="Catagory duration"
        onChangeText={setDur}
      ></TextInput>
      <Button title="Add item" onPress={submitData}></Button>
      {/* <Text>{text}</Text> */}
      {/* <Text>{network}</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
