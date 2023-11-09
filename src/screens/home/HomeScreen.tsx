import * as React from 'react';

import { StyleSheet, View, Button, Text } from 'react-native';
import switchTheme from 'react-native-theme-switch-animation';

import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { light, dark } from '../../redux/slice/themeSlice';
import { Theme } from '../../utils/constants';

export default function HomeScreen() {
  
  const theme = useAppSelector((state) => state.theme.value)
  const dispatch = useAppDispatch()

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: theme === 'light' ? 'white' : 'black',
      }}
    >
      <Button
        title="Switch Theme"
        onPress={() => {
          switchTheme({
            switchThemeFunction: () => {
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
        }}
      />

      <View style={{backgroundColor: theme === 'light' ? 'red' : 'green',
       width: 600, height: 600, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: theme === 'light' ? 'black' : 'white', fontSize: 30,
         fontWeight: 'bold', fontStyle: 'italic'}}>WELCOME HOME</Text>

      </View>

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