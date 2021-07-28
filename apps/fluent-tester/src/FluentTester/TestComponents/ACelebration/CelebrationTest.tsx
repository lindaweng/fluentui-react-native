import * as React from 'react';
import { Stack } from '@fluentui-react-native/stack';
import { Test, TestSection, PlatformStatus } from '../Test';
import { CELEBRATION_TESTPAGE } from './consts';
import { Animated, Easing } from 'react-native';

const getAnimation = () => {
  const dropAnimation = React.useRef(new Animated.Value(0)).current;
  const horizontalAnimation = React.useRef(new Animated.Value(0)).current;
  const spinAnimation = React.useRef(new Animated.Value(0)).current;
  const endX = Math.random() * 500 - 250;
  const endSpin = Math.random() * 20;
  Animated.loop(
    Animated.parallel([
      Animated.timing(dropAnimation, {
        toValue: 500,
        duration: 1000,
        delay: 1000,
        useNativeDriver: false,
        easing: Easing.ease,
      }),
      Animated.timing(horizontalAnimation, {
        toValue: endX,
        duration: 1000,
        delay: 1000,
        useNativeDriver: false,
        easing: Easing.out(Easing.ease),
      }),
      Animated.timing(spinAnimation, {
        toValue: endSpin,
        duration: 900,
        delay: 900,
        useNativeDriver: false,
        // easing: Easing.ease,
      }),
    ]),
  ).start();
  return [dropAnimation, horizontalAnimation, spinAnimation];
};

const celebrationTest: React.FunctionComponent = () => {
  const ViewArray = [];
  for (let index = 0; index < 10; index++) {
    // if 0, add before, if 1, add after
    const pick1 = Math.floor(Math.random() * 2);
    const pick2 = Math.floor(Math.random() * 2);
    const pick3 = Math.floor(Math.random() * 256);
    var color = '00';
    if (pick1 == 0) {
      color = 'ff' + color;
    } else {
      color = color + 'ff';
    }
    if (pick2 == 0) {
      color = '#' + pick3.toString(16) + color;
    } else {
      color = '#' + color + pick3.toString(16);
    }
    console.log(color);
    const animationValues = getAnimation();
    const styling = {
      height: 40,
      width: 15,
      backgroundColor: color,
      transform: [{ translateY: animationValues[0] }, { translateX: animationValues[1] }, { rotateZ: animationValues[2] }],
      position: 'absolute' as 'absolute',
    };
    ViewArray.push(<Animated.View key={index} style={styling} />);
  }
  console.log(ViewArray);
  return <Stack style={{ justifyContent: 'center', flexDirection: 'row' }}>{ViewArray}</Stack>;
};

const celebrationSections: TestSection[] = [
  {
    name: 'Celebration',
    testID: CELEBRATION_TESTPAGE,
    component: celebrationTest,
  },
];

export const CelebrationTest: React.FunctionComponent = () => {
  const status: PlatformStatus = {
    win32Status: 'Backlog',
    uwpStatus: 'Backlog',
    iosStatus: 'Beta',
    macosStatus: 'Backlog',
    androidStatus: 'Beta',
  };

  const description = '';

  return <Test name="Celebration Test" description={description} sections={celebrationSections} status={status} />;
};
