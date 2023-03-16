import React, { useEffect, useState } from "react";
import { Button, StatusBar, StyleSheet, Text, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { Dropdown } from "react-native-material-dropdown";

export default function CelebrateButton() {
  let [count, setNum] = useState(0);
  let [selected, setSelected] = useState("");
  let [data, setData] = useState([{ key: "0", value: "" }]);

  const getCatagories = () => {
    return fetch("http://192.168.178.181:1880/api/getCatagories")
      .then((response) => response.json())
      .then((json) => {
        const c_name = json.map((obj) => obj.c_name);
        setData([...c_name]);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getCatagories();
  }, [count]);

  return (
    <View style={celebratePage.container}>
      <Text>
        {count} {selected}
      </Text>
      <StatusBar style="auto" />
      <Button
        onPress={() => setNum(count + 1)}
        title="Press"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Dropdown
        label="Celebration category"
        data={data}
        ContainerStyle={celebratePage.container}
      />
      <SelectList
        setSelected={(val) => setSelected(val)}
        data={data}
        save="value"
        search={false}
        onPress={getCatagories}
      />
      <Text>{selected}</Text>
    </View>
  );
}
const celebratePage = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
