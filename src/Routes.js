import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './Pages/Home';
import Teste from './Pages/Teste';
import Resultado from './Pages/Resultado';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{title: 'Questionário'}}
          component={Home}
        />
        <Stack.Screen
          name="Questionario"
          options={{title: 'Teste'}}
          component={Teste}
        />
        <Stack.Screen name="Resultado" component={Resultado} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
