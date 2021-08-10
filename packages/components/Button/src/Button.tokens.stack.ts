import { IButtonTokens, IButtonProps } from './Button.types';
import { ViewStyle } from 'react-native';
import { styleFunction } from '@uifabricshared/foundation-tokens';
import { ITheme } from '@uifabricshared/theming-ramp';

const _stackKeyProps: (keyof IButtonTokens)[] = ['size'];

function _buildStackStyles(tokenProps: IButtonTokens /*, theme: ITheme */): IButtonProps {
  const stackStyle: ViewStyle = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
  };
  const { size } = tokenProps;

  // sizes for regular button, not fab
  // default is 'large'
  stackStyle.paddingHorizontal = 20;
  stackStyle.paddingVertical = 14;
  if (size) {
    if (size == 'medium') {
      stackStyle.paddingHorizontal = 12;
      stackStyle.paddingVertical = 12;
    } else if (size == 'small') {
      stackStyle.paddingHorizontal = 8;
      stackStyle.paddingVertical = 6;
    }
  }

  return { style: stackStyle };
}

export const buildStackStyles = styleFunction<IButtonProps, IButtonTokens, ITheme>(_buildStackStyles, _stackKeyProps);
