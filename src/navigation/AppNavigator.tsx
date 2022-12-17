import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { DummyScreen } from "../modules"
import ModalScreen from "../modules/Dummy/ModalScreen"

const Stack = createNativeStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={DummyScreen} />
        <Stack.Screen name="Modal" component={ModalScreen} options={{ presentation: 'fullScreenModal' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App