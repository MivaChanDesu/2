import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Activity1({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.button}>
          <Button title="Кнопощка1" onPress={() => {}} />
        </View>
        <View style={styles.button}>
          <Button
            title="Кнопощка2"
            onPress={() => navigation.navigate("Activity3")}
          />
        </View>
        <View style={styles.button}>
          <Button title="Кнопощка3" onPress={() => {}} />
        </View>
      </View>
      <View style={styles.middleButtons}>
        <View style={styles.fullWidthButton}>
          <Button title="Кнопощка4" onPress={() => {}} />
        </View>
        <View style={styles.fullWidthButton}>
          <Button title="Кнопощка5" onPress={() => {}} />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.button}>
          <Button title="Кнопощка6" onPress={() => {}} />
        </View>
        <View style={styles.button}>
          <Button title="Кнопощка7" onPress={() => {}} />
        </View>
        <View style={styles.button}>
          <Button title="Кнопощка8" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
  },
  middleButtons: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    flexDirection: "row",
    gap: 30,
  },
  fullWidthButton: {
    marginVertical: 5,
  },
});
