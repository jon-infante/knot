import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import SignInScreen from '../screens/SignInScreen/SignInScreen'
import HomeScreen from '../screens/HomeScreen/HomeScreen'

const Stack = createStackNavigator()

function NavFlow(){
    return (
        <NavigationContainer>
                <Stack.Navigator name ="chat">
                <Stack.Screen
                    name ="HomeScreen"
                    component={HomeScreen}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name ="SignInScreen"
                    component={SignInScreen}
                    options={{headerShown: false}}
                />
                </Stack.Navigator>
        </NavigationContainer>
    )
}


function StackNavigator() {
    return (
        NavFlow()
    )
}

export default StackNavigator