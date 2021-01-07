import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import FoodClickScreen from '../FoodClickScreen.js'
import LaunchScreen from '../LaunchScreen.js'
import Cart from '../Cart'
import FoodDetails from '../FoodDetails'





const Stack = createStackNavigator();

export default function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LaunchScreen' headerMode='none'>
        
     
      
      
         <Stack.Screen name='LaunchScreen' component={LaunchScreen} />

         
         <Stack.Screen
          name='FoodClickScreen'
          component={FoodClickScreen}  />
          <Stack.Screen
          name='FoodDetails'
          component={FoodDetails}  />

<Stack.Screen
          name='Cart'
          component={Cart}  />

      </Stack.Navigator>
    </NavigationContainer>
  )
}


