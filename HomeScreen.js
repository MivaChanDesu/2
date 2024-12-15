import React from "react";
import {
  StyleSheet,
  View,
  Button,
  BackHandler,
  Platform,
  Dimensions,
} from "react-native";

const { height } = Dimensions.get("window");

const handleExitApp = () => {
  if (Platform.OS === "android") {
    BackHandler.exitApp();
  } else {
    alert("Exit functionality is not supported on iOS.");
  }
};

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="Кнопощка1"
          onPress={() => navigation.navigate("Activity2")}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Кнопощка2"
          onPress={() => navigation.navigate("Activity3")}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Кнопощка3"
          onPress={() => navigation.navigate("Activity4")}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Кнопощка4" onPress={handleExitApp} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  buttonContainer: {
    width: "75%",
    justifyContent: "center",
    borderRadius: 10,
    height: height * 0.2,
    marginVertical: height * 0.01,
  },
});
