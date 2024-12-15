import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import Activity1 from "./Activity1";
import Activity2 from "./Activity2";
import Activity3 from "./Activity3";
import Activity4 from "./Activity4";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Activity1" component={Activity1} />
        <Stack.Screen name="Activity2" component={Activity2} />
        <Stack.Screen name="Activity3" component={Activity3} />
        <Stack.Screen name="Activity4" component={Activity4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
