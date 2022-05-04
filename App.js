import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/Home";
import CaseDetails from "./pages/CaseDetails";
import CovidCheck from "./pages/CovidCheck";
import Positive from "./pages/results/Positive";
import Negative from "./pages/results/Negative";

const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Case Details" component={CaseDetails} />
            <Stack.Screen name="Check Covid" component={CovidCheck} />
            <Stack.Screen name="Positive Result" component={Positive} />
            <Stack.Screen name="Negative Result" component={Negative} />
        </Stack.Navigator>
      </NavigationContainer>
   
  );
}

export default App;