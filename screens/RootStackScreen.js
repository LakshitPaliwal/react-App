import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import SplashCancel from './SplashCancel';

const RootStack=createStackNavigator();

const RootStackScreen= ({navigation}) => {
    return(
    <RootStack.Navigator headerMode="none">
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>
        <RootStack.Screen name="SplashCancel" component={SplashCancel}/>
    </RootStack.Navigator>
    )}
export default RootStackScreen;