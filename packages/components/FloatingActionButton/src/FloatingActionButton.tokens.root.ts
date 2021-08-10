import { IFloatingActionButtonTokens, IFloatingActionButtonProps } from './FloatingActionButton.types';
import { ViewStyle } from 'react-native';
import { styleFunction } from '@uifabricshared/foundation-tokens';
import { ITheme } from '@uifabricshared/theming-ramp';

const _rootKeyProps: (keyof IFloatingActionButtonTokens)[] = ['size'];

function _buildRootStyles(tokenProps: IFloatingActionButtonTokens /*, theme: ITheme */): IFloatingActionButtonProps {
  const rootStyle: ViewStyle = {};
  const { size } = tokenProps;

  // default is 'large'
  // can add padding here, but how do we know if there is icon only or not?
  // adding padding here is weird, possibly due to padding in Button.settings or Button.tokens.stack.ts
  // can't change text size here
  // rootStyle.paddingHorizontal = 10;
  // rootStyle.paddingVertical = 2;
  if (size && size == 'small') {
    rootStyle.height = 48;
    rootStyle.minWidth = 48;
    // rootStyle.paddingVertical = 0;
    // rootStyle.paddingHorizontal = 12; // if only icon, no extra padding
  } else {
    rootStyle.height = 56;
    rootStyle.minWidth = 56;
  }

  return { style: rootStyle };
}

export const buildRootStyles = styleFunction<IFloatingActionButtonProps, IFloatingActionButtonTokens, ITheme>(
  _buildRootStyles,
  _rootKeyProps,
);
