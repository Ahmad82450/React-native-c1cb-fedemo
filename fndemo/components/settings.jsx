import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {Text, Button, View, TextInput, StyleSheet} from 'react-native';
import { SelectList } from "react-native-dropdown-select-list";


export default function Settings() {
    let [text, setText] = useState('');
    let [data, setData] = useState([{key: "0", value: ""}]);
    let [dur, setDur] = useState(0);
    let [selected, setSelected] = useState("");
    let sentText = text;
    let [datab, setDatab] = useState([]);

    function addItem() {
        if (text !== '') {
            const newItem = { key: data.length.toString(), value: text };
            setData([...data, newItem]);
            setText('');
        }

    }

    const submitData = async () => {
      const data = {
        name: sentText,
        duration: dur,
      };
      
      fetch("http://192.168.178.181:1880/api/insertCatagory", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => console.log(data))
      .catch(error => console.log('Error:', error));
    }

    const retrieveData = async () => {
      useEffect(() => {
        fetch("http://192.168.178.181:1880/api/getCatagories")
        .then(response => response.json)
        .then(datab => setDatab(datab))
        .catch(error => console.error(error));
      }, [])
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={{height: 40}}
                placeholder="Catagory name"
                onChangeText={setText}
            ></TextInput>
            <TextInput
                style={{height: 40}}
                placeholder="Catagory duration"
                onChangeText={setDur}
            ></TextInput>
            <SelectList
                style={{ width: 100 }}
                setSelected={setSelected} 
                data={data} 
                save="value"
            />
            <Button
                title="Add item"
                onPress={submitData}
            ></Button>
            <Text>{selected}</Text>
            <Text>{text}</Text>
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