import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {Text, Button, View, TextInput, StyleSheet} from 'react-native';
import { SelectList } from "react-native-dropdown-select-list";


export default function Settings() {
    let [text, setText] = useState('');
    let [data, setData] = useState([{key: "0", value: ""}]);
    let [selected, setSelected] = useState("");

    function addItem() {
        if (text !== '') {
            const newItem = { key: data.length.toString(), value: text };
            setData([...data, newItem]);
            setText('');
        }

    }

    return (
        <View style={styles.container}>
            <TextInput
                style={{height: 40}}
                placeholder="Catagory name"
                onChangeText={setText}
            ></TextInput>
            <SelectList
                style={{ width: 100 }}
                setSelected={setSelected} 
                data={data} 
                save="value"
            />
            <Button
                title="Add item"
                onPress={addItem}
            ></Button>
            <Text>{selected}</Text>
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