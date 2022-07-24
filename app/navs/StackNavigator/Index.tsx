import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import screenIndex from '../../screens/Index'
import screenSetting from '../../screens/Setting'

const Stack = createNativeStackNavigator();

const StackNavigator = (route) => {

    return (
        <>
            <NavigationContainer>
                <Stack.Navigator 
                    initialRouteName='Index'
                    >
                    <Stack.Screen 
                        name="Index" 
                        component={ screenIndex }
                        options={ { headerShown: false} }
                    ></Stack.Screen>
                    <Stack.Screen 
                        name="Setting" 
                        component={ screenSetting }
                        options={
                            {
                                headerTintColor: "#FFFFFF",
                                headerStyle: {
                                    backgroundColor: "#506075",
                                },
                            }
                        }
                    ></Stack.Screen>
                </Stack.Navigator> 
            </NavigationContainer>
        </>
    )

}            

export default StackNavigator;