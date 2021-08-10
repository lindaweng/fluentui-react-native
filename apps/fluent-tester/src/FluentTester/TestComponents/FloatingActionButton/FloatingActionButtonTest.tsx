import * as React from 'react';
import { FLOATINGACTIONBUTTON_TESTPAGE } from './consts';
import { Test, TestSection, PlatformStatus } from '../Test';
import { FloatingActionButton } from '@fluentui-react-native/floating-action-button';
import { Stack } from '@fluentui-react-native/stack';
import { Platform, View } from 'react-native';
import { stackStyle } from '../Common/styles';
import { SvgIconProps } from '@fluentui-react-native/icon';
import TestSvg from './test.svg';
import { FloatingButtonFocusTest } from './FloatingActionButtonDisableTest';
// Integrated FAB as folder into Button v1
// import { FloatingActionButton } from '@fluentui/react-native';

export const FloatingButtonTest: React.FunctionComponent<{}> = () => {
  const testImage = require('./icon_24x24.png');

  const svgProps: SvgIconProps = {
    src: TestSvg,
    viewBox: '0 0 500 500',
  };

  // SVG-based icons are not available on all platforms yet
  const svgIconsEnabled = ['ios', 'macos', 'win32', 'android'].includes(Platform.OS as string);

  return (
    <View>
      <Stack style={stackStyle}>
        <FloatingActionButton icon={testImage} size="small" />
        <FloatingActionButton icon={{ svgSource: svgProps, width: 20, height: 20 }} />
        <FloatingActionButton size="small" icon={testImage} content="Button with png Icon" tooltip="button tooltip" />
        {svgIconsEnabled ? (
          <FloatingActionButton
            icon={{ svgSource: svgProps, width: 20, height: 20, color: 'red' }}
            content="Button with svg Icon"
            tooltip="button tooltip"
          />
        ) : null}
      </Stack>
    </View>
  );
};

const buttonSections: TestSection[] = [
  {
    name: 'FAB Button',
    testID: FLOATINGACTIONBUTTON_TESTPAGE,
    component: FloatingButtonTest,
  },
  {
    name: 'Disabled Button',
    testID: FLOATINGACTIONBUTTON_TESTPAGE,
    component: FloatingButtonFocusTest,
  },
];

export const FloatingActionButtonTest: React.FunctionComponent<{}> = () => {
  const status: PlatformStatus = {
    win32Status: 'Experimental',
    uwpStatus: 'Experimental',
    iosStatus: 'Experimental',
    macosStatus: 'Experimental',
    androidStatus: 'Experimental',
  };

  const description =
    'Prototype of Floating Action Button. Work in progress. See "FAB Prototype and Investigation" document in FX OneDrive to learn more.';
  return <Test name="Floating Action Button Test" description={description} sections={buttonSections} status={status}></Test>;
};
