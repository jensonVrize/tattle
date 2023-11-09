import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Screens, Strings } from '../utils/constants';
import { HomeScreen, SplashScreen } from '../screens';

export type RootStackParamList = {
    Splash: undefined;
    Home: undefined;
    Settings: {
        userId: number;
    };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName={Screens.Splash}
            >
                <Stack.Screen name={Screens.Splash} component={SplashScreen} />
                <Stack.Screen name={Screens.Home} component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootStack;

