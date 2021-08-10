import { FloatingActionButton } from '@fluentui-react-native/floating-action-button';
import { IFocusable } from '@fluentui-react-native/interactive-hooks';
import { Stack } from '@fluentui-react-native/stack';
import * as React from 'react';
import { findNodeHandle, Text } from 'react-native';
import { stackStyle } from '../Common/styles';

export const FloatingButtonFocusTest: React.FunctionComponent<{}> = () => {
  const [state, setState] = React.useState({
    focused: false,
  });
  const buttonRef = React.useRef<IFocusable>(null);

  const onFocus = React.useCallback(() => {
    setState({ focused: !state.focused });
    if (buttonRef.current && !state.focused) {
      const node = findNodeHandle(buttonRef.current);
      console.log(node);
      buttonRef.current.focus();
    }
  }, [state, setState]);

  return (
    <Stack style={stackStyle}>
      <Text>Demonstrates that disabled buttons work by not working. Focus doesn't actually apply to FAB.</Text>
      <FloatingActionButton
        content={state.focused ? 'Focused' : 'Not Focused'}
        componentRef={buttonRef}
        accessibilityLabel="overridden button name"
      />
      <FloatingActionButton content="Click to focus" onClick={onFocus} tooltip="button tooltip" />
      <FloatingActionButton content="Disabled Button" onClick={onFocus} tooltip="disabled button" disabled />
    </Stack>
  );
};
