import React, { useEffect } from 'react';
import {
   View, Text, TouchableOpacity, GestureResponderEvent, StatusBar, SafeAreaView, Image,
} from 'react-native';
import switchTheme from 'react-native-theme-switch-animation';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { light, dark } from '../../redux/slice/themeSlice';
import { Theme, Colors, Images } from '../../utils/constants';
import styles from './HomeScreen.styles';

export default function HomeScreen() {

  const theme = useAppSelector((state) => state.theme.value)
  const dispatch = useAppDispatch()
  const backgroundColor = theme === Theme.Light ? Colors.BackgroundLightColor : Colors.BackgroundDarkColor;
  const oppositeColor = theme === Theme.Light ? Colors.BackgroundDarkColor : Colors.BackgroundLightColor;

  const changeThemeAction = (e: GestureResponderEvent) => {
    if (e.currentTarget) {
      (e.currentTarget as any).measure(
        (
          x1: number,
          y1: number,
          width: number,
          height: number,
          px: number,
          py: number
        ) => {
          switchTheme({
            switchThemeFunction: () => {
              dispatch(theme === Theme.Light ? dark() : light()); // your switch theme function
            },
            animationConfig: {
              type: 'circular',
              duration: 900,
              startingPoint: {
                cy: py + height / 2,
                cx: px + width / 2,
              }
            },
          });
        }
      );
    }
  };

  return (
    <>
      <StatusBar barStyle={theme === Theme.Light ? 'dark-content' : 'light-content'} />
      <SafeAreaView style={{ ...styles.container, backgroundColor: backgroundColor }}>

        {/* Top Bar */}
        <View style={styles.topBar}>
          <TouchableOpacity onPress={changeThemeAction}>
            <Image
              style={{
                ...styles.topBarIcon,
                tintColor: oppositeColor
              }}
              source={Images.MenuIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={changeThemeAction}>
            <Image
              style={{
                ...styles.topBarIcon,
                tintColor: oppositeColor
              }}
              source={ theme === Theme.Light ? Images.ThemeDarkIcon : Images.ThemeLightIcon}
            />
          </TouchableOpacity>

        </View>


      </SafeAreaView>
    </>
  );
}