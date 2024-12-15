import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function Activity4() {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, isPressed && styles.buttonPressed]}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Text style={styles.buttonText}>Exit App</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  button: {
    borderColor: "#505050",
    borderWidth: 09,
    borderRadius: 13,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonPressed: {
    backgroundColor: "#90EE90",
  },
  buttonText: {
    color: "#505050",
    fontSize: 16,
  },
});
