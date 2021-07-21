import * as React from 'react';
import { Text } from '@fluentui/react-native';
import { Stack } from '@fluentui-react-native/stack';
import { stackStyle, separatorStackStyle } from '../Common/styles';
import { Test, TestSection, PlatformStatus } from '../Test';
import { SVGDEMO_TESTPAGE } from './consts';
import { Svg, Path, Ellipse } from 'react-native-svg';
import { Animated, Easing, Switch } from 'react-native';

const getIceCream = () => {
  return (
    <Svg>
      <Ellipse cx="65" cy="35" rx="33" ry="35" fill="#5E42D6" />
      <Ellipse cx="38" cy="75" rx="33" ry="35" fill="#AAE684" />
      <Ellipse cx="88" cy="75" rx="33" ry="35" fill="#F623AD" />
      <Path d="M64.5 254 L 8.64136 89.75 L120.359 89.75 L 64.5 254 Z" fill="#A86718" />
    </Svg>
  );
};

const svgDemoTest: React.FunctionComponent<{}> = () => {
  const AnimatedSvg = Animated.createAnimatedComponent(Svg);
  const iceCream = getIceCream();
  const [spinAnimating, setSpinAnimating] = React.useState(true);
  const [moveAnimating, setMoveAnimating] = React.useState(true);

  const spinAnimation = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    if (spinAnimating) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(spinAnimation, {
            toValue: 359,
            duration: 1600,
            useNativeDriver: false,
            easing: Easing.linear,
          }),
        ]),
      ).start();
    } else {
      spinAnimation.stopAnimation();
    }
  });
  const moveAnimation = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    if (moveAnimating) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(moveAnimation, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false,
            easing: Easing.bounce,
          }),
          Animated.timing(moveAnimation, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false,
            delay: 1000,
          }),
        ]),
      ).start();
    } else {
      moveAnimation.stopAnimation();
    }
  });
  const interpolateMove = moveAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [500, 0],
  });
  const interpolateScale = moveAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [4, 0.5],
  });
  const interpolateSpin = spinAnimation.interpolate({
    inputRange: [0, 359],
    outputRange: ['0deg', '359deg'],
  });
  const interpolateColor = spinAnimation.interpolate({
    inputRange: [0, 90, 180, 270, 359],
    outputRange: ['#4a4df3', '#cd86a8', '#eb925a', '#cd86a8', '#4a4df3'],
  });

  const stylingSpin = {
    transform: [{ rotateZ: interpolateSpin }],
  };
  const stylingMove = {
    transform: [{ translateX: interpolateMove }],
  };
  const stylingGrow = {
    transform: [{ scaleX: interpolateScale }, { scaleY: interpolateScale }],
  };
  const stylingColor = {
    backgroundColor: interpolateColor,
  };

  return (
    <Stack style={stackStyle}>
      <Text>Spin and Color Animating</Text>
      <Switch value={spinAnimating} onValueChange={setSpinAnimating} />
      <Text>Move and Grow Animating</Text>
      <Switch value={moveAnimating} onValueChange={setMoveAnimating} />
      <Stack style={[separatorStackStyle, { height: 300 }]}>
        <AnimatedSvg width="129" height="254" viewBox="0 0 129 254" fill="none" style={stylingSpin}>
          {iceCream}
        </AnimatedSvg>
        <AnimatedSvg width="129" height="254" viewBox="0 0 129 254" fill="none" style={stylingMove}>
          {iceCream}
        </AnimatedSvg>
      </Stack>
      <Stack style={[separatorStackStyle, { height: 300 }]}>
        <AnimatedSvg width="129" height="254" viewBox="0 0 129 254" fill="none" style={stylingGrow}>
          {iceCream}
        </AnimatedSvg>
        <AnimatedSvg width="129" height="254" viewBox="0 0 129 254" fill="none" style={stylingColor}>
          {iceCream}
        </AnimatedSvg>
      </Stack>
    </Stack>
  );
};
const activityIndicatorSections: TestSection[] = [
  {
    name: 'AnimatedSvgDemo',
    testID: SVGDEMO_TESTPAGE,
    component: svgDemoTest,
  },
];

export const SvgDemoTest: React.FunctionComponent<{}> = () => {
  const status: PlatformStatus = {
    win32Status: 'Backlog',
    uwpStatus: 'Backlog',
    iosStatus: 'Beta',
    macosStatus: 'Backlog',
    androidStatus: 'Beta',
  };

  const description = '';
  return <Test name="Animated Svg Demo Test" description={description} sections={activityIndicatorSections} status={status}></Test>;
};
