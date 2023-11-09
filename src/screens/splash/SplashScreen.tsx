import * as React from 'react';
import { StyleSheet, View, Button, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import switchTheme from 'react-native-theme-switch-animation';
import { Screens, Theme } from '../../utils/constants';
import { RootStackParamList } from '../../navigation/rootStack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { light, dark } from '../../redux/slice/themeSlice';



export default function SplashScreen() {

  const theme = useAppSelector((state) => state.theme.value)
  const dispatch = useAppDispatch()

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const toggleTheme = () => {
    switchTheme({
      switchThemeFunction: () => {
        console.log('current theme val is: ', theme);
        
        dispatch(theme === Theme.Light ? dark() : light()); // your switch theme function
      },
      animationConfig: {
        type: 'circular',
        duration: 800,
        startingPoint: {
          cxRatio: 0.5,
          cyRatio: 0.5
        }
      },
    });
  }

  const goHome = () => {
    navigation.navigate(Screens.Home)
  }

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: theme === 'light' ? 'white' : 'black',
      }}
    >
      <Button
        title="Switch Theme"
        onPress={() => toggleTheme()}
      />

      <View style={{
        backgroundColor: theme === 'light' ? 'red' : 'green',
        width: 200, height: 200, justifyContent: 'center', alignItems: 'center'
      }}>
        <Text style={{ color: theme === 'light' ? 'black' : 'white', fontSize: 30, fontWeight: 'bold', fontStyle: 'italic' }}>HELOOO</Text>

      </View>

      <TouchableOpacity style={styles.box}
        onPress={() => goHome()}
      >
        <Text style={{color: theme === 'light' ? 'black' : 'white'}}>Go to Home</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  
});